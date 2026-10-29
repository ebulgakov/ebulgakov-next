# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Evgenii Bulgakov's personal portfolio site (ebulgakov.vercel.app) built with Next.js App Router. It shows a homepage (intro, competencies, experience, contacts), a filterable list of "works" (portfolio projects), and an admin area for managing works, all backed by a Postgres (Neon) database via Drizzle ORM.

## Commands

Package manager is `pnpm` (see `pnpm-lock.yaml`).

```bash
pnpm dev              # start dev server (localhost:3000)
pnpm build            # production build
pnpm start            # run production build
pnpm lint             # eslint
pnpm lint:fix         # eslint --fix
pnpm type-check       # tsc --noEmit
pnpm db:generate      # drizzle-kit generate — create a migration from schema changes
pnpm db:migrate       # drizzle-kit migrate — apply migrations to the database
pnpm db:seed          # tsx ./db/seeds/index.ts — seed the database
```

There is no test runner configured in this project.

### Environment

Copy `.env.example` to `.env` and fill in values. Required variables: `DATABASE_URL` (Postgres/Neon), `NEON_AUTH_BASE_URL`, and Cloudinary credentials (`NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`, `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`).

## Architecture

### Data layer (Drizzle + Neon)

- `db/schema.ts` defines the Postgres tables: `works`, `category`, `tags`, `workTags` (join table). Types are inferred from the schema (`Work`, `NewWork`, `Category`, `Tag`, etc.) rather than hand-written.
- `db/relations.ts` defines Drizzle relational config (`works.categoryName`, `works.workTags`) used by `db.query.*` relational queries.
- `db/index.ts` exports the singleton `db` client (neon-http driver), combining `schema` and `relations`.
- Reads live in `db/queries/*`, writes in `db/mutations/*`. `db/queries/helpers.ts` builds a shared `Filter` (`year`, `category`, `isPublished`) used across work queries.
- Mutations (`db/mutations/work.ts`) are Next.js Server Actions (`"use server"`) and each starts by checking `neonAuth()` for a `user` before touching the DB — there is no separate API-route auth layer for admin writes.
- Migrations are generated into `drizzle/` via `drizzle-kit`; `drizzle.config.ts` points at `db/schema.ts` and requires `DATABASE_URL`.
- Localized content is stored directly on rows as parallel columns (e.g. `title`/`titleRu`, `description`/`descriptionRu`, `previewDescription`/`previewDescriptionRu`) rather than in a separate translations table — UI code picks the right column based on the active locale.

### Auth

Uses `@neondatabase/auth` (Neon Auth). `app/lib/auth/server.ts` and `app/lib/auth/client.ts` create the server/client auth instances. `proxy.ts` (Next.js middleware) runs `neonAuthMiddleware` on any `/admin` route, and also rewrites `__clerk` paths to Clerk's frontend API (Neon Auth is Clerk-based under the hood) — check `proxy.ts` before changing anything under `/admin` or `/api/auth`. The `/auth` login page is a custom MUI form (`app/auth/sign-in-form.tsx`) calling `authClient.signIn.email({ email, password })`; Neon Auth's prebuilt UI (`AuthView`, `NeonAuthUIProvider`) is intentionally not used.

### Internationalization

Locale is **not** URL-based (no `/en`/`/ru` route segments). `i18n/request.ts` reads the active locale from a `locale` cookie (default `"en"`, one of `en`/`ru`), and next-intl loads the matching file from `i18n/locates/{locale}.json`. When adding UI copy, add the key to both `i18n/locates/en.json` and `i18n/locates/ru.json` — missing keys fall back to the English value via the custom `getMessageFallback`. `types/i18n.ts` defines the recursive `LocaleList` shape used to type the message catalogs.

### App structure

- Route groups/pages live under `app/`: `(home)` for the homepage sections, `works` for the public works listing/detail, `admin` for the CMS-style work editor, `auth` for login.
- UI is built on Material UI (`@mui/material`, Emotion, icons from `@mui/icons-material`). The theme lives in `app/theme.ts` (palette in hex, Tailwind-aligned breakpoints, typography `h1`–`h3` with margins, component defaults) and is applied in `app/layout.tsx` via `AppRouterCacheProvider` (`enableCssLayer: true`) + `ThemeProvider` + `CssBaseline`. Prefer MUI components (`TextField`, `Button`, `Stack`, `Grid`, `Typography`, `Link`, …) over raw HTML. `app/components/ui` holds only small custom pieces (`Divide`, `CloudinaryImage`, `FrameContainer`). Feature-specific components live alongside their domain, e.g. `app/components/admin/work/*` for the work create/edit form (uses `@dnd-kit` for reorderable image lists, Cloudinary for image upload/hosting via `next-cloudinary`).
- `app/lib/utils.ts` holds shared client/server utilities (e.g. the `cn` Tailwind classnames merge helper); `app/lib/sendGAEvent.ts` wraps Google Analytics event tracking (`@next/third-parties`).
- Image uploads sign requests through `app/api/sign-cloudinary-params` and are stored as `{ preview, public_id }` (see `WorkImage` in `types/common.ts`); a work's `previewImage` is one `WorkImage`, `images` is a `WorkImage[]`.

### Observability

Sentry is wired through `next.config.ts` (`withSentryConfig`), `sentry.server.config.ts`, `sentry.edge.config.ts`, and `instrumentation.ts`/`instrumentation-client.ts`. Vercel Speed Insights is also enabled.

## Conventions

- Styling: Tailwind CSS 4 sits on top of MUI. `app/globals.css` declares `@layer theme, base, mui, components, utilities;`, so Tailwind utilities passed via `className` always override MUI styles. MUI palette is exposed to Tailwind as `text-primary`, `bg-primary-light`, `text-secondary` (backed by `--mui-palette-*` CSS variables). MUI 9 has no system props — use `sx` (plain objects in Server Components; theme callbacks/`styled()` only in `"use client"` files).
- Admin form fields bound to react-hook-form use `FormTextField` (`app/components/admin/work/form-text-field.tsx`), which forwards the ref to the `<input>` and renders the field error.

- Import order is enforced by `eslint-plugin-import`: builtin → external → internal → parent → sibling → index → object → type, alphabetized within each group, with a blank line between groups. Run `pnpm lint:fix` after reordering imports by hand.
- Prettier: no trailing commas, double quotes, 100-char print width, Tailwind class sorting via `prettier-plugin-tailwindcss`.
- Path alias `@/*` maps to the repo root (e.g. `@/db/schema`, `@/app/lib/utils`).

# ebulgakov-next

Personal portfolio site of Evgenii Bulgakov.

Live: https://ebulgakov.vercel.app/

## About

- **Homepage** — intro, competencies, experience, a random work and contacts.
- **Works** — list of portfolio projects, filterable by year and category, with a detail page for each work.
- **Admin** — CMS-style editor under `/admin` for creating and editing works: image upload to Cloudinary, drag-and-drop image ordering, tags, categories, publish flag. Protected by Neon Auth, login at `/auth`.
- **Localization** — English and Russian. The active locale is stored in a `locale` cookie, not in the URL. Localized content lives in parallel columns on the same row (`title` / `titleRu`, `description` / `descriptionRu`).

## Tech stack

| Area          | Tools                                                                         |
| ------------- | ----------------------------------------------------------------------------- |
| Framework     | Next.js 16 (App Router, React Compiler), React 19, TypeScript 5               |
| UI            | Tailwind CSS 4, shadcn/ui (Radix UI, Base UI), lucide-react, react-markdown   |
| Forms         | react-hook-form, zod, dnd-kit                                                 |
| Database      | Postgres on Neon (`@neondatabase/serverless`), Drizzle ORM, drizzle-kit       |
| Auth          | Neon Auth (`@neondatabase/auth`)                                              |
| i18n          | next-intl                                                                     |
| Media         | Cloudinary (`next-cloudinary`, signed uploads)                                |
| Observability | Sentry, Vercel Speed Insights, Google Analytics                               |
| Tooling       | pnpm, ESLint 9, Prettier, husky, lint-staged                                  |
| Hosting       | Vercel                                                                        |

## Getting started

### Prerequisites

- Node.js 20.9 or newer
- pnpm
- A [Neon](https://neon.tech/) Postgres database with Neon Auth enabled
- A [Cloudinary](https://cloudinary.com/) account (needed only for image upload in the admin area)

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create the env file and fill in the values (see [Environment variables](#environment-variables)):

   ```bash
   cp .env.example .env
   ```

3. Apply migrations to the database:

   ```bash
   pnpm db:migrate
   ```

4. Optionally seed the database with sample works:

   ```bash
   pnpm db:seed
   ```

   > **Warning:** the seed script deletes all rows from `work_tags`, `works`, `categories` and `tags` before inserting. Do not run it against a database with real data.

5. Start the dev server:

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment variables

`.env.example` lists the database, auth and Cloudinary variables. The optional ones below are added to `.env` by hand.

| Variable                               | Required          | Purpose                                              |
| -------------------------------------- | ----------------- | ---------------------------------------------------- |
| `DATABASE_URL`                         | yes               | Neon Postgres connection string                      |
| `NEON_AUTH_BASE_URL`                   | yes               | Neon Auth endpoint, read by `@neondatabase/auth`     |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`    | for image upload  | Cloudinary cloud name                                |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | for image upload  | Cloudinary upload preset                             |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY`       | for image upload  | Cloudinary API key                                   |
| `CLOUDINARY_API_SECRET`                | for image upload  | Cloudinary API secret, used to sign upload requests  |
| `GA_ID`                                | no                | Google Analytics ID; analytics is off when unset     |
| `SENTRY_AUTH_TOKEN`                    | no                | Build-time upload of source maps to Sentry           |

## Scripts

| Command            | Description                                   |
| ------------------ | --------------------------------------------- |
| `pnpm dev`         | Start the dev server                          |
| `pnpm build`       | Production build                              |
| `pnpm start`       | Run the production build                      |
| `pnpm lint`        | Run ESLint                                    |
| `pnpm lint:fix`    | Run ESLint with autofix                       |
| `pnpm type-check`  | Run `tsc --noEmit`                            |
| `pnpm db:generate` | Generate a migration from schema changes      |
| `pnpm db:migrate`  | Apply migrations to the database              |
| `pnpm db:seed`     | Seed the database (wipes existing works data) |

There is no test runner in this project.

## Project structure

```
app/
  (home)/          homepage sections
  works/           public works list and detail page
  admin/           work editor (protected)
  auth/            login
  api/             auth handler, Cloudinary upload signing
  components/      shared and feature components (ui/ is shadcn-based)
  lib/             utilities, auth client, analytics helper
db/
  schema.ts        tables: works, categories, tags, work_tags
  relations.ts     Drizzle relations
  queries/         reads
  mutations/       writes (Server Actions, auth-checked)
  seeds/           seed script and data
drizzle/           generated migrations
i18n/              next-intl config and message catalogs (locates/en.json, locates/ru.json)
types/             shared types
proxy.ts           middleware: guards /admin
```

## Development notes

- The pre-commit hook runs `pnpm type-check` and `eslint --fix` on staged files.
- When changing `db/schema.ts`, run `pnpm db:generate` and commit the generated migration from `drizzle/`.
- New UI copy goes into both `i18n/locates/en.json` and `i18n/locates/ru.json`. Missing keys fall back to English.

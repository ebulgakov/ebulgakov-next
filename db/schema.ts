import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  primaryKey,
  jsonb,
  integer
} from "drizzle-orm/pg-core";

import type { WorkImage } from "@/types/common";

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique()
});

export const category = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique()
});

export const works = pgTable("works", {
  id: serial("id").primaryKey(),
  previewImage: jsonb().$type<WorkImage>().notNull().default({
    preview: "",
    public_id: ""
  }),
  images: jsonb().$type<WorkImage[]>().default([]),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  category: integer("category")
    .notNull()
    .default(1)
    .references(() => category.id),
  previewDescription: text("preview_description").notNull(),
  description: text("description"),
  title: text("title").notNull(),
  staticUrl: text("static_url"),
  productionUrl: text("production_url"),
  slug: text("slug").notNull().unique(),
  year: text("year").notNull(),
  isPublished: boolean("is_published").default(false).notNull()
});

export const workTags = pgTable(
  "work_tags",
  {
    workId: serial("work_id")
      .notNull()
      .references(() => works.id),
    tagId: serial("tag_id")
      .notNull()
      .references(() => tags.id)
  },
  t => ({
    pk: primaryKey({ columns: [t.workId, t.tagId] }) // Guarantee uniqueness across the combination of workId and tagId
  })
);

// Infer types
export type Work = typeof works.$inferSelect;
export type NewWork = typeof works.$inferInsert;

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;

export type WorkTag = typeof workTags.$inferInsert;
export type NewWorkTag = typeof workTags.$inferInsert;

export type Category = typeof category.$inferSelect;
export type NewCategory = typeof category.$inferInsert;

import { pgTable, serial, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const imageUploads = pgTable("image_uploads", {
  id: serial("id").primaryKey(),
  publicId: text("public_id").notNull(),
  url: text("url").notNull(),
  caption: text("caption"),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull()
});

export const works = pgTable("works", {
  id: serial("id").primaryKey(),
  stack: text("stack").array().notNull(),
  images: text("images")
    .array()
    .references(() => imageUploads.id),
  previewImage: text("preview_image")
    .notNull()
    .references(() => imageUploads.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow().notNull(),
  category: text("category").notNull(),
  previewDescription: text("preview_description").notNull(),
  description: text("description").notNull(),
  title: text("title").notNull(),
  staticUrl: text("static_url").notNull(),
  productionUrl: text("production_url").notNull(),
  slug: text("slug").notNull().unique(),
  year: text("year").notNull(),
  isPublished: boolean("is_published").default(false).notNull()
});

const schema = { works, imageUploads };

export default schema;

export type Work = typeof works.$inferSelect;
export type NewWork = typeof works.$inferInsert;

export type ImageUpload = typeof imageUploads.$inferSelect;
export type NewImageUpload = typeof imageUploads.$inferInsert;

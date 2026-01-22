import { pgTable, serial, text, timestamp, boolean, primaryKey } from "drizzle-orm/pg-core";

export const imageUploads = pgTable("image_uploads", {
  id: text("id").primaryKey(),
  publicId: text("public_id").notNull(),
  url: text("url").notNull(),
  caption: text("caption"),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull()
});

export const works = pgTable("works", {
  id: serial("id").primaryKey(),
  stack: text("stack").array().notNull(),
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

export const worksToImages = pgTable(
  "works_to_images",
  {
    workId: serial("work_id")
      .notNull()
      .references(() => works.id),
    imageId: text("image_id")
      .notNull()
      .references(() => imageUploads.id)
  },
  t => ({
    pk: primaryKey({ columns: [t.workId, t.imageId] }) // Guarantee uniqueness across the combination of workId and imageId
  })
);

const schema = { works, imageUploads, worksToImages };

export default schema;

export type Work = typeof works.$inferSelect;
export type NewWork = typeof works.$inferInsert;

export type ImageUpload = typeof imageUploads.$inferSelect;
export type NewImageUpload = typeof imageUploads.$inferInsert;

export type WorksToImages = typeof worksToImages.$inferSelect;
export type NewWorksToImages = typeof worksToImages.$inferInsert;

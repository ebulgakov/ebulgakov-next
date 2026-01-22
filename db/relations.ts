import { relations } from "drizzle-orm";

import { works, workTags, worksToImages, imageUploads, tags } from "./schema";

/**
 * Each work has one preview image, many tags, and many associated images.
 */
export const worksRelations = relations(works, ({ one, many }) => ({
  preview: one(imageUploads, {
    fields: [works.previewImage],
    references: [imageUploads.id]
  }),
  workTags: many(workTags),
  worksToImages: many(worksToImages)
}));

/**
 * Each tag can be associated with many works.
 */
export const tagsRelations = relations(tags, ({ many }) => ({
  workTags: many(workTags)
}));

/**
 * Each image upload can be associated with only one work.
 */
export const imageUploadsRelations = relations(imageUploads, ({ one }) => ({
  worksToImages: one(worksToImages)
}));

/**
 * Each workTag links one work to one tag.
 */
export const workTagsRelations = relations(workTags, ({ one }) => ({
  work: one(works, {
    fields: [workTags.workId],
    references: [works.id]
  }),
  tag: one(tags, {
    fields: [workTags.tagId],
    references: [tags.id]
  })
}));

/**
 * Each worksToImages links one work to one image.
 */
export const worksToImagesRelations = relations(worksToImages, ({ one }) => ({
  work: one(works, {
    fields: [worksToImages.workId],
    references: [works.id]
  }),
  image: one(imageUploads, {
    fields: [worksToImages.imageId],
    references: [imageUploads.id]
  })
}));

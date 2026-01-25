import { relations } from "drizzle-orm";

import { works, workTags, tags, category } from "./schema";

/**
 * Each work has one preview image, many tags, and many associated images.
 */
export const worksRelations = relations(works, ({ many, one }) => ({
  workTags: many(workTags),
  category: one(category, {
    fields: [works.category],
    references: [category.id]
  })
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

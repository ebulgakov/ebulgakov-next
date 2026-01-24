import { relations } from "drizzle-orm";

import { works, workTags, tags } from "./schema";

/**
 * Each work has one preview image, many tags, and many associated images.
 */
export const worksRelations = relations(works, ({ many }) => ({
  workTags: many(workTags)
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

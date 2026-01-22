import { eq } from "drizzle-orm";

import db from "@/db";
import { imageUploads, tags, works, workTags, worksToImages } from "@/db/schema";

async function getWorks() {
  return db
    .select({
      id: works.id,
      title: works.title,
      previewDescription: works.previewDescription,
      slug: works.slug,
      previewImageUrl: imageUploads.id
    })
    .from(works)
    .leftJoin(imageUploads, eq(works.previewImage, imageUploads.id))
    .where(eq(works.isPublished, true));
}

async function getWorkBySlug(slug: string) {
  const response = await db
    .select({
      id: works.id,
      title: works.title,
      description: works.previewDescription
    })
    .from(works)
    .where(eq(works.slug, slug))
    .groupBy(works.id)
    .limit(1);

  const [result] = response;
  if (!result) return null;

  const images = await db
    .select({
      id: imageUploads.id,
      caption: imageUploads.caption
    })
    .from(works)
    .leftJoin(worksToImages, eq(works.id, worksToImages.workId))
    .leftJoin(imageUploads, eq(worksToImages.imageId, imageUploads.id))
    .where(eq(works.slug, slug));

  const tagsResponse = await db
    .select({
      id: tags.id,
      name: tags.name
    })
    .from(works)
    .leftJoin(workTags, eq(works.id, workTags.workId))
    .leftJoin(tags, eq(workTags.tagId, tags.id))
    .where(eq(works.slug, slug));

  return { ...result, images, tags: tagsResponse };
}

export { getWorks, getWorkBySlug };

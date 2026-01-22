import { eq } from "drizzle-orm";

import db from "@/db";
import { imageUploads, works } from "@/db/schema";

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

export { getWorks };

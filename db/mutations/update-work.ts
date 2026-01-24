"use server";

import { neonAuth } from "@neondatabase/auth/next/server";
import { eq } from "drizzle-orm";

import db from "@/db";
import { works, workTags } from "@/db/schema";

async function updateWork(workId: number, workData: any) {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  // Update work tags
  const tags = workData.tags;
  await db.delete(workTags).where(eq(workTags.workId, workId));
  if (Array.isArray(tags)) {
    for (const tagId of tags) {
      await db.insert(workTags).values({
        workId: workId,
        tagId: Number(tagId)
      });
    }
  }

  const updateResult = {
    previewImage: workData.previewImage.image.id,
    category: workData.category,
    previewDescription: workData.previewDescription,
    description: workData.description,
    title: workData.title,
    staticUrl: workData.staticUrl,
    productionUrl: workData.productionUrl,
    slug: workData.slug,
    year: workData.year,
    isPublished: workData.isPublished === "on"
  };

  await db.update(works).set(updateResult).where(eq(works.id, workId));

  return {
    success: true,
    message: `Work ${workId} updated successfully`
  };
}

export { updateWork };

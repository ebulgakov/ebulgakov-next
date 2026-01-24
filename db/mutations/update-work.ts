"use server";

import { neonAuth } from "@neondatabase/auth/next/server";
import { eq } from "drizzle-orm";

import db from "@/db";
import { works, workTags } from "@/db/schema";

import type { NewWork } from "@/db/schema";

async function updateWork(workId: number, workData: NewWork & { tags: number[] }) {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  // Update work tags
  const { tags, ...updatedWork } = workData;
  await db.delete(workTags).where(eq(workTags.workId, workId));
  if (Array.isArray(tags)) {
    for (const tagId of tags) {
      await db.insert(workTags).values({
        workId: workId,
        tagId: Number(tagId)
      });
    }
  }

  await db.update(works).set(updatedWork).where(eq(works.id, workId));

  return {
    success: true,
    message: `Work ${workId} updated successfully`
  };
}

export { updateWork };

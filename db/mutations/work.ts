"use server";

import { neonAuth } from "@neondatabase/auth/next/server";
import { eq } from "drizzle-orm";

import db from "@/db";
import { works, workTags } from "@/db/schema";

import type { NewWork } from "@/db/schema";
import type { PayloadWork } from "@/types/common";

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

async function addWork(workData: PayloadWork) {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  // Update work tags
  const { tags, ...updatedWork } = workData;
  const [newWork] = await db.insert(works).values(updatedWork).returning({ insertedId: works.id });

  if (Array.isArray(tags)) {
    for (const tagId of tags) {
      await db.insert(workTags).values({
        workId: newWork.insertedId,
        tagId: Number(tagId)
      });
    }
  }

  return {
    success: true,
    message: `Work created successfully`
  };
}

export { updateWork, addWork };

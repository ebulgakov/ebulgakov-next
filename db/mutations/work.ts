"use server";

import { neonAuth } from "@neondatabase/auth/next/server";
import { eq } from "drizzle-orm";

import { workFormSchema } from "@/app/components/admin/work/schema";
import db from "@/db";
import { works, workTags } from "@/db/schema";

import type { WorkActionResult, WorkFormValues } from "@/app/components/admin/work/schema";

const invalidData: WorkActionResult = { success: false, message: "Invalid work data" };
const slugTaken: WorkActionResult = {
  success: false,
  message: "Work with this slug already exists",
  field: "slug"
};

// Postgres unique_violation; slug is the only unique column on works
function isUniqueViolation(error: unknown) {
  const cause = error instanceof Error && error.cause ? error.cause : error;
  return typeof cause === "object" && cause !== null && "code" in cause && cause.code === "23505";
}

async function updateWork(workId: number, workData: WorkFormValues): Promise<WorkActionResult> {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  const parsed = workFormSchema.safeParse(workData);
  if (!parsed.success) return invalidData;

  const { tags, ...updatedWork } = parsed.data;
  try {
    await db.update(works).set(updatedWork).where(eq(works.id, workId));
  } catch (error) {
    if (isUniqueViolation(error)) return slugTaken;
    throw error;
  }

  // Update work tags
  await db.delete(workTags).where(eq(workTags.workId, workId));
  for (const tagId of tags) {
    await db.insert(workTags).values({
      workId: workId,
      tagId
    });
  }

  return {
    success: true,
    message: `Work ${workId} updated successfully`
  };
}

async function addWork(workData: WorkFormValues): Promise<WorkActionResult> {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  const parsed = workFormSchema.safeParse(workData);
  if (!parsed.success) return invalidData;

  const { tags, ...updatedWork } = parsed.data;
  let newWork;
  try {
    [newWork] = await db.insert(works).values(updatedWork).returning({ insertedId: works.id });
  } catch (error) {
    if (isUniqueViolation(error)) return slugTaken;
    throw error;
  }

  // Update work tags
  for (const tagId of tags) {
    await db.insert(workTags).values({
      workId: newWork.insertedId,
      tagId
    });
  }

  return {
    success: true,
    message: `Work created successfully`
  };
}

async function deleteWork(workId: number) {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  await db.delete(workTags).where(eq(workTags.workId, workId));
  await db.delete(works).where(eq(works.id, workId));

  return {
    success: true,
    message: `Work ${workId} deleted successfully`
  };
}

export { updateWork, addWork, deleteWork };

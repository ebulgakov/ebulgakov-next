"use server";

import { neonAuth } from "@neondatabase/auth/next/server";
import { eq } from "drizzle-orm";

import { workFormSchema } from "@/app/components/admin/work/schema";
import db from "@/db";
import { works, workTags } from "@/db/schema";

import type { WorkActionResult, WorkFormValues } from "@/app/components/admin/work/schema";
import type { BatchItem } from "drizzle-orm/batch";

const invalidData: WorkActionResult = { success: false, message: "Invalid work data" };
const slugTaken: WorkActionResult = {
  success: false,
  message: "Work with this slug already exists",
  field: "slug"
};

// Postgres unique_violation on works.slug; other unique violations (e.g. work_tags) are not slug conflicts
function isSlugConflict(error: unknown) {
  const cause = error instanceof Error && error.cause ? error.cause : error;
  return (
    typeof cause === "object" &&
    cause !== null &&
    "code" in cause &&
    cause.code === "23505" &&
    "constraint" in cause &&
    cause.constraint === "works_slug_unique"
  );
}

async function updateWork(workId: number, workData: WorkFormValues): Promise<WorkActionResult> {
  const { user } = await neonAuth();

  if (!user) throw new Error("Unauthorized");

  const parsed = workFormSchema.safeParse(workData);
  if (!parsed.success) return invalidData;

  const { tags, ...updatedWork } = parsed.data;
  const tagRows = [...new Set(tags)].map(tagId => ({ workId, tagId }));

  // neon-http has no interactive transactions; batch runs all queries in a single one
  const queries: [BatchItem<"pg">, ...BatchItem<"pg">[]] = [
    db.update(works).set(updatedWork).where(eq(works.id, workId)),
    db.delete(workTags).where(eq(workTags.workId, workId))
  ];
  if (tagRows.length) queries.push(db.insert(workTags).values(tagRows));

  try {
    await db.batch(queries);
  } catch (error) {
    if (isSlugConflict(error)) return slugTaken;
    throw error;
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
    if (isSlugConflict(error)) return slugTaken;
    throw error;
  }

  // Update work tags
  const tagRows = [...new Set(tags)].map(tagId => ({ workId: newWork.insertedId, tagId }));
  if (tagRows.length) await db.insert(workTags).values(tagRows);

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

import { eq, sql } from "drizzle-orm";

import db from "@/db";
import { works } from "@/db/schema";

import type { Work } from "@/db/schema";

async function getWorks() {
  return db.query.works.findMany({
    where: eq(works.isPublished, true),
    columns: {
      id: true,
      title: true,
      previewDescription: true,
      slug: true,
      previewImage: true
    }
  });
}

async function getRandomWork() {
  return db.query.works.findFirst({
    where: eq(works.isPublished, true),
    orderBy: sql`RANDOM()`,
    with: {
      category: true
    }
  }) as unknown as Work;
}

async function getAllWorks() {
  return db.query.works.findMany({
    columns: {
      id: true,
      title: true,
      previewDescription: true,
      slug: true,
      previewImage: true
    }
  });
}

async function getWorkBySlug(slug: string) {
  return db.query.works.findFirst({
    where: eq(works.slug, slug),
    with: {
      workTags: {
        with: {
          tag: true
        }
      }
    }
  });
}

export { getWorks, getWorkBySlug, getAllWorks, getRandomWork };

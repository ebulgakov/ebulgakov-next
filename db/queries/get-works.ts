import { eq } from "drizzle-orm";

import db from "@/db";
import { works } from "@/db/schema";

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

export { getWorks, getWorkBySlug, getAllWorks };

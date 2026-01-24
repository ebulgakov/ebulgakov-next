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
    },
    with: {
      preview: {
        columns: {
          id: true
        }
      }
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
    },
    with: {
      preview: {
        columns: {
          id: true
        }
      }
    }
  });
}

async function getWorkBySlug(slug: string) {
  return db.query.works.findFirst({
    where: eq(works.slug, slug),
    with: {
      worksToImages: {
        with: {
          image: true
        }
      },
      workTags: {
        with: {
          tag: true
        }
      },
      preview: true
    }
  });
}

export { getWorks, getWorkBySlug, getAllWorks };

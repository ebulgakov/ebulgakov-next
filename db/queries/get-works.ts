import { eq, sql, asc, desc } from "drizzle-orm";

import db from "@/db";
import { works } from "@/db/schema";

import { createWorkFilter, type Filter } from "./helpers";

import type { Work, Category, WorkTag, Tag } from "@/db/schema";

async function getWorks(filter: Filter = {}) {
  return db.query.works.findMany({
    where: createWorkFilter(filter),
    orderBy: desc(works.year),
    columns: {
      id: true,
      title: true,
      titleRu: true,
      previewDescription: true,
      previewDescriptionRu: true,
      slug: true,
      previewImage: true
    }
  });
}

async function getRandomWork() {
  return db.query.works.findFirst({
    where: eq(works.isPublished, true),
    orderBy: sql`RANDOM()`, // https://www.answeroverflow.com/m/1242514893878591488
    with: {
      categoryName: true
    }
  }) as unknown as Work & { categoryName: Category };
}

async function getFeaturedWork() {
  return db.query.works.findFirst({
    where: eq(works.slug, 'dns'),
    with: {
      categoryName: true
    }
  }) as unknown as Work & { categoryName: Category };
}

async function getWorkBySlug(slug: string) {
  return db.query.works.findFirst({
    where: eq(works.slug, slug),
    with: {
      categoryName: true,
      workTags: {
        with: {
          tag: true
        }
      }
    }
  }) as unknown as Work & {
    categoryName: Category;
    workTags: (WorkTag & {
      tag: Tag;
    })[];
  };
}

async function getUniqueWorkYears(filter: Filter = {}) {
  return db
    .selectDistinct({ year: works.year })
    .from(works)
    .where(createWorkFilter(filter))
    .orderBy(asc(works.year))
    .then(results => results.map(result => result.year));
}

export { getWorks, getWorkBySlug, getRandomWork, getUniqueWorkYears, getFeaturedWork };

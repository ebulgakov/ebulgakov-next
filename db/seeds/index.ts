import db from "@/db";
import { works, tags, workTags, category } from "@/db/schema";

import { works as worksData } from "./works";

import type { NewCategory, NewWork, NewTag } from "@/db/schema";

async function main() {
  console.log("Seeding started...");

  // Clear existing data to prevent duplicates
  await db.delete(workTags);
  await db.delete(works);
  await db.delete(category);
  await db.delete(tags);

  console.log("Cleared existing data.");

  // Collect all unique categories from the JSON
  const allCategoriesSet = new Set<string>();
  Object.values(worksData).forEach(work => {
    allCategoriesSet.add(work.category);
  });

  const allCategories: NewCategory[] = Array.from(allCategoriesSet).map(cat => ({ name: cat }));
  const insertedCategories = await db.insert(category).values(allCategories).returning();
  console.log(`Inserted ${insertedCategories.length} unique categories.`);

  // Collect all unique tags from the JSON
  const allTagsSet = new Set<string>();
  Object.values(worksData).forEach(work => {
    work.stack.forEach(tag => {
      allTagsSet.add(tag);
    });
  });

  const allTags: NewTag[] = Array.from(allTagsSet).map(tag => ({ name: tag }));
  const insertedTags = await db.insert(tags).values(allTags).returning();
  console.log(`Inserted ${insertedTags.length} unique tags.`);

  const allWorks: NewWork[] = Object.values(worksData).map(work => ({
    title: work.title,
    description: work.description,
    previewDescription: work.previewDescription,
    year: work.year,
    stack: work.stack,
    previewImage: work.previewImage,
    images: work.images,
    category: insertedCategories.find(cat => cat.name === work.category)?.id,
    slug: work.url,
    isPublished: work.visible,
    productionUrl: work.realLink,
    staticUrl: work.staticLink
  }));
  const insertedWorks = await db.insert(works).values(allWorks).returning();
  console.log(`Inserted ${insertedWorks.length} works.`);

  const worksToImagesMap = new Map();
  const worksTagsMap = new Map();

  for (const work of Object.values(worksData)) {
    const workRecord = insertedWorks.find(w => w.slug === work.url);
    if (!workRecord) continue;

    for (const image of work.images) {
      worksToImagesMap.set(`${workRecord.id}-${image.public_id}`, {
        workId: workRecord.id,
        imageId: image.public_id
      });
    }

    for (const tagName of work.stack) {
      const tagRecord = insertedTags.find(t => t.name === tagName);
      if (!tagRecord) continue;
      worksTagsMap.set(`${workRecord.id}-${tagRecord.id}`, {
        workId: workRecord.id,
        tagId: tagRecord.id
      });
    }
  }

  const worksTagsArray = Array.from(worksTagsMap.values());
  await db.insert(workTags).values(worksTagsArray);
  console.log(`Inserted ${worksTagsArray.length} work-tag relationships.`);

  console.log("Seeding completed.");
  process.exit(0);
}

console.log("Nope, you do not want to run this accidentally.");
const allowSeeding = false; // Change to true to enable seeding
if (allowSeeding) {
  main().catch(err => {
    console.error("Error during seeding:", err);
    process.exit(1);
  });
}

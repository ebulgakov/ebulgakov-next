import db from "@/db";
import { works, worksToImages, imageUploads, tags, workTags } from "@/db/schema";

import { works as worksData, type Image } from "./works";

import type { NewImageUpload, NewWork, NewTag } from "@/db/schema";

async function main() {
  console.log("Seeding started...");

  // Clear existing data to prevent duplicates
  await db.delete(worksToImages);
  await db.delete(workTags);
  await db.delete(works);
  await db.delete(imageUploads);
  await db.delete(tags);

  console.log("Cleared existing data.");

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

  // Collect all unique images from the JSON
  const allImagesSet = new Set<Image>();
  Object.values(worksData).forEach(work => {
    work.images.forEach(image => {
      allImagesSet.add(image);
    });
    allImagesSet.add(work.previewImage);
  });

  const allImages: NewImageUpload[] = Array.from(allImagesSet).map(img => ({
    id: img.public_id,
    url: img.preview,
    caption: img.caption || ""
  }));
  const insertedImages = await db.insert(imageUploads).values(allImages).returning();
  console.log(`Inserted ${insertedImages.length} unique images.`);

  const allWorks: NewWork[] = Object.values(worksData).map(work => ({
    title: work.title,
    description: work.description,
    previewDescription: work.previewDescription,
    year: work.year,
    stack: work.stack,
    previewImage: work.previewImage.public_id,
    category: work.category,
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

  const worksToImagesArray = Array.from(worksToImagesMap.values());
  await db.insert(worksToImages).values(worksToImagesArray);
  console.log(`Inserted ${worksToImagesArray.length} work-image relationships.`);

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

import { works, worksToImages, imageUploads } from "@/db/schema";

import { works as worksData, type Image } from "./works";

import db from "./index";

import type { NewImageUpload, NewWork } from "@/db/schema";

async function main() {
  console.log("Seeding started...");

  // Clear existing data to prevent duplicates
  await db.delete(works);
  await db.delete(worksToImages);
  await db.delete(imageUploads);

  console.log("Cleared existing data.");

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

  for (const work of Object.values(worksData)) {
    const workRecord = insertedWorks.find(w => w.slug === work.url);
    if (!workRecord) continue;

    for (const image of work.images) {
      worksToImagesMap.set(`${workRecord.id}-${image.public_id}`, {
        workId: workRecord.id,
        imageId: image.public_id
      });
    }
  }

  const worksToImagesArray = Array.from(worksToImagesMap.values());

  await db.insert(worksToImages).values(worksToImagesArray);
  console.log(`Inserted ${worksToImagesArray.length} work-image relationships.`);

  console.log("Seeding completed.");
  process.exit(0);
}

main().catch(err => {
  console.error("Error during seeding:", err);
  process.exit(1);
});

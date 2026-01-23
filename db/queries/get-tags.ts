import { eq } from "drizzle-orm";

import db from "@/db";
import { workTags } from "@/db/schema";

async function getAllTags() {
  return db.query.tags.findMany({});
}

async function getTagsByWorkId(workId: number) {
  return db.query.workTags.findMany({
    where: eq(workTags.workId, workId),
    with: {
      tag: true
    }
  });
}

export { getAllTags, getTagsByWorkId };

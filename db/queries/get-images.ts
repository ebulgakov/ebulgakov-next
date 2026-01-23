import { eq } from "drizzle-orm";

import db from "@/db";
import { worksToImages } from "@/db/schema";

function getImagesByWorkId(workId: number) {
  return db.query.worksToImages.findMany({
    where: eq(worksToImages.workId, workId),
    with: {
      image: true
    }
  });
}
async function getPreviewImageByWorkId(workId: number) {
  return db.query.worksToImages.findFirst({
    where: eq(worksToImages.workId, workId),
    with: {
      image: true
    }
  });
}
export { getImagesByWorkId, getPreviewImageByWorkId };

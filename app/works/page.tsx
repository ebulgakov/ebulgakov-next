import { eq } from "drizzle-orm";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import db from "@/db/index";
import { works, imageUploads } from "@/db/schema";

async function WorksPage() {
  const worksResponse = await db
    .select({
      id: works.id,
      title: works.title,
      previewDescription: works.previewDescription,
      slug: works.slug,
      previewImageUrl: imageUploads.id
    })
    .from(works)
    .leftJoin(imageUploads, eq(works.previewImage, imageUploads.id))
    .where(eq(works.isPublished, true));
  return (
    <div>
      Works Page
      {worksResponse.map(work => (
        <div key={work.id}>
          <h2>{work.title}</h2>
          <p>{work.previewDescription}</p>
          {work.previewImageUrl && (
            <CloudinaryImage publicId={work.previewImageUrl} alt={work.title} />
          )}
          <a href={`/works/${work.slug}`}>View Work</a>
        </div>
      ))}
    </div>
  );
}

export default WorksPage;

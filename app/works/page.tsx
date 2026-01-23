import Link from "next/link";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { getWorks } from "@/db/queries/get-works";

async function WorksPage() {
  const worksResponse = await getWorks();
  return (
    <div>
      Works Page
      {worksResponse.map(work => (
        <div key={work.id}>
          <h2>{work.title}</h2>
          <p>{work.previewDescription}</p>
          {work.preview.id && (
            <CloudinaryImage width={400} height={400} src={work.preview.id} alt={work.title} />
          )}
          <Link href={`/works/${work.slug}`}>View Work</Link>
        </div>
      ))}
    </div>
  );
}

export default WorksPage;

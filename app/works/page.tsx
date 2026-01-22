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
          {work.previewImageUrl && (
            <CloudinaryImage src={work.previewImageUrl} alt={work.title} />
          )}
          <a href={`/works/${work.slug}`}>View Work</a>
        </div>
      ))}
    </div>
  );
}

export default WorksPage;

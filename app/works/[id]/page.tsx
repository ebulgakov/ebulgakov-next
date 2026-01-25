import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { FrameContainer } from "@/app/components/ui/frame-container";
import { getWorkBySlug } from "@/db/queries/get-works";

import type { Metadata } from "next";

type WorkPageProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "Eugene Bulgakov - Work"
};

async function WorkPage({ params }: WorkPageProps) {
  const { id } = await params;

  const workResponse = await getWorkBySlug(id);

  if (!workResponse) {
    return <div>Work not found</div>;
  }

  return (
    <div>
      <h1>{workResponse.title}</h1>

      <p>{workResponse.description}</p>

      {workResponse.workTags.map(({ tag }) => (
        <span key={tag.id}>{tag.name} </span>
      ))}

      {workResponse.images?.map(image => (
        <div key={image.public_id}>
          <CloudinaryImage
            width={800}
            height={600}
            src={image.public_id}
            alt={image.caption || "Work Image"}
          />
          {image.caption && <p>{image.caption}</p>}
        </div>
      ))}

      {workResponse.staticUrl && <FrameContainer link={workResponse.staticUrl} />}
    </div>
  );
}

export default WorkPage;

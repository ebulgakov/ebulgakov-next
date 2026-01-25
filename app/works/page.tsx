import Link from "next/link";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Container } from "@/app/components/ui/container";
import { Title } from "@/app/components/ui/title";
import { getWorks } from "@/db/queries/get-works";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eugene Bulgakov - Works"
};

async function WorksPage() {
  const worksResponse = await getWorks();
  return (
    <main>
      <Container>
        <Title variant="h1">All works</Title>
        <div className="grid grid-cols-3 gap-2">
          {worksResponse.map(work => (
            <Link href={`/works/${work.slug}`} className="group relative pt-[100%]" key={work.id}>
              <figure className="absolute inset-0 size-full">
                <CloudinaryImage
                  className="size-full object-cover"
                  width={400}
                  height={400}
                  src={work.previewImage.public_id}
                  alt={work.title}
                />
                <figcaption className="bg-opacity-50 absolute inset-0 bg-gray-900/70 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="text-2xl">{work.title}</div>
                  <p>{work.previewDescription}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default WorksPage;

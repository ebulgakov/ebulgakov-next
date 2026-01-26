import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Container } from "@/app/components/ui/container";
import { Divide } from "@/app/components/ui/divide";
import { FrameContainer } from "@/app/components/ui/frame-container";
import { Title } from "@/app/components/ui/title";
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

  const {
    year,
    title,
    category,
    categoryName,
    productionUrl,
    description,
    workTags,
    images,
    staticUrl
  } = workResponse;

  return (
    <main>
      <Container>
        <div className="mt-8">
          <Link href="/works" className="text-primary inline-flex gap-2 hover:underline">
            <ArrowLeft />
            Back to all works
          </Link>
        </div>

        <Title variant="h1" className="mt-3">
          {title}
        </Title>

        <div className="flex gap-8">
          <dl className="flex gap-2">
            <dt className="font-medium">Category:</dt>
            <dd>
              <Link href={`/works?category=${category}`} className="text-primary hover:underline">
                {categoryName.name}
              </Link>
            </dd>
          </dl>

          <dl className="flex gap-2">
            <dt className="font-medium">Year:</dt>
            <dd>
              <Link className="text-primary hover:underline" href={`/works?year=${year}`}>
                {year === "2000" ? "…–2010" : year}
              </Link>
            </dd>
          </dl>

          {productionUrl && (
            <dl className="flex gap-2">
              <dt className="font-medium">Link to site:</dt>
              <dd>
                <a
                  href={productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex hover:underline"
                >
                  {productionUrl} <ExternalLink className="size-4 ml-1 self-center" />
                </a>
              </dd>
            </dl>
          )}

          {staticUrl && (
            <dl className="flex gap-2">
              <dt className="font-medium">Link to live code:</dt>
              <dd>
                <a
                  href={staticUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex hover:underline"
                >
                  https://static.ebulgakov.com/ <ExternalLink className="size-4 ml-1 self-center" />
                </a>
              </dd>
            </dl>
          )}

          <dl className="flex gap-2">
            <dt className="font-medium">Used technologies:</dt>
            <dd>{workTags.map(({ tag }) => tag.name).join(", ")}</dd>
          </dl>
        </div>

        <div className="my-6">
          <Title variant="h3">Description</Title>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>

        {images?.map(image => (
          <figure key={image.public_id} className="mb-10">
            <CloudinaryImage
              className="block w-full"
              width={1280}
              height={720}
              src={image.public_id}
              alt={image.caption || "Work Image"}
            />
            {image.caption && (
              <figcaption className="mt-2 text-center text-2xl font-bold">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </Container>

      {staticUrl && (
        <div className="-mb-12">
          <Divide className="my-0" />
          <FrameContainer link={staticUrl} />
        </div>
      )}
    </main>
  );
}

export default WorkPage;

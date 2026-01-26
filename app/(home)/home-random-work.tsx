import { CirclePlay } from "lucide-react";
import Link from "next/link";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Title } from "@/app/components/ui/title";

import type { Work, Category } from "@/db/schema";

type HomeRandomWorkProps = {
  work: Work & { categoryName: Category };
};
function HomeRandomWork({ work }: HomeRandomWorkProps) {
  const linkToWork = `/works/${work.slug}`;
  return (
    <section>
      <Title variant="h1">Random work from the portfolio</Title>

      <div className="flex flex-col gap-10 md:flex-row">
        <Link href={linkToWork} className="h-50 w-70 flex-none">
          <CloudinaryImage
            className="size-full object-cover"
            width={350}
            height={350}
            src={work.previewImage.public_id}
            alt={work.title}
          />
        </Link>

        <div className="flex-1">
          <Title variant="h2">
            <Link href={linkToWork} className="text-primary hover:underline">
              {work.title}
            </Link>
          </Title>

          <div className="my-3 flex flex-col gap-4 md:flex-row md:gap-10">
            {work.productionUrl && (
              <dl>
                <dt className="text-lg md:text-xl font-medium">Link to site:</dt>
                <dd>
                  <a
                    href={work.productionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {work.productionUrl}
                  </a>
                </dd>
              </dl>
            )}

            {work.staticUrl && (
              <dl>
                <dt className="text-lg md:text-xl font-medium">Link to live code:</dt>
                <dd>
                  <a
                    href={work.staticUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://static.ebulgakov.com/
                  </a>
                </dd>
              </dl>
            )}

            <dl>
              <dt className="text-lg md:text-xl font-medium">Year:</dt>
              <dd>{work.year}</dd>
            </dl>

            <dl>
              <dt className="text-lg md:text-xl font-medium">Category:</dt>
              <dd>{work.categoryName.name}</dd>
            </dl>
          </div>

          <h3 className="mt-4 text-lg md:text-xl font-medium">Short description</h3>
          <p>{work.previewDescription}</p>

          <div className="mt-4 flex justify-end">
            <Link href="/works" className="text-primary flex gap-1">
              <CirclePlay />
              <span className="underline hover:no-underline">Show all works</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeRandomWork };

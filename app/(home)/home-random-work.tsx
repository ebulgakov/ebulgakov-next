"use client";

import { CirclePlay } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "use-intl";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Title } from "@/app/components/ui/title";

import type { Work, Category } from "@/db/schema";

type HomeRandomWorkProps = {
  locale: string;
  work: Work & { categoryName: Category };
};
function HomeRandomWork({ work, locale }: HomeRandomWorkProps) {
  const t = useTranslations("HomePage.featuredWork");
  const tWork = useTranslations("Work");
  const linkToWork = `/works/${work.slug}`;
  return (
    <section>
      <Title variant="h1">{t("title")}</Title>

      <div className="flex flex-col gap-10 md:flex-row">
        <Link href={linkToWork} className="h-50 w-full flex-none md:w-70">
          <CloudinaryImage
            className="size-full object-cover"
            width={350}
            height={350}
            src={work.previewImage.public_id}
            alt={`${locale === "en" ? work.title : work.titleRu}`}
          />
        </Link>

        <div className="flex-1">
          <Title variant="h2">
            <Link href={linkToWork} className="text-primary hover:underline">
              {locale === "en" ? work.title : work.titleRu}
            </Link>
          </Title>

          <div className="my-3 flex flex-col gap-4 md:flex-row md:gap-10">
            {work.productionUrl && (
              <dl>
                <dt className="text-lg font-medium md:text-xl">{tWork("linkToSite")}</dt>
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
                <dt className="text-lg font-medium md:text-xl">{tWork("linkToLiveCode")}</dt>
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
              <dt className="text-lg font-medium md:text-xl">{tWork("year")}</dt>
              <dd>{work.year}</dd>
            </dl>

            <dl>
              <dt className="text-lg font-medium md:text-xl">{tWork("category")}</dt>
              <dd>{work.categoryName.name}</dd>
            </dl>
          </div>

          <h3 className="mt-4 text-lg font-medium md:text-xl">{tWork("shortDescription")}</h3>
          <p>{locale === "en" ? work.previewDescription : work.previewDescriptionRu}</p>

          <div className="mt-4 flex justify-end">
            <Link href="/works" className="text-primary flex gap-1">
              <CirclePlay />
              <span className="underline hover:no-underline">{t("showAllWorks")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeRandomWork };

"use client";

import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Box, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { useTranslations } from "use-intl";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

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
      <Typography variant="h1">{t("title")}</Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
        <NextLink href={linkToWork} className="h-50 w-full flex-none md:w-70">
          <CloudinaryImage
            className="size-full object-cover"
            width={350}
            height={350}
            src={work.previewImage.public_id}
            alt={locale === "en" ? work.title : (work.titleRu ?? work.title)}
          />
        </NextLink>

        <Box className="flex-1">
          <Typography variant="h2">
            <Link href={linkToWork}>
              {locale === "en" ? work.title : (work.titleRu ?? work.title)}
            </Link>
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 5 }}
            sx={{ my: 1.5 }}
          >
            {work.productionUrl && (
              <dl>
                <dt className="text-lg font-medium md:text-xl">{tWork("linkToSite")}</dt>
                <dd>
                  <Link href={work.productionUrl} target="_blank" rel="noopener noreferrer">
                    {work.productionUrl}
                  </Link>
                </dd>
              </dl>
            )}

            {work.staticUrl && (
              <dl>
                <dt className="text-lg font-medium md:text-xl">{tWork("linkToLiveCode")}</dt>
                <dd>
                  <Link href={work.staticUrl} target="_blank" rel="noopener noreferrer">
                    https://static.ebulgakov.com/
                  </Link>
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
          </Stack>

          <Typography component="h3" className="mt-4 text-lg font-medium md:text-xl">
            {tWork("shortDescription")}
          </Typography>
          <Typography>
            {locale === "en"
              ? work.previewDescription
              : (work.previewDescriptionRu ?? work.previewDescription)}
          </Typography>

          <Stack direction="row" sx={{ justifyContent: "flex-end", mt: 2 }}>
            <Link href="/works" className="flex gap-1">
              <PlayCircleOutlinedIcon />
              {t("showAllWorks")}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </section>
  );
}

export { HomeRandomWork };

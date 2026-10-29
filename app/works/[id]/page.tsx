import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { getLocale } from "next-intl/server";
import ReactMarkdown from "react-markdown";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Divide } from "@/app/components/ui/divide";
import { FrameContainer } from "@/app/components/ui/frame-container";
import { getWorkBySlug } from "@/db/queries/get-works";

import styles from "./work.module.css";

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
  const locale = await getLocale();
  const { id } = await params;

  const workResponse = await getWorkBySlug(id);

  if (!workResponse) {
    return <div>Work not found</div>;
  }

  const {
    year,
    title,
    titleRu,
    category,
    categoryName,
    productionUrl,
    description,
    descriptionRu,
    workTags,
    images,
    staticUrl
  } = workResponse;

  return (
    <main>
      <Container>
        <Box sx={{ mt: 4 }}>
          <Link href="/works" className="inline-flex gap-2">
            <ArrowBackIcon />
            Back to all works
          </Link>
        </Box>

        <Typography variant="h1" className="mt-3">
          {locale === "en" ? title : (titleRu ?? title)}
        </Typography>

        <Stack direction={{ xs: "column", lg: "row" }} spacing={{ xs: 1, lg: 4 }}>
          <dl className="flex gap-2">
            <dt className="font-medium">Category:</dt>
            <dd>
              <Link href={`/works?category=${category}`}>{categoryName.name}</Link>
            </dd>
          </dl>

          <dl className="flex gap-2">
            <dt className="font-medium">Year:</dt>
            <dd>
              <Link href={`/works?year=${year}`}>{year === "2000" ? "…–2010" : year}</Link>
            </dd>
          </dl>

          {productionUrl && (
            <dl className="flex gap-2">
              <dt className="font-medium">Link to site:</dt>
              <dd>
                <Link
                  href={productionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  {productionUrl} <OpenInNewIcon className="ml-1 size-4 self-center" />
                </Link>
              </dd>
            </dl>
          )}

          {staticUrl && (
            <dl className="flex gap-2">
              <dt className="font-medium">Link to live code:</dt>
              <dd>
                <Link
                  href={staticUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  https://static.ebulgakov.com/{" "}
                  <OpenInNewIcon className="ml-1 size-4 self-center" />
                </Link>
              </dd>
            </dl>
          )}

          <dl className="flex gap-2">
            <dt className="font-medium">Used technologies:</dt>
            <dd>{workTags.map(({ tag }) => tag.name).join(", ")}</dd>
          </dl>
        </Stack>

        <Box sx={{ my: 3 }}>
          <Typography variant="h3">Description</Typography>
          <div className={styles.wrapper}>
            <ReactMarkdown>
              {locale === "en" ? description : (descriptionRu ?? description)}
            </ReactMarkdown>
          </div>
        </Box>

        {images?.map(image => (
          <figure key={image.public_id} className="mb-10">
            {image.caption && (
              <Typography component="figcaption" className="mt-2 text-center text-2xl font-bold">
                {image.caption}
              </Typography>
            )}
            <CloudinaryImage
              className="block w-full"
              width={1280}
              height={720}
              src={image.public_id}
              alt={image.caption || "Work Image"}
            />
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

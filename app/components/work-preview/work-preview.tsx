import { Card, CardActionArea, Typography } from "@mui/material";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

type WorkPreviewProps = {
  locale: string;
  slugPrefix?: string;
  work: {
    slug: string;
    title: string;
    titleRu: string | null;
    previewDescription: string;
    previewDescriptionRu: string | null;
    previewImage: {
      public_id: string;
    };
  };
};
function WorkPreview({ work, slugPrefix, locale }: WorkPreviewProps) {
  return (
    <Card square elevation={0} className="group relative">
      <CardActionArea
        href={`${slugPrefix}${work.slug}`}
        className="flex min-h-full flex-col items-stretch"
      >
        <div className="relative size-full pt-[100%]">
          <CloudinaryImage
            plugins={["lazyLoad"]}
            className="absolute inset-0 size-full bg-gray-900/70 object-cover"
            width={400}
            height={400}
            src={work.previewImage.public_id}
            alt={locale === "en" ? work.title : (work.titleRu ?? work.title)}
          />
        </div>
        <div className="flex-1 bg-gray-900/70 p-2 text-white transition-opacity group-hover:opacity-100 md:p-4 lg:absolute lg:inset-0 lg:opacity-0">
          <Typography component="div" className="text-lg font-medium lg:text-2xl">
            {locale === "en" ? work.title : (work.titleRu ?? work.title)}
          </Typography>
          <Typography>
            {locale === "en"
              ? work.previewDescription
              : (work.previewDescriptionRu ?? work.previewDescription)}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

export { WorkPreview };

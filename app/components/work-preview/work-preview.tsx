import Link from "next/link";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

type WorkPreviewProps = {
  slugPrefix?: string;
  work: {
    slug: string;
    title: string;
    previewDescription: string;
    previewImage: {
      public_id: string;
    };
  };
};
function WorkPreview({ work, slugPrefix }: WorkPreviewProps) {
  return (
    <Link href={`${slugPrefix}${work.slug}`} className="group relative">
      <figure className="flex min-h-full flex-col">
        <div className="relative size-full pt-[100%]">
          <CloudinaryImage
            plugins={["lazyLoad"]}
            className="absolute inset-0 size-full object-cover"
            width={400}
            height={400}
            src={work.previewImage.public_id}
            alt={work.title}
          />
        </div>
        <figcaption className="bg-opacity-50 flex-1 bg-gray-900/70 p-2 text-white transition-opacity group-hover:opacity-100 md:p-4 lg:absolute lg:inset-0 lg:opacity-0">
          <div className="text-lg lg:text-2xl font-medium">{work.title}</div>
          <p>{work.previewDescription}</p>
        </figcaption>
      </figure>
    </Link>
  );
}

export { WorkPreview };

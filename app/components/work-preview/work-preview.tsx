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
    <Link href={`${slugPrefix}${work.slug}`} className="group relative pt-[100%]">
      <figure className="absolute inset-0 size-full">
        <CloudinaryImage
          plugins={["lazyLoad"]}
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
  );
}

export { WorkPreview };

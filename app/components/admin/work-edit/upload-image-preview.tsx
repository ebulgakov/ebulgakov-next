"use client";

import { X } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Input } from "@/app/components/ui/input";

import type { ImageUpload } from "@/db/schema";

type UploadImagePreviewProps = {
  image: ImageUpload;
  onUpdateCaption?: (caption?: string) => void;
  onDelete: (id: string) => void;
};
function UploadImagePreview({ image, onDelete, onUpdateCaption }: UploadImagePreviewProps) {
  return (
    <div className="w-50">
      <div className="relative size-50">
        <button
          type="button"
          onClick={() => onDelete(image.id)}
          className="absolute -top-1 -right-1 z-10 size-5 cursor-pointer rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
        >
          <X className="size-full" />
        </button>
        <CloudinaryImage
          width={200}
          height={200}
          className="size-full rounded object-cover"
          src={image.id}
          alt={image.caption || "Uploaded Image"}
        />
      </div>
      {onUpdateCaption && (
        <Input
          placeholder="Caption"
          defaultValue={`${image.caption}`}
          onBlur={e => onUpdateCaption(e.target.value)}
          required
        />
      )}
    </div>
  );
}

export { UploadImagePreview };

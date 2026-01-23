"use client";

import { X } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

import type { ImageUpload } from "@/db/schema";

type UploadImagePreviewProps = {
  image?: ImageUpload;
  onDelete?: () => void;
  onAdd?: () => void;
};
function UploadImagePreview({ image, onDelete, onAdd }: UploadImagePreviewProps) {
  const handleAddClick = () => {
    console.log('Add image clicked');
    if (onAdd) {
      onAdd();
    }
  }

  if (!image) {
    return (
      <button
        type="button"
        onClick={handleAddClick}
        className="flex size-50 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-300 transition hover:border-gray-800"
      >
        <span className="text-gray-500">Add Image</span>
      </button>
    );
  }
  return (
    <div className="relative size-50">
      <button
        type="button"
        onClick={onDelete}
        className="absolute -top-1 -right-1 z-10 size-5 cursor-pointer rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
      >
        <X className="size-full" />
      </button>
      <CloudinaryImage className="size-full rounded object-cover" src={image.id} />
    </div>
  );
}

export { UploadImagePreview };

"use client";

import { X } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

import type { ImageUpload } from "@/db/schema";
import type { PreviewImage } from "@/types/image";
import type { ChangeEvent } from "react";

type UploadImagePreviewProps = {
  image?: ImageUpload;
  previewImage?: PreviewImage;
  onDelete?: (id: string) => void;
  onAdd?: ({ preview, source }: PreviewImage) => void;
};
function UploadImagePreview({ image, onDelete, onAdd, previewImage }: UploadImagePreviewProps) {
  const handleAddClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.files) return;

    const reader = new FileReader();
    const [file] = event.target.files;

    reader.addEventListener("load", () => {
      onAdd?.({
        preview: reader.result as string,
        source: file
      });
    });

    reader.readAsDataURL(file);
  };

  const handleRemoveClick = () => {
    if (onDelete) {
      if (image) onDelete(image.id);
      if (previewImage) onDelete(previewImage.preview);
    }
  };

  if (!image && !previewImage) {
    return (
      <label className="flex size-50 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-300 transition hover:border-gray-800">
        <span className="text-gray-500">Add Image</span>
        <input
          className="invisible absolute"
          type="file"
          accept="image/jpeg,image/png,image/gif"
          onChange={handleAddClick}
        />
      </label>
    );
  }
  return (
    <div className="relative size-50">
      <button
        type="button"
        onClick={handleRemoveClick}
        className="absolute -top-1 -right-1 z-10 size-5 cursor-pointer rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
      >
        <X className="size-full" />
      </button>
      {image ? (
        <CloudinaryImage className="size-full rounded object-cover" src={image.id} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="size-full rounded object-cover" src={previewImage?.preview} alt="Preview" />
      )}
    </div>
  );
}

export { UploadImagePreview };

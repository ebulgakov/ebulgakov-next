"use client";

import { X } from "lucide-react";

import { Input } from "@/app/components/ui/input";

import type { PreviewImage } from "@/types/image";

type UploadImagePreviewProps = {
  image: PreviewImage;
  onUpdateCaption?: (caption?: string) => void;
  onDelete: (id: string) => void;
};

function UploadImageNew({ image, onDelete, onUpdateCaption }: UploadImagePreviewProps) {
  return (
    <div className="w-50">
      <div className="relative size-50">
        <button
          type="button"
          onClick={() => onDelete(image.preview)}
          className="absolute -top-1 -right-1 z-10 size-5 cursor-pointer rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
        >
          <X className="size-full" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="size-full rounded object-cover" src={image.preview} alt="Preview" />
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

export { UploadImageNew };

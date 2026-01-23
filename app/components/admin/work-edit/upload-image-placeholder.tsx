"use client";

import type { PreviewImage } from "@/types/image";
import type { ChangeEvent } from "react";

type UploadImagePlaceholderProps = {
  onAdd: (image: PreviewImage) => void;
};

function UploadImagePlaceholder({ onAdd }: UploadImagePlaceholderProps) {
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

  return (
    <div className="w-50">
      <label className="flex size-50 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-300 transition hover:border-gray-800">
        <span className="text-gray-500">Add Image</span>
        <input
          className="invisible absolute"
          type="file"
          accept="image/jpeg,image/png,image/gif"
          onChange={handleAddClick}
        />
      </label>
    </div>
  );
}

export { UploadImagePlaceholder };

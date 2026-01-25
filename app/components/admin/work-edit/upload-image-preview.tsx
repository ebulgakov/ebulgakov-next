"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { X } from "lucide-react";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Input } from "@/app/components/ui/input";
import { WorkImage } from "@/types/image";

type UploadImagePreviewProps = {
  id: string;
  image: WorkImage;
  onUpdateCaption?: (caption?: string) => void;
  onDelete: (id: string) => void;
};
function UploadImagePreview({ image, onDelete, onUpdateCaption }: UploadImagePreviewProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: image.public_id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div className="relative w-50 bg-white" ref={setNodeRef} style={style} {...attributes}>
      <button
        type="button"
        onClick={() => onDelete(image.public_id)}
        className="absolute -top-1 -right-1 z-10 size-5 cursor-pointer rounded-full bg-red-600 p-1 text-white hover:bg-red-700"
      >
        <X className="size-full" />
      </button>
      <div className="size-50" {...listeners}>
        <CloudinaryImage
          width={200}
          height={200}
          className="size-full rounded object-cover"
          src={image.public_id}
          alt={image.caption || "Uploaded Image"}
        />
      </div>
      {onUpdateCaption && (
        <Input
          className="mt-2"
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

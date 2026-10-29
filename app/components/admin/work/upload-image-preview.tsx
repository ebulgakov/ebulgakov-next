"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, TextField } from "@mui/material";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { WorkImage } from "@/types/common";

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
    <Box className="relative w-50 flex-none" ref={setNodeRef} style={style} {...attributes}>
      <IconButton
        size="small"
        aria-label="Remove image"
        onClick={() => onDelete(image.public_id)}
        className="absolute -top-2 -right-2 z-10 bg-red-600 p-0.5 text-white hover:bg-red-700"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
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
        <TextField
          className="mt-2"
          placeholder="Caption"
          defaultValue={image.caption ?? ""}
          onBlur={e => onUpdateCaption(e.target.value)}
          required
        />
      )}
    </Box>
  );
}

export { UploadImagePreview };

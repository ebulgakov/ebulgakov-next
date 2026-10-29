"use client";

import { DndContext } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortableContext, horizontalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { FormControl, FormLabel, Stack, Typography } from "@mui/material";
import { useId } from "react";

import { UploadImagePlaceholder } from "@/app/components/admin/work/upload-image-placeholder";
import { UploadImagePreview } from "@/app/components/admin/work/upload-image-preview";

import type { WorkImage } from "@/types/common";
import type { DragEndEvent } from "@dnd-kit/core/dist/types";

type UpdateMediaProps = {
  previewImage?: WorkImage;
  workImages: WorkImage[];
  onSetPreviewImage: (image?: WorkImage) => void;
  onSetWorkImages: (images: WorkImage[]) => void;
};
function UpdateMedia({
  previewImage,
  workImages,
  onSetPreviewImage,
  onSetWorkImages
}: UpdateMediaProps) {
  // Stable id: DndContext falls back to a module-level counter that differs between SSR and client
  const dndId = useId();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const oldIndex = workImages.findIndex(image => image.public_id === active.id);
    const newIndex = workImages.findIndex(image => image.public_id === over?.id);
    const sortedArray = arrayMove(workImages, oldIndex, newIndex);

    if (active.id !== over?.id) {
      onSetWorkImages(sortedArray);
    }
  };
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend" className="mb-4 text-lg font-medium">
        Media
      </FormLabel>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Preview Image</Typography>
          <div>
            {previewImage ? (
              <UploadImagePreview
                id={previewImage.public_id}
                onDelete={() => onSetPreviewImage(undefined)}
                image={previewImage}
              />
            ) : (
              <UploadImagePlaceholder onAdd={onSetPreviewImage} />
            )}
          </div>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2">Gallery Images</Typography>
          <Stack direction="row" spacing={2} className="overflow-x-auto pt-2">
            <DndContext id={dndId} onDragEnd={handleDragEnd} modifiers={[restrictToHorizontalAxis]}>
              <SortableContext
                strategy={horizontalListSortingStrategy}
                items={workImages.map(image => ({ id: image.public_id }))}
              >
                {workImages.map(image => (
                  <UploadImagePreview
                    id={image.public_id}
                    onDelete={id => {
                      onSetWorkImages(workImages.filter(image => image.public_id !== id));
                    }}
                    onUpdateCaption={caption => {
                      const updatedImages = workImages.map(img =>
                        img.public_id === image.public_id ? { ...img, caption } : img
                      );
                      onSetWorkImages(updatedImages);
                    }}
                    key={image.public_id}
                    image={image}
                  />
                ))}
              </SortableContext>
            </DndContext>

            <UploadImagePlaceholder
              onAdd={data => {
                onSetWorkImages(Array.from(new Set([...workImages, data])));
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </FormControl>
  );
}

export { UpdateMedia };

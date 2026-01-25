"use client";

import { DndContext } from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { SortableContext, horizontalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";

import { UploadImagePlaceholder } from "@/app/components/admin/work/upload-image-placeholder";
import { UploadImagePreview } from "@/app/components/admin/work/upload-image-preview";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/app/components/ui/field";

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
  const handleDragEnd = (event: DragEndEvent) => {

    console.log('Drag End Event:', event);
    const { active, over } = event;

    const oldIndex = workImages.findIndex(image => image.public_id === active.id);
    const newIndex = workImages.findIndex(image => image.public_id === over?.id);
    const sortedArray = arrayMove(workImages, oldIndex, newIndex);

    if (active.id !== over?.id) {
      onSetWorkImages(sortedArray);
    }
  };
  return (
    <FieldSet>
      <FieldLegend>Media</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-static-link">Preview Image</FieldLabel>
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
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-static-link">Gallery Images</FieldLabel>
          <div className="flex gap-4">
            <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToHorizontalAxis]}>
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
          </div>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

export { UpdateMedia };

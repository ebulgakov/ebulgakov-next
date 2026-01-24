import { UploadImagePlaceholder } from "@/app/components/admin/work-edit/upload-image-placeholder";
import { UploadImagePreview } from "@/app/components/admin/work-edit/upload-image-preview";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/app/components/ui/field";

import type { WorkImage } from "@/types/image";

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
  return (
    <FieldSet>
      <FieldLegend>Media</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-static-link">Preview Image</FieldLabel>
          <div>
            {previewImage ? (
              <UploadImagePreview
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
            {workImages.map(image => (
              <UploadImagePreview
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

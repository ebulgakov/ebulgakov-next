import { UploadImagePreview } from "@/app/components/admin/work-edit/upload-image-preview";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/app/components/ui/field";

import type { PreviewImage, WorkImage } from "@/types/image";

type UpdateMediaProps = {
  previewImage?: WorkImage;
  newPreviewImage?: PreviewImage;
  workImages: WorkImage[];
  newWorkImages: PreviewImage[];
  onSetPreviewImage: (image?: WorkImage) => void;
  onSetNewPreviewImage: (image?: PreviewImage) => void;
  onSetWorkImages: (images: WorkImage[]) => void;
  onSetNewWorkImages: (images: PreviewImage[]) => void;
};
function UpdateMedia({
  previewImage,
  newPreviewImage,
  workImages,
  newWorkImages,
  onSetPreviewImage,
  onSetNewPreviewImage,
  onSetWorkImages,
  onSetNewWorkImages
}: UpdateMediaProps) {
  return (
    <FieldSet>
      <FieldLegend>Media</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-static-link">Preview Image</FieldLabel>
          <div>
            <UploadImagePreview
              onDelete={() => {
                onSetPreviewImage(undefined);
                onSetNewPreviewImage(undefined);
              }}
              onAdd={onSetNewPreviewImage}
              image={previewImage?.image}
              previewImage={newPreviewImage}
            />
          </div>
        </Field>
      </FieldGroup>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="input-static-link">Gallery Images</FieldLabel>
          <div className="flex gap-4">
            {workImages.map(({ image }) => (
              <UploadImagePreview
                onDelete={id => {
                  onSetWorkImages(workImages.filter(({ image }) => image.id !== id));
                }}
                key={image.id}
                image={image}
              />
            ))}
            {newWorkImages.map((preview, idx) => (
              <UploadImagePreview
                onDelete={preview => {
                  onSetNewWorkImages(newWorkImages.filter(image => image.preview !== preview));
                }}
                key={idx}
                previewImage={preview}
              />
            ))}
            <UploadImagePreview
              onAdd={data => {
                onSetNewWorkImages(Array.from(new Set([...newWorkImages, data])));
              }}
            />
          </div>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
}

export { UpdateMedia };

"use client";

import { CldUploadWidget } from "next-cloudinary";

import type { WorkImage } from "@/types/image";

type UploadImagePlaceholderProps = {
  onAdd: (image: WorkImage) => void;
};

function UploadImagePlaceholder({ onAdd }: UploadImagePlaceholderProps) {
  return (
    <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={result => {
        if (typeof result.info === "object" && "secure_url" in result.info) {
          onAdd({
            public_id: result.info.public_id,
            preview: result.info.secure_url,
            caption: ""
          });
        }
      }}
      onError={error => {
        console.error("Cloudinary Upload Error:", error);
      }}
      options={{
        singleUploadAutoClose: true
      }}
    >
      {({ open }) => {
        return (
          <button
            type="button"
            onClick={() => open()}
            className="flex size-50 cursor-pointer items-center justify-center rounded border-2 border-dashed border-gray-300 transition hover:border-gray-800"
          >
            <span className="text-gray-500">Add Image</span>
          </button>
        );
      }}
    </CldUploadWidget>
  );
}

export { UploadImagePlaceholder };

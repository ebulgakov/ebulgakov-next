"use client";

import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import { Button } from "@mui/material";
import { CldUploadWidget } from "next-cloudinary";

import type { WorkImage } from "@/types/common";

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
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => open()}
            startIcon={<AddPhotoAlternateOutlinedIcon />}
            className="size-50 flex-none border-2 border-dashed text-gray-500"
          >
            Add Image
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}

export { UploadImagePlaceholder };

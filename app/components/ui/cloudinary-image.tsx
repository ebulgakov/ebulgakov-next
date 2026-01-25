"use client";

import { CldImage } from "next-cloudinary";

import type { ComponentProps } from "react";

function CloudinaryImage(props: ComponentProps<typeof CldImage> & {
  plugins?: string[];
}) {
  return <CldImage {...props} />;
}

export { CloudinaryImage };

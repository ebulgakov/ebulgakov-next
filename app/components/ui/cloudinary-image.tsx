"use client";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import type { ComponentProps } from "react";

type CloudinaryImageProps = Omit<ComponentProps<typeof AdvancedImage>, "cldImg"> & {
  src: string;
};

function CloudinaryImage(props: CloudinaryImageProps) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dwjzxeiqm"
    }
  });

  const myImage = cld.image(props.src);

  return <AdvancedImage {...props} cldImg={myImage} />;
}

export { CloudinaryImage };

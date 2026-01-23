"use client";

import { useState, useEffect } from "react";

type FrameContainerProps = {
  link: string;
};

function FrameContainer({ link }: FrameContainerProps) {
  const [frameHeight, setFrameHeight] = useState("");

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data[0] === "setHeight") setFrameHeight(e.data[1]);
    }
    window.addEventListener("message", handleMessage, false);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      height={frameHeight}
      className="block min-h-screen w-full overflow-hidden border-none"
      title="Page"
      src={link}
    />
  );
}

export { FrameContainer };

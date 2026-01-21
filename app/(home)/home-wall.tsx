"use client";

import Image from "next/image";
import { useTranslations } from "use-intl";

function HomeWall() {
  const t = useTranslations("HomePage");
  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center items-center z-0">
      <Image
        className="pointer-events-none absolute top-0 left-0 h-full w-full object-cover -z-1"
        src="/img/intro_bg.jpg"
        alt="Intro Background"
        width={1920}
        height={1080}
        priority
      />
      <div className="text-white text-center p-4 bg-black/50 rounded space-y-3">
        <div className="text-5xl font-bold">{t("introTitle")}</div>
        <div className="text-2xl">{t("introText")}</div>
      </div>


    </div>
  );
}

export { HomeWall };

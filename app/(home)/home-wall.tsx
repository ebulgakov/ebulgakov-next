"use client";

import { Mouse, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "use-intl";

function HomeWall() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative z-0 flex h-[50vh] w-full items-center justify-center overflow-hidden  shadow-lg">
      <Image
        className="pointer-events-none absolute top-0 left-0 -z-1 h-full w-full object-cover"
        src="/img/intro_bg.jpg"
        alt="Intro Background"
        width={1920}
        height={1080}
        priority
      />
      <div className="space-y-3 rounded bg-black/50 p-4 text-center text-white">
        <div className="text-5xl font-bold">{t("intro.title")}</div>
        <div className="text-2xl">{t("intro.description")}</div>
      </div>

      <div className="absolute invert bottom-0 left-0 flex w-full flex-col items-center -space-y-4 pb-10 text-white ">
        <Mouse className="mb-0 size-8 rotate-180" />
        <ChevronDown className="animate-pulse duration-300" />
        <ChevronDown className="animate-pulse delay-150 duration-300" />
        <ChevronDown className="animate-pulse delay-300 duration-300" />
      </div>
    </div>
  );
}

export { HomeWall };

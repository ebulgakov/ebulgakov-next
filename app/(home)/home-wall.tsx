"use client";

import { Mouse, ChevronDown } from "lucide-react";
import { useTranslations } from "use-intl";

function HomeWall() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative z-0 flex min-h-150 h-[50vh] w-full items-center justify-center overflow-hidden p-4 shadow-lg bg-[url('/img/intro_bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="space-y-3 rounded bg-black/50 p-4 text-center text-white max-w-256">
        <h1 className="text-3xl lg:text-5xl font-bold">{t("intro.title")}</h1>
        <p className="text-lg lg:text-2xl"><b>{t("intro.subtitle")}</b></p>
        <p className="text-lg lg:text-2xl">{t("intro.description")}</p>
      </div>

      <div className="hidden lg:flex absolute invert bottom-0 left-0 w-full flex-col items-center -space-y-4 pb-10 text-white ">
        <Mouse className="mb-0 size-8 rotate-180" />
        <ChevronDown className="animate-pulse duration-300" />
        <ChevronDown className="animate-pulse delay-150 duration-300" />
        <ChevronDown className="animate-pulse delay-300 duration-300" />
      </div>
    </div>
  );
}

export { HomeWall };

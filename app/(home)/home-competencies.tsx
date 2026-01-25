"use client";

import { Group, ShoppingCart, SquareChartGantt } from "lucide-react";
import { useTranslations } from "use-intl";

import { Title } from "@/app/components/ui/title";

function HomeCompetencies() {
  const t = useTranslations("HomePage");

  const competencies = [
    {
      icon: <Group className="size-full" />,
      title: t("competencies.adaptation.title"),
      description: t("competencies.adaptation.description")
    },
    {
      icon: <SquareChartGantt className="size-full" />,
      title: t("competencies.development.title"),
      description: t("competencies.development.description")
    },
    {
      icon: <ShoppingCart className="size-full" />,
      title: t("competencies.ecommerce.title"),
      description: t("competencies.ecommerce.description")
    }
  ];

  return (
    <section>
      <Title variant="h1">My competencies</Title>

      <div className="flex justify-between gap-10">
        {competencies.map((competency, index) => (
          <div key={index} className="max-w-md">
            <div className="mb-4 flex flex-col items-center gap-2">
              <div className="text-primary size-12">{competency.icon}</div>
              <Title variant="h2">{competency.title}</Title>
            </div>
            <p className="text-base text-gray-700">{competency.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { HomeCompetencies };

"use client";

import { Group, ShoppingCart, SquareChartGantt } from "lucide-react";
import { useTranslations } from "use-intl";

import { Title } from "@/app/components/ui/title";

function HomeCompetencies() {
  const t = useTranslations("HomePage");

  const competencies = [
    {
      icon: <Group />,
      title: t("competencies.adaptation.title"),
      description: t("competencies.adaptation.description")
    },
    {
      icon: <SquareChartGantt />,
      title: t("competencies.development.title"),
      description: t("competencies.development.description")
    },
    {
      icon: <ShoppingCart />,
      title: t("competencies.ecommerce.title"),
      description: t("competencies.ecommerce.description")
    }
  ];

  return (
    <section>
      <Title variant="h1">My competencies</Title>

      <div className="flex">
        {competencies.map((competency, index) => (
          <div key={index} className="mb-6">
            <div className="mb-4">{competency.icon}</div>
            <h2 className="mb-2 text-2xl font-semibold">{competency.title}</h2>
            <p className="text-base text-gray-700">{competency.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export { HomeCompetencies };

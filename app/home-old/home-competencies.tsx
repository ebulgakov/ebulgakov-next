"use client";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import { Grid, Stack, Typography } from "@mui/material";
import { useTranslations } from "use-intl";

function HomeCompetencies() {
  const t = useTranslations("HomePage");

  const competencies = [
    {
      icon: <GroupsOutlinedIcon className="size-full" />,
      title: t("competencies.adaptation.title"),
      description: t("competencies.adaptation.description")
    },
    {
      icon: <ViewTimelineOutlinedIcon className="size-full" />,
      title: t("competencies.development.title"),
      description: t("competencies.development.description")
    },
    {
      icon: <ShoppingCartOutlinedIcon className="size-full" />,
      title: t("competencies.ecommerce.title"),
      description: t("competencies.ecommerce.description")
    },
    {
      icon: <PsychologyOutlinedIcon className="size-full" />,
      title: t("competencies.approach.title"),
      description: t("competencies.approach.description")
    }
  ];

  return (
    <section>
      <Typography variant="h1">{t("competencies.title")}</Typography>
      <Grid container columnSpacing={{ xs: 3, lg: 10 }} rowSpacing={{ xs: 3, lg: 10 }}>
        {competencies.map((competency, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Stack spacing={2} sx={{ alignItems: "center", mb: 2 }}>
              <div className="text-primary size-12">{competency.icon}</div>
              <Typography variant="h3" className="mt-0 text-center">
                {competency.title}
              </Typography>
            </Stack>
            <Typography className="text-gray-700">{competency.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export { HomeCompetencies };

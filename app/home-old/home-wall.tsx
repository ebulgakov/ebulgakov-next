"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTranslations } from "use-intl";

function HomeWall() {
  const t = useTranslations("HomePage");

  return (
    <Box
      component="section"
      className="relative z-0 flex h-[50vh] min-h-150 w-full items-center justify-center overflow-hidden bg-[url('/img/intro_bg.jpg')] bg-cover bg-fixed bg-center p-4 shadow-lg"
    >
      <Paper
        elevation={0}
        className="max-w-256 space-y-3 rounded bg-black/50 p-4 text-center text-white"
      >
        <Typography component="h1" className="text-3xl font-bold lg:text-5xl">
          {t("intro.title")}
        </Typography>
        <Typography className="text-lg font-bold lg:text-2xl">{t("intro.subtitle")}</Typography>
        <Typography className="text-lg lg:text-2xl">{t("intro.description")}</Typography>
      </Paper>

      <Stack className="absolute bottom-0 left-0 hidden w-full items-center -space-y-4 pb-10 text-white invert lg:flex">
        <MouseOutlinedIcon className="mb-0 size-8" />
        <KeyboardArrowDownIcon className="animate-pulse duration-300" />
        <KeyboardArrowDownIcon className="animate-pulse delay-150 duration-300" />
        <KeyboardArrowDownIcon className="animate-pulse delay-300 duration-300" />
      </Stack>
    </Box>
  );
}

export { HomeWall };

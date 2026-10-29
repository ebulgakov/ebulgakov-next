import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

import { ActionButton } from "@/app/components/ui/action-button";
import { externalLinkProps } from "@/app/lib/constants";

import { Stats } from "./stats";
import { SystemCard } from "./system-card";

function Hero() {
  return (
    <Container>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-between",
          gap: 1,
          pt: { xs: 3, md: 5 },
          pb: { xs: 2, md: 3.5 },
          fontFamily: "brandMono",
          fontSize: 12
        }}
      >
        <Typography component="p" sx={{ font: "inherit", color: "brand.blue" }}>
          FRONTEND ENGINEERING / SYSTEM ARCHITECTURE / PRODUCT MINDSET
        </Typography>
        <Typography component="p" sx={{ font: "inherit", color: "brand.muted" }}>
          ТБИЛИСИ, ГРУЗИЯ / РФ, САМАРА
        </Typography>
      </Stack>

      <Typography
        component="h1"
        sx={{
          m: 0,
          fontFamily: "brandSans",
          fontWeight: 400,
          fontSize: { xs: 48, sm: 72, md: 96, lg: 112 },
          lineHeight: 1.02,
          color: "brand.ink"
        }}
      >
        Евгений Булгаков
      </Typography>

      <Stack
        direction="row"
        sx={{ alignItems: "center", gap: 2, pt: { xs: 2, md: 2.5 }, pb: { xs: 4, md: 5.5 } }}
      >
        <Box sx={{ flexShrink: 0, width: 36, height: 3, bgcolor: "brand.blue" }} />
        <Typography
          component="p"
          sx={{ fontFamily: "brandSans", fontSize: { xs: 18, md: 25 }, color: "brand.ink" }}
        >
          Senior Frontend / Product Engineer
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{ justifyContent: "space-between", gap: { xs: 5, lg: 4 }, pb: { xs: 4, md: 6 } }}
      >
        <Stack sx={{ maxWidth: 716, gap: 4 }}>
          <Typography
            sx={{
              fontFamily: "brandSans",
              fontSize: { xs: 18, md: 25 },
              lineHeight: 1.45,
              color: "brand.ink"
            }}
          >
            Senior Frontend Engineer: React, Next.js, Vue, Nuxt, TypeScript. Делаю интерфейсы для
            e-commerce, B2B-порталов, CRM и админ-консолей, которые живут под A/B-тестами и
            требованиями, меняющимися на ходу. В JiffyShirts (100k+ визитов в день) за 2 недели
            собрал прототип сервиса кастомной печати. Потом он вырос в главный источник дохода
            компании.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 1.5 }}>
            <ActionButton variant="contained" href="/works" endIcon={<ArrowDownwardIcon />}>
              Смотреть проекты
            </ActionButton>
            <ActionButton
              variant="outlined"
              href="https://t.me/ebulgakov"
              {...externalLinkProps}
              endIcon={<NorthEastIcon />}
            >
              Связаться в TG
            </ActionButton>
          </Stack>
        </Stack>

        <SystemCard />
      </Stack>

      <Divider sx={{ borderColor: "brand.line" }} />

      <Stats />
    </Container>
  );
}

export { Hero };

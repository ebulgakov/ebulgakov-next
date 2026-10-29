import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Container, Divider, Link, Paper, Stack, Typography } from "@mui/material";

import { ActionButton } from "@/app/components/ui/action-button";
import { SectionHeader } from "@/app/components/ui/section-header";
import { externalLinkProps } from "@/app/lib/constants";

import { dnsLink } from "./links";

function Projects() {
  return (
    <Box component="section" aria-labelledby="projects-title" sx={{ bgcolor: "brand.dark" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
          py: { xs: 6, md: 10 }
        }}
      >
        <SectionHeader
          id="projects-title"
          title="Избранные проекты"
          caption={["SELECTED WORK", "2026 / FULL STACK"]}
          dark
        />

        <Divider sx={{ borderColor: "brand.darkBorder" }} />

        <Stack direction={{ xs: "column", lg: "row" }} sx={{ gap: { xs: 4, lg: 7 } }}>
          <Paper
            component="a"
            href={dnsLink}
            {...externalLinkProps}
            square
            elevation={0}
            aria-label="DNS — открыть проект"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexShrink: 0,
              gap: 3,
              width: { xs: "100%", lg: 472 },
              height: { xs: 320, sm: 390 },
              p: { xs: 2.5, sm: 3.5 },
              bgcolor: "brand.blue",
              color: "brand.bg",
              textDecoration: "none",
              fontFamily: "brandMono"
            }}
          >
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography component="span" sx={{ font: "inherit", fontSize: 11 }}>
                АНАЛИТИКА ЦЕН
              </Typography>
              <NorthEastIcon aria-hidden sx={{ fontSize: 28 }} />
            </Stack>
            <Typography
              component="span"
              sx={{
                fontFamily: "brandSans",
                fontWeight: 600,
                fontSize: { xs: 96, sm: 146 },
                lineHeight: 1
              }}
            >
              DNS
            </Typography>
            <Stack
              direction="row"
              sx={{ alignItems: "flex-end", justifyContent: "space-between", fontSize: 12 }}
            >
              <Typography
                component="span"
                sx={{ font: "inherit", lineHeight: 1.6, whiteSpace: "pre-line" }}
              >
                {"СКИДКИ / ЦЕНЫ\nСАМАРА"}
              </Typography>
              <Typography component="span" sx={{ font: "inherit" }}>
                2026
              </Typography>
            </Stack>
          </Paper>

          <Stack component="article" sx={{ flex: 1, alignItems: "flex-start", gap: "26px" }}>
            <Stack
              direction="row"
              sx={{ gap: 3, fontFamily: "brandMono", fontSize: 12, color: "brand.darkMuted" }}
            >
              <Typography component="span" sx={{ font: "inherit" }}>
                2026
              </Typography>
              <Typography component="span" sx={{ font: "inherit" }}>
                FULL STACK
              </Typography>
            </Stack>
            <Typography
              component="h3"
              sx={{
                m: 0,
                fontFamily: "brandSans",
                fontWeight: 500,
                fontSize: { xs: 28, md: 40 },
                lineHeight: 1.16,
                color: "brand.bg"
              }}
            >
              Отслеживание скидок и аналитика цен в DNS
            </Typography>
            <Typography
              sx={{
                fontFamily: "brandSans",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.6,
                color: "brand.darkMuted"
              }}
            >
              Это неофициальная платформа аналитики DNS, созданная для поиска товаров со скидками в
              Самаре.
            </Typography>
            <Link
              href={dnsLink}
              {...externalLinkProps}
              sx={{ fontFamily: "brandMono", fontSize: 13, color: "brand.bg" }}
            >
              https://dns.ebulgakov.com/ ↗
            </Link>
            <ActionButton
              variant="contained"
              href={dnsLink}
              {...externalLinkProps}
              endIcon={<NorthEastIcon />}
            >
              Открыть проект
            </ActionButton>
          </Stack>
        </Stack>

        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <ActionButton
            variant="outlined"
            href="/works"
            endIcon={<NorthEastIcon />}
            dark
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Показать все работы
          </ActionButton>
        </Stack>
      </Container>
    </Box>
  );
}

export { Projects };

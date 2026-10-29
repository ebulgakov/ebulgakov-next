import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { IBM_Plex_Mono, Inter } from "next/font/google";

import type { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "800"]
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["cyrillic", "latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Евгений Булгаков — Senior Frontend Engineer & System Architect"
};

const colors = {
  blue: "#2458ef",
  ink: "#202221",
  muted: "#696d6b",
  line: "#d0d2cc",
  bg: "#f3f2ed",
  dark: "#202523",
  darkBorder: "#414743",
  darkMuted: "#adb5af"
};

const sans = "var(--font-inter), sans-serif";
const mono = "var(--font-plex-mono), monospace";

const navLinks = [
  { name: "Компетенции", href: "/" },
  { name: "Проекты", href: "/works" },
  { name: "Опыт", href: "/" },
  { name: "Контакты", href: "/" }
];

const systemLayers = [
  { name: "UI / Vue-компоненты", active: false },
  { name: "Логика / Composables", active: true },
  { name: "Архитектура / Масштабирование", active: false }
];

const stats = [
  { value: "10+", label: "лет в разработке" },
  { value: "100k+", label: "аудитория платформ в день" },
  { value: "×2", label: "улучшение метрик PageSpeed Insights" }
];

const actionSx = {
  height: 54,
  px: "22px",
  borderRadius: 0,
  fontFamily: sans,
  fontSize: 15,
  fontWeight: 400,
  "& .MuiButton-endIcon": { ml: 3 },
  "& .MuiButton-endIcon svg": { fontSize: 18 }
};

function HomeNew() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: 1440, px: { xs: 2, lg: 9 } }}>
      <Stack
        component="header"
        direction="row"
        sx={{
          minHeight: { xs: 72, md: 104 },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <Link href="/" underline="none" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Typography
            component="span"
            sx={{ fontFamily: sans, fontWeight: 800, fontSize: 28, color: colors.blue }}
          >
            ЕБ
          </Typography>
          <Typography component="span" sx={{ fontFamily: mono, fontSize: 12, color: colors.ink }}>
            ebulgakov.com
          </Typography>
        </Link>

        <Stack
          component="nav"
          direction="row"
          aria-label="Разделы"
          sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}
        >
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              sx={{ fontFamily: sans, fontSize: 14, color: colors.ink }}
            >
              {link.name}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" sx={{ alignItems: "center", gap: 3 }}>
          <Typography component="span" sx={{ fontFamily: mono, fontSize: 12, color: colors.muted }}>
            RU ↓
          </Typography>
          <Link
            href="https://static.ebulgakov.com/resume/CV_Evgenii_Bulgakov_Senior_Frontend_ru.pdf"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontFamily: sans, fontSize: 14, color: colors.blue }}
          >
            Резюме ↗
          </Link>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: colors.line }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-between",
          gap: 1,
          pt: { xs: 3, md: 5 },
          pb: { xs: 2, md: 3.5 },
          fontFamily: mono,
          fontSize: 12
        }}
      >
        <Typography component="p" sx={{ font: "inherit", color: colors.blue }}>
          FRONTEND ENGINEERING / SYSTEM ARCHITECTURE
        </Typography>
        <Typography component="p" sx={{ font: "inherit", color: colors.muted }}>
          ТБИЛИСИ, ГРУЗИЯ
        </Typography>
      </Stack>

      <Typography
        component="h1"
        sx={{
          m: 0,
          fontFamily: sans,
          fontWeight: 400,
          fontSize: { xs: 48, sm: 72, md: 96, lg: 112 },
          lineHeight: 1.02,
          color: colors.ink
        }}
      >
        Евгений Булгаков
      </Typography>

      <Stack
        direction="row"
        sx={{ alignItems: "center", gap: 2, pt: { xs: 2, md: 2.5 }, pb: { xs: 4, md: 5.5 } }}
      >
        <Box sx={{ flexShrink: 0, width: 36, height: 3, bgcolor: colors.blue }} />
        <Typography
          component="p"
          sx={{ fontFamily: sans, fontSize: { xs: 18, md: 25 }, color: colors.ink }}
        >
          Senior Frontend Engineer &amp; System Architect
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        sx={{ justifyContent: "space-between", gap: { xs: 5, lg: 4 }, pb: { xs: 4, md: 6 } }}
      >
        <Stack sx={{ maxWidth: 716, gap: 4 }}>
          <Typography
            sx={{
              fontFamily: sans,
              fontSize: { xs: 18, md: 25 },
              lineHeight: 1.45,
              color: colors.ink
            }}
          >
            Более 10 лет опыта разработки масштабируемых, высоконагруженных e-commerce платформ с
            аудиторией 100k+ в день. Превращаю сложные бизнес-требования в производительные
            веб-решения.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 1.5 }}>
            <Button
              variant="contained"
              href="/works"
              endIcon={<ArrowDownwardIcon />}
              sx={{
                ...actionSx,
                bgcolor: colors.blue,
                color: colors.bg,
                border: `1px solid ${colors.blue}`
              }}
            >
              Смотреть проекты
            </Button>
            <Button
              variant="outlined"
              href="mailto:me@ebulgakov.com"
              endIcon={<NorthEastIcon />}
              sx={{ ...actionSx, color: colors.ink, borderColor: colors.line }}
            >
              Связаться
            </Button>
          </Stack>
        </Stack>

        <Paper
          component="aside"
          square
          elevation={0}
          aria-label="Схема инженерного подхода"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            gap: 3,
            width: { xs: "100%", lg: 416 },
            p: { xs: 2.5, sm: 3.5 },
            bgcolor: colors.dark,
            color: colors.darkMuted,
            fontFamily: mono
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Typography component="p" sx={{ font: "inherit", fontSize: 10 }}>
              SYSTEM / FRONTEND
            </Typography>
            <LayersOutlinedIcon aria-hidden sx={{ fontSize: 18 }} />
          </Stack>

          <List component="ol" disablePadding>
            {systemLayers.map((layer, index) => (
              <ListItem
                key={layer.name}
                sx={{
                  justifyContent: "space-between",
                  gap: 1,
                  minHeight: 44,
                  mt: index ? "18px" : 0,
                  px: "14px",
                  py: 1,
                  border: `1px solid ${layer.active ? colors.blue : colors.darkBorder}`,
                  bgcolor: layer.active ? colors.blue : "transparent",
                  fontSize: 12,
                  "&::before": index
                    ? {
                        content: '""',
                        position: "absolute",
                        top: -19,
                        left: "50%",
                        width: "1px",
                        height: 18,
                        bgcolor: colors.darkMuted
                      }
                    : undefined
                }}
              >
                <Typography component="span" sx={{ font: "inherit", color: colors.bg }}>
                  {layer.name}
                </Typography>
                <Typography component="span" aria-hidden sx={{ font: "inherit" }}>
                  ↗
                </Typography>
              </ListItem>
            ))}
          </List>

          <Typography component="p" sx={{ font: "inherit", fontSize: 10 }}>
            БИЗНЕС-ЗАДАЧА → СИСТЕМНОЕ РЕШЕНИЕ
          </Typography>
        </Paper>
      </Stack>

      <Divider sx={{ borderColor: colors.line }} />

      <Grid
        component="section"
        aria-label="Ключевые показатели"
        container
        spacing={{ xs: 3, md: 6 }}
        sx={{ py: 4 }}
      >
        {stats.map(stat => (
          <Grid key={stat.value} size={{ xs: 12, md: 4 }}>
            <Stack direction="row" sx={{ alignItems: "center", gap: "18px" }}>
              <Typography
                component="p"
                sx={{
                  flexShrink: 0,
                  fontFamily: sans,
                  fontSize: { xs: 40, md: 52 },
                  lineHeight: "normal",
                  color: colors.ink
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                component="p"
                sx={{ fontFamily: mono, fontSize: 11, lineHeight: 1.6, color: colors.muted }}
              >
                {stat.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeNew;

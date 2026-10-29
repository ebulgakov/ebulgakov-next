import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
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

import type { Metadata } from "next";

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

const competencies = [
  {
    tag: "PIXEL-PERFECT / UI",
    title: "Связь дизайна\nи инжиниринга",
    text: "Я не просто внедряю макеты — я навожу мосты между продуктами, дизайнерами и разработчиками. Превращаю статику в pixel-perfect, поддерживаемые UI-компоненты, гарантируя, что финальный продукт соответствует видению, даже если спецификации неполны."
  },
  {
    tag: "PERFORMANCE / SCALE",
    title: "Производительность\nи архитектура",
    text: "Мой фокус — веб-производительность и масштабируемость. У меня есть опыт рефакторинга архитектуры, который улучшил критические метрики PageSpeed Insights в 2 раза. Монолит или микросервисы — я выбираю инструмент, подходящий потребностям продукта."
  },
  {
    tag: "B2B / PRINT-ON-DEMAND",
    title: "Бизнес-критичные\nрешения",
    text: "Я создаю решения, приносящие прибыль. От создания PoC для Print-on-Demand за две недели, ставшего основным источником дохода, до поддержки крупных B2B платформ. Я понимаю цену ошибки в UI, поэтому ставлю в приоритет тестирование и стабильность."
  },
  {
    tag: "OWNERSHIP / DELIVERY",
    title: "Мой подход",
    text: "Вы можете дать мне задачу, описанную на салфетке, и я самостоятельно организую этапы, истории и задачи. Я не «программист по тикетам» — я решаю проблемы бизнеса с помощью технологий."
  }
];

const competencyRows = [competencies.slice(0, 2), competencies.slice(2)];

const results = [
  {
    value: "×2",
    label: "БЫСТРЕЕ ИЗМЕНЕНИЯ",
    text: "Перевёл критические компоненты с Vue 3 Options API на Composition API, вынес бизнес-логику в composables — время внесения изменений сократилось в 2 раза, архитектура стала гибче."
  },
  {
    value: "Vue",
    label: "ТЕСТИРОВАНИЕ",
    text: "Покрыл ключевые компоненты модульными тестами и внедрил командный стандарт тестирования Vue-компонентов, снизив риск регрессий и упростив поддержку."
  },
  {
    value: "20+",
    label: "ПРОЕКТОВ",
    text: "Разработал библиотеку общих Vue-компонентов, используемую в 20+ проектах компании, унифицировав реализацию общих бизнес-правил."
  },
  {
    value: "80%+",
    label: "ТОЧНОСТЬ ОЦЕНКИ",
    text: "Ввёл практику декомпозиции и оценки фич с точностью 80%+ от фактических трудозатрат, повысив предсказуемость релизов."
  }
];

const contacts = [
  { channel: "EMAIL", value: "me@ebulgakov.com", href: "mailto:me@ebulgakov.com" },
  { channel: "TELEGRAM", value: "@ebulgakov", href: "https://t.me/ebulgakov" },
  { channel: "LINKEDIN", value: "ebulgakov", href: "https://www.linkedin.com/in/ebulgakov/" },
  { channel: "GITHUB", value: "ebulgakov", href: "https://github.com/ebulgakov" },
  {
    channel: "FACEBOOK",
    value: "Eugene Bulgakov",
    href: "https://www.facebook.com/profile.php?id=100000705951180"
  },
  {
    channel: "ЛОКАЦИЯ",
    value: "Тбилиси, Грузия",
    href: "https://www.google.com/maps/@41.7321292,44.7613927,14z",
    isLocation: true
  }
];

const cvLink = "https://static.ebulgakov.com/resume/CV_Evgenii_Bulgakov_Senior_Frontend_ru.pdf";
const alLink = "https://static.ebulgakov.com/resume/AL_Evgenii_Bulgakov_Senior_Frontend_ru.pdf";
const dnsLink = "https://dns.ebulgakov.com/";

const external = { target: "_blank", rel: "noopener noreferrer" };

const containerSx = { maxWidth: 1440, px: { xs: 2, lg: 9 } };

type SectionHeaderProps = {
  id: string;
  number: string;
  title: string;
  caption: [string, string];
  dark?: boolean;
};

function SectionHeader({ id, number, title, caption, dark }: SectionHeaderProps) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ gap: { xs: 1.5, md: 4 } }}>
      <Stack direction="row" sx={{ flex: 1, alignItems: "baseline", gap: { xs: 2, md: 4 } }}>
        <Typography
          component="span"
          sx={{
            flexShrink: 0,
            width: { md: 80 },
            fontFamily: mono,
            fontSize: { xs: 24, md: 36 },
            lineHeight: 1.4,
            color: dark ? colors.darkMuted : colors.blue
          }}
        >
          {number}
        </Typography>
        <Typography
          id={id}
          component="h2"
          sx={{
            m: 0,
            fontFamily: sans,
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: 1.1,
            color: dark ? colors.bg : colors.ink
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        component="p"
        sx={{
          flexShrink: 0,
          width: { md: 220 },
          fontFamily: mono,
          fontSize: 11,
          lineHeight: 1.6,
          textAlign: { md: "right" },
          whiteSpace: "pre-line",
          color: dark ? colors.darkMuted : colors.muted
        }}
      >
        {caption.join("\n")}
      </Typography>
    </Stack>
  );
}

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
    <>
      <Container maxWidth={false} sx={containerSx}>
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
            <Typography
              component="span"
              sx={{ fontFamily: mono, fontSize: 12, color: colors.muted }}
            >
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

      <Box
        component="section"
        aria-labelledby="competencies-title"
        sx={{ borderTop: `1px solid ${colors.line}` }}
      >
        <Container
          maxWidth={false}
          sx={{
            ...containerSx,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
            pt: { xs: 6, md: 10 },
            pb: { xs: 5, md: 9 }
          }}
        >
          <SectionHeader
            id="competencies-title"
            number="01"
            title="Компетенции"
            caption={["ПОДХОД К РАЗРАБОТКЕ", "ОТ ИДЕИ ДО СИСТЕМЫ"]}
          />

          <Box>
            {competencyRows.map((row, rowIndex) => (
              <Stack
                key={rowIndex}
                direction={{ xs: "column", md: "row" }}
                sx={{ gap: { md: 9 }, borderTop: `1px solid ${colors.line}` }}
              >
                {row.map((item, index) => {
                  const number = String(rowIndex * 2 + index + 1).padStart(2, "0");

                  return (
                    <Stack
                      key={item.tag}
                      component="article"
                      sx={{
                        flex: 1,
                        gap: "22px",
                        pt: 3,
                        pb: 4,
                        borderTop: index ? { xs: `1px solid ${colors.line}`, md: "none" } : "none"
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between", gap: 2, fontFamily: mono }}
                      >
                        <Typography
                          component="span"
                          sx={{ font: "inherit", fontSize: 12, color: colors.blue }}
                        >
                          {number}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ font: "inherit", fontSize: 10, color: colors.muted }}
                        >
                          {item.tag}
                        </Typography>
                      </Stack>
                      <Typography
                        component="h3"
                        sx={{
                          m: 0,
                          minHeight: { md: 76 },
                          fontFamily: sans,
                          fontWeight: 500,
                          fontSize: { xs: 24, md: 31 },
                          lineHeight: 1.2,
                          whiteSpace: "pre-line",
                          color: colors.ink
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: sans,
                          fontSize: 16,
                          lineHeight: 1.6,
                          color: colors.muted
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            ))}
          </Box>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="projects-title" sx={{ bgcolor: colors.dark }}>
        <Container
          maxWidth={false}
          sx={{
            ...containerSx,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
            py: { xs: 6, md: 10 }
          }}
        >
          <SectionHeader
            id="projects-title"
            number="02"
            title="Избранные проекты"
            caption={["SELECTED WORK", "2026 / FULL STACK"]}
            dark
          />

          <Divider sx={{ borderColor: colors.darkBorder }} />

          <Stack direction={{ xs: "column", lg: "row" }} sx={{ gap: { xs: 4, lg: 7 } }}>
            <Paper
              component="a"
              href={dnsLink}
              {...external}
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
                bgcolor: colors.blue,
                color: colors.bg,
                textDecoration: "none",
                fontFamily: mono
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
                  fontFamily: sans,
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
                sx={{ gap: 3, fontFamily: mono, fontSize: 12, color: colors.darkMuted }}
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
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: { xs: 28, md: 40 },
                  lineHeight: 1.16,
                  color: colors.bg
                }}
              >
                Отслеживание скидок и аналитика цен в DNS
              </Typography>
              <Typography
                sx={{
                  fontFamily: sans,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: colors.darkMuted
                }}
              >
                Это неофициальная платформа аналитики DNS, созданная для поиска товаров со скидками
                в Самаре.
              </Typography>
              <Link
                href={dnsLink}
                {...external}
                sx={{ fontFamily: mono, fontSize: 13, color: colors.bg }}
              >
                https://dns.ebulgakov.com/ ↗
              </Link>
              <Button
                variant="contained"
                href={dnsLink}
                {...external}
                endIcon={<NorthEastIcon />}
                sx={{ ...actionSx, bgcolor: colors.blue, color: colors.bg }}
              >
                Открыть проект
              </Button>
            </Stack>
          </Stack>

          <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
            <Button
              variant="outlined"
              href="/works"
              endIcon={<NorthEastIcon />}
              sx={{
                ...actionSx,
                width: { xs: "100%", sm: "auto" },
                color: colors.bg,
                borderColor: colors.darkBorder
              }}
            >
              Показать все работы
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="experience-title">
        <Container
          maxWidth={false}
          sx={{
            ...containerSx,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 5, md: 7 },
            py: { xs: 6, md: 10 }
          }}
        >
          <SectionHeader
            id="experience-title"
            number="03"
            title="Последний опыт"
            caption={["ПРАКТИКА И РЕЗУЛЬТАТЫ", "МАРТ — ИЮНЬ 2026"]}
          />

          <Stack direction={{ xs: "column", lg: "row" }} sx={{ gap: { xs: 5, lg: 9 } }}>
            <Stack sx={{ flexShrink: 0, width: { xs: "100%", lg: 416 }, gap: 3.5 }}>
              <Typography
                component="h3"
                sx={{ m: 0, fontFamily: sans, fontSize: { xs: 26, md: 30 }, color: colors.ink }}
              >
                MAXBITSOLUTION
              </Typography>
              <Typography
                sx={{
                  fontFamily: sans,
                  fontSize: { xs: 20, md: 24 },
                  lineHeight: 1.3,
                  color: colors.ink
                }}
              >
                Senior Frontend Developer
              </Typography>
              <Typography
                sx={{ fontFamily: sans, fontSize: 16, lineHeight: 1.6, color: colors.muted }}
              >
                MAXBITSOLUTION — IT-компания, создающая проекты в сфере iGaming. Мы разрабатываем
                высоконагруженные системы, а также управляем трафикообразованием и лидогенерацией.
              </Typography>
              <Divider sx={{ borderColor: colors.line }} />
              <Stack sx={{ gap: 1 }}>
                <Typography sx={{ fontFamily: mono, fontSize: 10, color: colors.muted }}>
                  ПЕРИОД РАБОТЫ
                </Typography>
                <Typography sx={{ fontFamily: sans, fontSize: 18, color: colors.ink }}>
                  Март 2026 — Июнь 2026
                </Typography>
                <Typography
                  sx={{ fontFamily: sans, fontSize: 13, lineHeight: 1.5, color: colors.muted }}
                >
                  Компания прекратила деятельность в июне 2026
                </Typography>
              </Stack>
              <Stack sx={{ gap: 1 }}>
                <Typography sx={{ fontFamily: mono, fontSize: 10, color: colors.muted }}>
                  ЛОКАЦИЯ
                </Typography>
                <Typography sx={{ fontFamily: sans, fontSize: 16, color: colors.ink }}>
                  Беларусь, Минск
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ flex: 1, gap: 2.5 }}>
              <Typography sx={{ fontFamily: mono, fontSize: 12, color: colors.muted }}>
                МОЯ ЗОНА ОТВЕТСТВЕННОСТИ
              </Typography>
              <List disablePadding>
                {results.map(result => (
                  <ListItem
                    key={result.label}
                    disablePadding
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: "flex-start",
                      gap: { xs: 2, sm: 3.5 },
                      py: "26px",
                      borderTop: `1px solid ${colors.line}`
                    }}
                  >
                    <Stack sx={{ flexShrink: 0, width: 144, gap: 1 }}>
                      <Typography
                        component="span"
                        sx={{ fontFamily: sans, fontSize: { xs: 36, md: 42 }, color: colors.blue }}
                      >
                        {result.value}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ fontFamily: mono, fontSize: 9, lineHeight: 1.5, color: colors.muted }}
                      >
                        {result.label}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        flex: 1,
                        fontFamily: sans,
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: colors.ink
                      }}
                    >
                      {result.text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
              gap: 3,
              p: { xs: 2.5, sm: 4 },
              bgcolor: "#e4eaf9"
            }}
          >
            <Typography
              sx={{
                fontFamily: mono,
                fontSize: 12,
                lineHeight: 1.7,
                whiteSpace: "pre-line",
                color: colors.blue
              }}
            >
              {"ПРОФЕССИОНАЛЬНЫЙ ОПЫТ\nИ ПОДХОД К РАБОТЕ"}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 1.5 }}>
              <Button
                variant="contained"
                href={cvLink}
                {...external}
                endIcon={<NorthEastIcon />}
                sx={{ ...actionSx, bgcolor: colors.blue, color: colors.bg }}
              >
                Читать резюме
              </Button>
              <Button
                variant="outlined"
                href={alLink}
                {...external}
                endIcon={<NorthEastIcon />}
                sx={{ ...actionSx, color: colors.ink, borderColor: colors.line }}
              >
                Читать сопроводительное письмо
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="contacts-title" sx={{ bgcolor: colors.dark }}>
        <Container
          maxWidth={false}
          sx={{
            ...containerSx,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
            pt: { xs: 6, md: 9 },
            pb: 3.5
          }}
        >
          <SectionHeader
            id="contacts-title"
            number="04"
            title="Контакты и соцсети"
            caption={["НАПРЯМУЮ", "БЕЗ ЛИШНИХ ШАГОВ"]}
            dark
          />

          <Stack
            direction="row"
            sx={{ alignItems: "flex-end", justifyContent: "space-between", gap: 3 }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: sans,
                fontWeight: 500,
                fontSize: { xs: 40, sm: 56, md: 78 },
                lineHeight: 1.06,
                whiteSpace: "pre-line",
                color: colors.bg
              }}
            >
              {"Есть задача?\nДавайте обсудим."}
            </Typography>
            <Button
              variant="contained"
              href="mailto:me@ebulgakov.com"
              aria-label="Написать на почту"
              sx={{
                flexShrink: 0,
                minWidth: 0,
                width: { xs: 64, md: 104 },
                height: { xs: 64, md: 104 },
                borderRadius: 0,
                bgcolor: colors.blue,
                color: colors.bg
              }}
            >
              <NorthEastIcon sx={{ fontSize: { xs: 32, md: 52 } }} />
            </Button>
          </Stack>

          <Link
            href="mailto:me@ebulgakov.com"
            underline="always"
            sx={{
              alignSelf: "flex-start",
              fontFamily: sans,
              fontSize: { xs: 26, md: 43 },
              color: colors.bg,
              textDecorationColor: "currentColor",
              wordBreak: "break-word"
            }}
          >
            me@ebulgakov.com
          </Link>

          <Grid container columnSpacing={6} component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
            {contacts.map(contact => (
              <Grid key={contact.channel} component="li" size={{ xs: 12, sm: 6, md: 4 }}>
                <Stack sx={{ gap: 2, py: "26px" }}>
                  <Divider sx={{ borderColor: colors.darkBorder }} />
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: colors.darkMuted
                    }}
                  >
                    <Typography component="span" sx={{ fontFamily: mono, fontSize: 11 }}>
                      {contact.channel}
                    </Typography>
                    {contact.isLocation ? (
                      <PlaceOutlinedIcon aria-hidden sx={{ fontSize: 18 }} />
                    ) : (
                      <NorthEastIcon aria-hidden sx={{ fontSize: 18 }} />
                    )}
                  </Stack>
                  <Link
                    href={contact.href}
                    {...(contact.href.startsWith("http") ? external : {})}
                    sx={{
                      fontFamily: sans,
                      fontSize: { xs: 20, md: 24 },
                      lineHeight: 1.2,
                      color: colors.bg
                    }}
                  >
                    {contact.value}
                  </Link>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Stack component="footer" sx={{ gap: 3 }}>
            <Divider sx={{ borderColor: colors.darkBorder }} />
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between", gap: 2 }}
            >
              <Typography
                component="span"
                sx={{ fontFamily: sans, fontWeight: 800, fontSize: 26, color: colors.bg }}
              >
                ЕБ
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: mono,
                  fontSize: 11,
                  textAlign: "center",
                  color: colors.darkMuted
                }}
              >
                Сделано с любовью © 2026
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{ flexShrink: 0, fontFamily: mono, fontSize: 11, color: colors.bg }}
              >
                НАВЕРХ ↑
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default HomeNew;

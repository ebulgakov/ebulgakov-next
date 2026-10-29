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

import { ActionButton } from "@/app/components/ui/action-button";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Евгений Булгаков — Senior Frontend Engineer & System Architect"
};

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
            fontFamily: "brandMono",
            fontSize: { xs: 24, md: 36 },
            lineHeight: 1.4,
            color: dark ? "brand.darkMuted" : "brand.blue"
          }}
        >
          {number}
        </Typography>
        <Typography
          id={id}
          component="h2"
          sx={{
            m: 0,
            fontFamily: "brandSans",
            fontWeight: 500,
            fontSize: { xs: 32, md: 44, lg: 52 },
            lineHeight: 1.1,
            color: dark ? "brand.bg" : "brand.ink"
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
          fontFamily: "brandMono",
          fontSize: 11,
          lineHeight: 1.6,
          textAlign: { md: "right" },
          whiteSpace: "pre-line",
          color: dark ? "brand.darkMuted" : "brand.muted"
        }}
      >
        {caption.join("\n")}
      </Typography>
    </Stack>
  );
}

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
              sx={{ fontFamily: "brandSans", fontWeight: 800, fontSize: 28, color: "brand.blue" }}
            >
              ЕБ
            </Typography>
            <Typography
              component="span"
              sx={{ fontFamily: "brandMono", fontSize: 12, color: "brand.ink" }}
            >
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
                sx={{ fontFamily: "brandSans", fontSize: 14, color: "brand.ink" }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" sx={{ alignItems: "center", gap: 3 }}>
            <Typography
              component="span"
              sx={{ fontFamily: "brandMono", fontSize: 12, color: "brand.muted" }}
            >
              RU ↓
            </Typography>
            <Link
              href="https://static.ebulgakov.com/resume/CV_Evgenii_Bulgakov_Senior_Frontend_ru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontFamily: "brandSans", fontSize: 14, color: "brand.blue" }}
            >
              Резюме ↗
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "brand.line" }} />

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
            FRONTEND ENGINEERING / SYSTEM ARCHITECTURE
          </Typography>
          <Typography component="p" sx={{ font: "inherit", color: "brand.muted" }}>
            ТБИЛИСИ, ГРУЗИЯ
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
                fontFamily: "brandSans",
                fontSize: { xs: 18, md: 25 },
                lineHeight: 1.45,
                color: "brand.ink"
              }}
            >
              Более 10 лет опыта разработки масштабируемых, высоконагруженных e-commerce платформ с
              аудиторией 100k+ в день. Превращаю сложные бизнес-требования в производительные
              веб-решения.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 1.5 }}>
              <ActionButton variant="contained" href="/works" endIcon={<ArrowDownwardIcon />}>
                Смотреть проекты
              </ActionButton>
              <ActionButton
                variant="outlined"
                href="mailto:me@ebulgakov.com"
                endIcon={<NorthEastIcon />}
              >
                Связаться
              </ActionButton>
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
              bgcolor: "brand.dark",
              color: "brand.darkMuted",
              fontFamily: "brandMono"
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
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: layer.active ? "brand.blue" : "brand.darkBorder",
                    bgcolor: layer.active ? "brand.blue" : "transparent",
                    fontSize: 12,
                    "&::before": index
                      ? {
                          content: '""',
                          position: "absolute",
                          top: -19,
                          left: "50%",
                          width: "1px",
                          height: 18,
                          bgcolor: "brand.darkMuted"
                        }
                      : undefined
                  }}
                >
                  <Typography component="span" sx={{ font: "inherit", color: "brand.bg" }}>
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

        <Divider sx={{ borderColor: "brand.line" }} />

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
                    fontFamily: "brandSans",
                    fontSize: { xs: 40, md: 52 },
                    lineHeight: "normal",
                    color: "brand.ink"
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "brandMono",
                    fontSize: 11,
                    lineHeight: 1.6,
                    color: "brand.muted"
                  }}
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
        sx={{ borderWidth: "1px 0 0", borderStyle: "solid", borderColor: "brand.line" }}
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
                sx={{
                  gap: { md: 9 },
                  borderWidth: "1px 0 0",
                  borderStyle: "solid",
                  borderColor: "brand.line"
                }}
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
                        borderWidth: index ? { xs: "1px 0 0", md: 0 } : 0,
                        borderStyle: "solid",
                        borderColor: "brand.line"
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between", gap: 2, fontFamily: "brandMono" }}
                      >
                        <Typography
                          component="span"
                          sx={{ font: "inherit", fontSize: 12, color: "brand.blue" }}
                        >
                          {number}
                        </Typography>
                        <Typography
                          component="span"
                          sx={{ font: "inherit", fontSize: 10, color: "brand.muted" }}
                        >
                          {item.tag}
                        </Typography>
                      </Stack>
                      <Typography
                        component="h3"
                        sx={{
                          m: 0,
                          minHeight: { md: 76 },
                          fontFamily: "brandSans",
                          fontWeight: 500,
                          fontSize: { xs: 24, md: 31 },
                          lineHeight: 1.2,
                          whiteSpace: "pre-line",
                          color: "brand.ink"
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "brandSans",
                          fontSize: 16,
                          lineHeight: 1.6,
                          color: "brand.muted"
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

      <Box component="section" aria-labelledby="projects-title" sx={{ bgcolor: "brand.dark" }}>
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

          <Divider sx={{ borderColor: "brand.darkBorder" }} />

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
                Это неофициальная платформа аналитики DNS, созданная для поиска товаров со скидками
                в Самаре.
              </Typography>
              <Link
                href={dnsLink}
                {...external}
                sx={{ fontFamily: "brandMono", fontSize: 13, color: "brand.bg" }}
              >
                https://dns.ebulgakov.com/ ↗
              </Link>
              <ActionButton
                variant="contained"
                href={dnsLink}
                {...external}
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
                sx={{
                  m: 0,
                  fontFamily: "brandSans",
                  fontSize: { xs: 26, md: 30 },
                  color: "brand.ink"
                }}
              >
                MAXBITSOLUTION
              </Typography>
              <Typography
                sx={{
                  fontFamily: "brandSans",
                  fontSize: { xs: 20, md: 24 },
                  lineHeight: 1.3,
                  color: "brand.ink"
                }}
              >
                Senior Frontend Developer
              </Typography>
              <Typography
                sx={{
                  fontFamily: "brandSans",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "brand.muted"
                }}
              >
                MAXBITSOLUTION — IT-компания, создающая проекты в сфере iGaming. Мы разрабатываем
                высоконагруженные системы, а также управляем трафикообразованием и лидогенерацией.
              </Typography>
              <Divider sx={{ borderColor: "brand.line" }} />
              <Stack sx={{ gap: 1 }}>
                <Typography sx={{ fontFamily: "brandMono", fontSize: 10, color: "brand.muted" }}>
                  ПЕРИОД РАБОТЫ
                </Typography>
                <Typography sx={{ fontFamily: "brandSans", fontSize: 18, color: "brand.ink" }}>
                  Март 2026 — Июнь 2026
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "brandSans",
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "brand.muted"
                  }}
                >
                  Компания прекратила деятельность в июне 2026
                </Typography>
              </Stack>
              <Stack sx={{ gap: 1 }}>
                <Typography sx={{ fontFamily: "brandMono", fontSize: 10, color: "brand.muted" }}>
                  ЛОКАЦИЯ
                </Typography>
                <Typography sx={{ fontFamily: "brandSans", fontSize: 16, color: "brand.ink" }}>
                  Беларусь, Минск
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ flex: 1, gap: 2.5 }}>
              <Typography sx={{ fontFamily: "brandMono", fontSize: 12, color: "brand.muted" }}>
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
                      borderWidth: "1px 0 0",
                      borderStyle: "solid",
                      borderColor: "brand.line"
                    }}
                  >
                    <Stack sx={{ flexShrink: 0, width: 144, gap: 1 }}>
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "brandSans",
                          fontSize: { xs: 36, md: 42 },
                          color: "brand.blue"
                        }}
                      >
                        {result.value}
                      </Typography>
                      <Typography
                        component="span"
                        sx={{
                          fontFamily: "brandMono",
                          fontSize: 9,
                          lineHeight: 1.5,
                          color: "brand.muted"
                        }}
                      >
                        {result.label}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        flex: 1,
                        fontFamily: "brandSans",
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: "brand.ink"
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
              bgcolor: "brand.blueLight"
            }}
          >
            <Typography
              sx={{
                fontFamily: "brandMono",
                fontSize: 12,
                lineHeight: 1.7,
                whiteSpace: "pre-line",
                color: "brand.blue"
              }}
            >
              {"ПРОФЕССИОНАЛЬНЫЙ ОПЫТ\nИ ПОДХОД К РАБОТЕ"}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 1.5 }}>
              <ActionButton
                variant="contained"
                href={cvLink}
                {...external}
                endIcon={<NorthEastIcon />}
              >
                Читать резюме
              </ActionButton>
              <ActionButton
                variant="outlined"
                href={alLink}
                {...external}
                endIcon={<NorthEastIcon />}
              >
                Читать сопроводительное письмо
              </ActionButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box component="section" aria-labelledby="contacts-title" sx={{ bgcolor: "brand.dark" }}>
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
                fontFamily: "brandSans",
                fontWeight: 500,
                fontSize: { xs: 40, sm: 56, md: 78 },
                lineHeight: 1.06,
                whiteSpace: "pre-line",
                color: "brand.bg"
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
                bgcolor: "brand.blue",
                color: "brand.bg"
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
              fontFamily: "brandSans",
              fontSize: { xs: 26, md: 43 },
              color: "brand.bg",
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
                  <Divider sx={{ borderColor: "brand.darkBorder" }} />
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "brand.darkMuted"
                    }}
                  >
                    <Typography component="span" sx={{ fontFamily: "brandMono", fontSize: 11 }}>
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
                      fontFamily: "brandSans",
                      fontSize: { xs: 20, md: 24 },
                      lineHeight: 1.2,
                      color: "brand.bg"
                    }}
                  >
                    {contact.value}
                  </Link>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Stack component="footer" sx={{ gap: 3 }}>
            <Divider sx={{ borderColor: "brand.darkBorder" }} />
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between", gap: 2 }}
            >
              <Typography
                component="span"
                sx={{ fontFamily: "brandSans", fontWeight: 800, fontSize: 26, color: "brand.bg" }}
              >
                ЕБ
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: "brandMono",
                  fontSize: 11,
                  textAlign: "center",
                  color: "brand.darkMuted"
                }}
              >
                Сделано с любовью © 2026
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{ flexShrink: 0, fontFamily: "brandMono", fontSize: 11, color: "brand.bg" }}
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

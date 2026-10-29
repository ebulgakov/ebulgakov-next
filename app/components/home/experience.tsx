import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, Container, Divider, List, ListItem, Stack, Typography } from "@mui/material";

import { ActionButton } from "@/app/components/ui/action-button";
import { SectionHeader } from "@/app/components/ui/section-header";
import { externalLinkProps } from "@/app/lib/constants";

import { alLink, cvLink } from "./links";

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

function Experience() {
  return (
    <Box component="section" aria-labelledby="experience-title">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 5, md: 7 },
          py: { xs: 6, md: 10 }
        }}
      >
        <SectionHeader
          id="experience-title"
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
              {...externalLinkProps}
              endIcon={<NorthEastIcon />}
            >
              Читать резюме
            </ActionButton>
            <ActionButton
              variant="outlined"
              href={alLink}
              {...externalLinkProps}
              endIcon={<NorthEastIcon />}
            >
              Читать сопроводительное письмо
            </ActionButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export { Experience };

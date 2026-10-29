import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";

import { SectionHeader } from "@/app/components/ui/section-header";

const competencies = [
  {
    tag: "PIXEL-PERFECT / UI",
    icon: <GroupsOutlinedIcon />,
    title: "Связь дизайна\nи инжиниринга",
    text: "Я не просто внедряю макеты — я навожу мосты между продуктами, дизайнерами и разработчиками. Превращаю статику в pixel-perfect, поддерживаемые UI-компоненты, гарантируя, что финальный продукт соответствует видению, даже если спецификации неполны."
  },
  {
    tag: "PERFORMANCE / SCALE",
    icon: <ViewTimelineOutlinedIcon />,
    title: "Производительность\nи архитектура",
    text: "Мой фокус — веб-производительность и масштабируемость. У меня есть опыт рефакторинга архитектуры, который улучшил критические метрики PageSpeed Insights в 2 раза. Монолит или микросервисы — я выбираю инструмент, подходящий потребностям продукта."
  },
  {
    tag: "B2B / PRINT-ON-DEMAND",
    icon: <ShoppingCartOutlinedIcon />,
    title: "Бизнес-критичные\nрешения",
    text: "Я создаю решения, приносящие прибыль. От создания PoC для Print-on-Demand за две недели, ставшего основным источником дохода, до поддержки крупных B2B платформ. Я понимаю цену ошибки в UI, поэтому ставлю в приоритет тестирование и стабильность."
  },
  {
    tag: "OWNERSHIP / DELIVERY",
    icon: <PsychologyOutlinedIcon />,
    title: "Мой подход",
    text: "Вы можете дать мне задачу, описанную на салфетке, и я самостоятельно организую этапы, истории и задачи. Я не «программист по тикетам» — я решаю проблемы бизнеса с помощью технологий."
  }
];

const competencyRows = [competencies.slice(0, 2), competencies.slice(2)];

function Competencies() {
  return (
    <Box
      component="section"
      aria-labelledby="competencies-title"
      sx={{ borderWidth: "1px 0 0", borderStyle: "solid", borderColor: "brand.line" }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
          pt: { xs: 6, md: 10 },
          pb: { xs: 5, md: 9 }
        }}
      >
        <SectionHeader
          id="competencies-title"
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
                        {item.icon}
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
  );
}

export { Competencies };

import { Grid, Stack, Typography } from "@mui/material";

const stats = [
  { value: "10+", label: "лет в разработке" },
  { value: "100k+", label: "аудитория платформ в день" },
  { value: "×2", label: "улучшение метрик PageSpeed Insights" }
];

function Stats() {
  return (
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
  );
}

export { Stats };

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import { List, ListItem, Paper, Stack, Typography } from "@mui/material";

const systemLayers = [
  { name: "UI -> ES6/React/Vue-компоненты, Storybook", active: false },
  { name: "Логика -> Hooks, Composables, Entities", active: true },
  { name: "Архитектура -> FSD, C4 Model, Компромисс", active: false }
];

function SystemCard() {
  return (
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
  );
}

export { SystemCard };

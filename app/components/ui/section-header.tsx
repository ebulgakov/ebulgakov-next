import { Stack, Typography } from "@mui/material";

type SectionHeaderProps = {
  id: string;
  title: string;
  caption: [string, string];
  dark?: boolean;
};

function SectionHeader({ id, title, caption, dark }: SectionHeaderProps) {
  return (
    <Stack direction={{ xs: "column", md: "row" }} sx={{ gap: { xs: 1.5, md: 4 } }}>
      <Stack direction="row" sx={{ flex: 1, alignItems: "baseline", gap: { xs: 2, md: 4 } }}>
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

export { SectionHeader };

"use client";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { Box, Button, Container, Divider, Grid, Stack, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "use-intl";

import { SectionHeader } from "@/app/components/ui/section-header";
import { externalLinkProps } from "@/app/lib/constants";

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

function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <Box component="footer" aria-labelledby="contacts-title" sx={{ bgcolor: "brand.dark" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 4, md: 6 },
            pt: { xs: 6, md: 9 },
            pb: 3.5
          }}
        >
          <SectionHeader
            id="contacts-title"
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
                    {...(contact.href.startsWith("http") ? externalLinkProps : {})}
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
              <Link href="/">
                <Image width={33} height={30} src="/img/logo.svg" alt="Ebulgakov Logo" />
              </Link>
              <Typography
                component="span"
                sx={{
                  fontFamily: "brandMono",
                  fontSize: 11,
                  textAlign: "center",
                  color: "brand.darkMuted"
                }}
              >
                {t("copyright")}
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

export { Footer };

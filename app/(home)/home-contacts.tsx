"use client";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTranslations } from "use-intl";

function HomeContacts() {
  const t = useTranslations("HomePage.contacts");
  const list = [
    {
      label: "Email",
      href: "mailto:me@ebulgakov.com",
      icon: <AlternateEmailIcon className="size-full" />,
      display: "me@ebulgakov.com"
    },
    {
      label: "Telegram",
      href: "https://t.me/ebulgakov",
      icon: <TelegramIcon className="size-full" />,
      display: "@ebulgakov"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ebulgakov/",
      icon: <LinkedInIcon className="size-full" />,
      display: "ebulgakov"
    },
    {
      label: "Github",
      href: "https://github.com/ebulgakov",
      icon: <GitHubIcon className="size-full" />,
      display: "ebulgakov"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100000705951180",
      icon: <FacebookIcon className="size-full" />,
      display: "Eugene Bulgakov"
    },
    {
      label: t("locationTitle"),
      href: "https://www.google.com/maps/@41.7321292,44.7613927,14z",
      icon: <FlagOutlinedIcon className="size-full" />,
      display: t("locationDescription")
    }
  ];
  return (
    <section>
      <Typography variant="h1">{t("title")}</Typography>

      <Grid container rowSpacing={2}>
        {list.map(item => (
          <Grid key={item.label} size={{ xs: 12, md: 6, lg: 4 }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <IconButton
                color="inherit"
                className="size-12 p-1"
                aria-label={item.label}
                rel="noopener noreferrer"
                target="_blank"
                href={item.href}
              >
                {item.icon}
              </IconButton>

              <dl>
                <Typography component="dt">{item.label}:</Typography>
                <Typography component="dd">
                  <Link rel="noopener noreferrer" target="_blank" href={item.href}>
                    {item.display}
                  </Link>
                </Typography>
              </dl>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export { HomeContacts };

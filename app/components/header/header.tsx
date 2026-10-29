"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Link,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useTranslations } from "use-intl";

import { ChangeLocationSelector } from "@/app/components/change-location-selector";

type HeaderProps = {
  locale?: string;
};

function Header({ locale }: HeaderProps) {
  const t = useTranslations("Header");
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuLinks = [
    { name: t("worksTitle"), url: "/works" },
    { name: t("linkedinTitle"), url: "https://www.linkedin.com/in/ebulgakov/" }
  ];

  return (
    <Fragment>
      <Container>
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
            <Image
              className="block"
              width={33}
              height={30}
              src="/img/logo.svg"
              alt={t("logoAlt")}
            />
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
            {menuLinks.map(link => (
              <Link
                key={link.name}
                href={link.url}
                sx={{ fontFamily: "brandSans", fontSize: 14, color: "brand.ink" }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" sx={{ alignItems: "center", gap: 3 }}>
            {false && <ChangeLocationSelector locale={locale} />}
            <Link
              href="https://static.ebulgakov.com/resume/CV_Evgenii_Bulgakov_Senior_Frontend_ru.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontFamily: "brandSans", fontSize: 14, color: "brand.blue" }}
            >
              Резюме ↗
            </Link>

            <IconButton
              sx={{ display: { md: "none" } }}
              color="inherit"
              aria-label="Toggle Menu"
              onClick={handleToggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: "brand.line" }} />
      </Container>

      <Dialog
        open={showMenu}
        onClose={handleToggleMenu}
        slotProps={{ paper: { className: "w-70 overflow-visible rounded-tr-none md:w-80" } }}
      >
        <IconButton
          className="absolute -top-10 -right-10 rounded-bl-none bg-white hover:bg-gray-200"
          aria-label={t("closeMenu")}
          onClick={handleToggleMenu}
        >
          <CloseIcon />
        </IconButton>

        <List component="nav" className="p-2">
          {menuLinks.map(link => (
            <ListItem key={link.name} disablePadding>
              {link.url.startsWith("http") ? (
                <ListItemButton
                  component="a"
                  className="text-center"
                  href={link.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ListItemText primary={link.name} slotProps={{ primary: { variant: "h6" } }} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={Link}
                  className="text-center"
                  onClick={handleToggleMenu}
                  href={link.url}
                >
                  <ListItemText primary={link.name} slotProps={{ primary: { variant: "h6" } }} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Dialog>
    </Fragment>
  );
}

export { Header };

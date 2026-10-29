"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useTranslations } from "use-intl";

import { ChangeLocationSelector } from "@/app/components/change-location-selector";

type HeaderProps = {
  locale?: string;
};

function Header({ locale }: HeaderProps) {
  const t = useTranslations("Header");
  const tCVAL = useTranslations("CVAL");
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuLinks = [
    { name: t("worksTitle"), url: "/works" },
    { name: t("linkedinTitle"), url: "https://www.linkedin.com/in/ebulgakov/" },
    {
      name: tCVAL("cvShortTitle"),
      url: tCVAL("cvLink")
    },
    {
      name: tCVAL("alShortTitle"),
      url: tCVAL("alLink")
    }
  ];

  return (
    <Fragment>
      <AppBar position="sticky" elevation={0} className="z-20 bg-gray-900/70 backdrop-blur">
        <Toolbar className="gap-4 px-4">
          <Link href="/">
            <Image
              className="block"
              width={33}
              height={30}
              src="/img/logo.svg"
              alt={t("logoAlt")}
            />
          </Link>

          <Box className="mr-auto">
            <ChangeLocationSelector locale={locale} />
          </Box>
          <IconButton color="inherit" aria-label="Toggle Menu" onClick={handleToggleMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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

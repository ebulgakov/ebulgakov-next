"use client";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslations } from "use-intl";

type ChangeLocationSelectorProps = {
  locale?: string;
};

const languages = [
  { value: "en", label: "English 🇬🇧" },
  { value: "ru", label: "Русский 🇷🇺" }
];

function handleChangeLanguage(value: string) {
  document.cookie = `locale=${value}; path=/; max-age=31536000`;
  window.location.reload();
}

function ChangeLocationSelector({ locale = "ru" }: ChangeLocationSelectorProps) {
  const t = useTranslations("Header");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <Button
        color="inherit"
        aria-haspopup="menu"
        aria-expanded={!!anchorEl}
        onClick={e => setAnchorEl(e.currentTarget)}
        className="min-w-0 p-0"
      >
        <Typography
          component="span"
          sx={{ fontFamily: "brandMono", fontSize: 12, color: "brand.muted" }}
        >
          {locale === "ru" ? "RU" : "EN"} ↓
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        slotProps={{ list: { dense: true, className: "w-40" } }}
      >
        <ListSubheader>{t("changeLanguage")}</ListSubheader>
        {languages.map(language => (
          <MenuItem
            key={language.value}
            selected={locale === language.value}
            disabled={locale === language.value}
            onClick={() => handleChangeLanguage(language.value)}
          >
            <ListItemIcon>
              {locale === language.value && <CheckIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText>{language.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export { ChangeLocationSelector };

"use client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "use-intl";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem
} from "@/app/components/ui/dropdown-menu";

type ChangeLocationSelectorProps = {
  locate?: string;
};

function ChangeLocationSelector({ locate = "ru" }: ChangeLocationSelectorProps) {
  const t = useTranslations("Header");
  const handleChangeLanguage = (value: string) => {
    document.cookie = `locale=${value}; path=/; max-age=31536000`;
    window.location.reload();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button  className="flex text-2xl items-center">
          {locate === "ru" ? "🇷🇺" : "🇬🇧"}
          <ChevronDown className="block text-secondary size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t('changeLanguage')}</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={locate === "en"}
            disabled={locate === "en"}
            onCheckedChange={() => handleChangeLanguage("en")}
          >
           English 🇬🇧
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={locate === "ru"}
            disabled={locate === "ru"}
            onCheckedChange={() => handleChangeLanguage("ru")}
          >
           Русский 🇷🇺
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ChangeLocationSelector };

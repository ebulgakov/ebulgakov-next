"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useTranslations } from "use-intl";

import { ChangeLocationSelector } from "@/app/components/change-location-selector";
import { cn } from "@/app/lib/utils";

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
      <header className="sticky top-0 z-20 bg-gray-900/70 text-white backdrop-blur">
        <div className="flex items-center justify-between gap-4 p-4">
          <Link href="/">
            <Image
              className="block"
              width={33}
              height={30}
              src="/img/logo.svg"
              alt={t("logoAlt")}
            />
          </Link>

          <div className="mr-auto">
            <ChangeLocationSelector locale={locale} />
          </div>
          <button
            className="group relative size-8 cursor-pointer rounded-md p-1 transition hover:bg-gray-900"
            aria-label="Toggle Menu"
            onClick={handleToggleMenu}
          >
            <Menu className="size-full" />
          </button>
        </div>
      </header>

      <div
        className={cn("fixed inset-0 z-50 items-center justify-center bg-gray-900/70 p-5", {
          hidden: !showMenu,
          flex: showMenu
        })}
      >
        <button className="absolute inset-0" onClick={handleToggleMenu} />
        <nav className="relative w-70 rounded-sm rounded-tr-none bg-white p-2 shadow-lg md:w-80">
          <button
            className="absolute -top-8 -right-8 size-8 cursor-pointer rounded-md rounded-bl-none bg-white p-1 transition hover:bg-gray-200"
            aria-label={t("closeMenu")}
            onClick={handleToggleMenu}
          >
            <X className="size-full" />
          </button>

          <ul>
            {menuLinks.map(link => (
              <li key={link.name} className="text-center">
                {link.url.startsWith("http") ? (
                  <a
                    className="block py-3 text-lg hover:bg-gray-900 hover:text-white"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    className="block py-3 text-lg hover:bg-gray-900 hover:text-white"
                    onClick={handleToggleMenu}
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export { Header };

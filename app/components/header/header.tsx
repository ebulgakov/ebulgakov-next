"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { cn } from "@/app/lib/utils";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuLinks = [
    { name: "Works", url: "/works" },
    { name: "LinkedIn Profile", url: "https://www.linkedin.com/in/eugene-bulgakov" },
    { name: "Curriculum Vitae", url: "https://static.ebulgakov.com/resume/CV-Eugene-Bulgakov.pdf" },
    {
      name: "Application Letter",
      url: "https://static.ebulgakov.com/resume/Application-Letter-Eugene-Bulgakov-EN.pdf"
    }
  ];

  return (
    <Fragment>
      <header className="sticky top-0 z-20 bg-gray-900/70 text-white backdrop-blur">
        <div className="flex justify-between p-4">
          <Link href="/">
            <Image width={33} height={30} src="/img/logo.svg" alt="Ebulgakov Logo" />
          </Link>

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
        <nav className="relative w-80 rounded-sm rounded-tr-none bg-white shadow-lg p-2">
          <button
            className="absolute -top-8 -right-8 size-8 cursor-pointer rounded-md rounded-bl-none bg-white p-1 transition hover:bg-gray-200"
            aria-label="Close Menu"
            onClick={handleToggleMenu}
          >
            <X className="size-full" />
          </button>

          <ul>
            {menuLinks.map(link => (
              <li key={link.name} className="text-center">
                {link.url.startsWith("http") ? (
                  <a
                    className="block text-lg py-3 hover:bg-gray-900 hover:text-white"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    className="block  text-lg py-3 hover:bg-gray-900 hover:text-white"
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

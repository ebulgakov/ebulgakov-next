"use client";

import { AtSign, Send, Facebook, FlagTriangleRight, Github, Linkedin } from "lucide-react";
import { useTranslations } from "use-intl";

import { Title } from "@/app/components/ui/title";

function HomeContacts() {
  const t = useTranslations("HomePage.contacts");
  const list = [
    {
      label: "Email",
      href: "mailto:me@ebulgakov.com",
      icon: <AtSign className="size-full" />,
      display: "me@ebulgakov.com"
    },
    {
      label: "Telegram",
      href: "https://t.me/ebulgakov",
      icon: <Send className="size-full" />,
      display: "@ebulgakov"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ebulgakov/",
      icon: <Linkedin className="size-full" />,
      display: "ebulgakov"
    },
    {
      label: "Github",
      href: "https://github.com/ebulgakov",
      icon: <Github className="size-full" />,
      display: "ebulgakov"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100000705951180",
      icon: <Facebook className="size-full" />,
      display: "Eugene Bulgakov"
    },
    {
      label: t("locationTitle"),
      href: "https://www.google.com/maps/@41.7321292,44.7613927,14z",
      icon: <FlagTriangleRight className="size-full" />,
      display: t("locationDescription")
    }
  ];
  return (
    <section>
      <Title variant="h1">{t("title")}</Title>

      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map(item => (
          <div key={item.label} className="flex items-center gap-4">
            <a className="size-10" rel="noopener noreferrer" target="_blank" href={item.href}>
              {item.icon}
            </a>

            <dl className="">
              <dt>{item.label}:</dt>
              <dd>
                <a
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.href}
                >
                  {item.display}
                </a>
              </dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

export { HomeContacts };

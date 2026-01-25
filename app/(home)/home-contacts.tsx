import { AtSign, Send, Facebook, FlagTriangleRight, Github, Linkedin } from "lucide-react";

import { Title } from "@/app/components/ui/title";

function HomeContacts() {
  const list = [
    {
      label: "Email",
      href: "mailto:me@ebulgakov.com",
      icon: <AtSign />,
      display: "me@ebulgakov.com"
    },
    {
      label: "Telegram",
      href: "https://t.me/ebulgakov",
      icon: <Send />,
      display: "@ebulgakov"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ebulgakov/",
      icon: <Linkedin />,
      display: "ebulgakov"
    },
    {
      label: "Github",
      href: "https://github.com/ebulgakov",
      icon: <Github />,
      display: "ebulgakov"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100000705951180",
      icon: <Facebook />,
      display: "Eugene Bulgakov"
    },
    {
      label: "Location",
      href: "https://www.google.com/maps/@41.7321292,44.7613927,14z",
      icon: <FlagTriangleRight />,
      display: "Tbilisi, Georgia"
    }
  ];
  return (
    <section>
      <Title variant="h1">Contacts and social</Title>

      <div className="grid grid-cols-3 gap-y-2">
        {list.map(item => (
          <div key={item.label}>
            <dl className="">
              <dt>{item.label}:</dt>
              <dd>
                <a rel="noopener noreferrer" target="_blank" href={item.href}>
                  {item.icon}
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

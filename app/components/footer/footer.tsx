"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "use-intl";

import { Container } from "@/app/components/ui/container";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-auto bg-gray-900 py-6 text-white">
      <Container>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image width={33} height={30} src="/img/logo.svg" alt="Ebulgakov Logo" />
          </Link>

          <a
            href="https://github.com/ebulgakov/ebulgakov-next"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("copyright")}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };

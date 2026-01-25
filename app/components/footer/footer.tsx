import Image from "next/image";
import Link from "next/link";

import { Container } from "@/app/components/ui/container";

function Footer() {
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
            Made with love &copy; 2026
          </a>

          <a
            href="https://old.ebulgakov.com/"
            className="ml-auto underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Old Version
          </a>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };

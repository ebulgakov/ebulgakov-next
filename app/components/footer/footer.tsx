import Image from "next/image";
import Link from "next/link";

import { Container } from "@/app/components/ui/container";

function Footer() {
  return (
    <footer className="mt-12 bg-gray-900 py-6 text-white">
      <Container>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image width={33} height={30} src="/img/logo.svg" alt="Ebulgakov Logo" />
          </Link>

          <div>
            Made with love &copy; 2026
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };

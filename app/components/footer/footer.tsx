"use client";
import { Box, Container, Link as MuiLink, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "use-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <Box component="footer" className="mt-auto bg-gray-900 py-6 text-white">
      <Container>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Link href="/">
            <Image width={33} height={30} src="/img/logo.svg" alt="Ebulgakov Logo" />
          </Link>

          <MuiLink
            href="https://github.com/ebulgakov/ebulgakov-next"
            color="inherit"
            underline="always"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("copyright")}
          </MuiLink>
        </Stack>
      </Container>
    </Box>
  );
}

export { Footer };

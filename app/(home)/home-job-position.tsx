"use client";

import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Box, Link, Stack, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "use-intl";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";

import styles from "./home-job-position.module.css";

function HomeJobPosition() {
  const t = useTranslations("HomePage.experience");
  const tCVAL = useTranslations("CVAL");

  return (
    <section>
      <Typography variant="h1">{t("title")}</Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box className="flex-1 space-y-3">
          <Typography variant="h3" className="mt-0 mb-6">
            {t("jobTitle")}
          </Typography>

          <Link
            color="inherit"
            underline="none"
            className="flex flex-col gap-3"
            href={t("companyLink")}
            target="_blank"
            rel="noopener noreferrer"
            title={t("company")}
          >
            <CloudinaryImage
              width="150"
              height="150"
              src={t("companyLogoSrc")}
              alt={`${t("company")} Logo`}
            />

            <em>{t("companyDescription")}</em>
          </Link>

          <dl>
            <dt className="font-medium">{t("employedTitle")}</dt>
            <dd>
              <ReactMarkdown>{t("employedDescription")}</ReactMarkdown>
            </dd>
          </dl>

          <dl>
            <dt className="font-medium">{t("locationTitle")}</dt>
            <dd>{t("locationDescription")}</dd>
          </dl>
        </Box>
        <Box className="flex-2">
          <Typography variant="h3" className="mt-0 mb-6">
            {t("responsibilityTitle")}
          </Typography>
          <div className={styles.wrapper}>
            <ReactMarkdown>{t("responsibilityDescription")}</ReactMarkdown>
          </div>

          <Stack direction="row" spacing={3} sx={{ justifyContent: "flex-end", mt: 2 }}>
            <Link
              className="flex gap-1"
              href={tCVAL("cvLink")}
              target="_blank"
              rel="noopener noreferrer"
              title={tCVAL("cvShortTitle")}
            >
              <PlayCircleOutlinedIcon />
              {tCVAL("cvTitle")}
            </Link>
            <Link
              className="flex gap-1"
              href={tCVAL("alLink")}
              target="_blank"
              rel="noopener noreferrer"
              title={tCVAL("alShortTitle")}
            >
              <PlayCircleOutlinedIcon />
              {tCVAL("alTitle")}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </section>
  );
}

export { HomeJobPosition };

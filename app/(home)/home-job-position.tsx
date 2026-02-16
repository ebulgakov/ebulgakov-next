"use client";

import { CirclePlay } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "use-intl";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Title } from "@/app/components/ui/title";

import styles from "./home-job-position.module.css";

function HomeJobPosition() {
  const t = useTranslations("HomePage.experience");
  const tCVAL = useTranslations("CVAL");

  return (
    <section>
      <Title variant="h1">{t("title")}</Title>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1 space-y-3">
          <Title variant="h3" className="mt-0 mb-6">
            {t("jobTitle")}
          </Title>

          <a
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
          </a>

          <dl>
            <dt className="font-medium">{t("employedTitle")}</dt>
            <dd>{t("employedDescription")}</dd>
          </dl>

          <dl>
            <dt className="font-medium">{t("locationTitle")}</dt>
            <dd>{t("locationDescription")}</dd>
          </dl>
        </div>
        <div className="flex-2">
          <Title variant="h3" className="mt-0 mb-6">
            {t("responsibilityTitle")}
          </Title>
          <div className={styles.wrapper}>
            <ReactMarkdown>{t("responsibilityDescription")}</ReactMarkdown>
          </div>

          <div className="mt-4 flex justify-end gap-6">
            <a
              className="text-primary flex gap-1"
              href={tCVAL("cvLink")}
              target="_blank"
              rel="noopener noreferrer"
              title={tCVAL("cvShortTitle")}
            >
              <CirclePlay />
              <span className="underline hover:no-underline">{tCVAL("cvTitle")}</span>
            </a>
            <a
              className="text-primary flex gap-1"
              href={tCVAL("alLink")}
              target="_blank"
              rel="noopener noreferrer"
              title={tCVAL("alShortTitle")}
            >
              <CirclePlay />
              <span className="underline hover:no-underline">{tCVAL("alTitle")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HomeJobPosition };

import { getLocale } from "next-intl/server";

import { Competencies, Experience, Hero, Projects } from "@/app/components/home";
import { getFeaturedWork } from "@/db/queries/get-works";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Евгений Булгаков — Senior Frontend Engineer & System Architect"
};

async function Home() {
  const locale = await getLocale();
  const featuredWork = await getFeaturedWork();
  return (
    <>
      <Hero />
      <Competencies />
      <Projects work={featuredWork} locale={locale} />
      <Experience />
    </>
  );
}

export default Home;

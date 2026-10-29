import { Competencies, Experience, Hero, Projects } from "@/app/components/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Евгений Булгаков — Senior Frontend Engineer & System Architect"
};

function HomeNew() {
  return (
    <>
      <Hero />
      <Competencies />
      <Projects />
      <Experience />
    </>
  );
}

export default HomeNew;

import { Container } from "@mui/material";
import { getLocale } from "next-intl/server";

import { Divide } from "@/app/components/ui/divide";
import { HomeCompetencies } from "@/app/home-old/home-competencies";
import { HomeContacts } from "@/app/home-old/home-contacts";
import { HomeJobPosition } from "@/app/home-old/home-job-position";
import { HomeRandomWork } from "@/app/home-old/home-random-work";
import { HomeWall } from "@/app/home-old/home-wall";
import { getFeaturedWork } from "@/db/queries/get-works";

async function Home() {
  const locale = await getLocale();
  const featuredWork = await getFeaturedWork();

  return (
    <main>
      <HomeWall />

      <Container>
        <HomeCompetencies />
      </Container>

      <Divide />

      <Container>
        <HomeRandomWork locale={locale} work={featuredWork} />
      </Container>

      <Divide />

      <Container>
        <HomeJobPosition />
      </Container>

      <Divide />

      <Container>
        <HomeContacts />
      </Container>
    </main>
  );
}

export default Home;

import { getLocale } from "next-intl/server";

import { HomeCompetencies } from "@/app/(home)/home-competencies";
import { HomeContacts } from "@/app/(home)/home-contacts";
import { HomeJobPosition } from "@/app/(home)/home-job-position";
import { HomeRandomWork } from "@/app/(home)/home-random-work";
import { HomeWall } from "@/app/(home)/home-wall";
import { Container } from "@/app/components/ui/container";
import { Divide } from "@/app/components/ui/divide";
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

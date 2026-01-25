import { HomeCompetencies } from "@/app/(home)/home-competencies";
import { HomeContacts } from "@/app/(home)/home-contacts";
import { HomeJobPosition } from "@/app/(home)/home-job-position";
import { HomeRandomWork } from "@/app/(home)/home-random-work";
import { HomeWall } from "@/app/(home)/home-wall";
import { Container } from "@/app/components/ui/container";
import { Divide } from "@/app/components/ui/divide";
import { getRandomWork } from "@/db/queries/get-works";

async function Home() {
  const randomWork = await getRandomWork();

  return (
    <main>
      <HomeWall />

      <Container>
        <HomeCompetencies />
      </Container>

      <Divide />

      <Container>
        <HomeRandomWork work={randomWork} />
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

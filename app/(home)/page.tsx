import { HomeCompetencies } from "@/app/(home)/home-competencies";
import { HomeContacts } from "@/app/(home)/home-contacts";
import { HomeJobPosition } from "@/app/(home)/home-job-position";
import { HomeLastWork } from "@/app/(home)/home-last-work";
import { HomeWall } from "@/app/(home)/home-wall";
import { Container } from "@/app/components/ui/container";
import { Divide } from "@/app/components/ui/divide";

async function Home() {
  return (
    <div>
      <HomeWall />

      <Container>
        <HomeCompetencies />
      </Container>

      <Divide />

      <Container>
        <HomeLastWork />
      </Container>

      <Divide />

      <Container>
        <HomeJobPosition />
      </Container>

      <Divide />

      <Container>
        <HomeContacts />
      </Container>
    </div>
  );
}

export default Home;

import { HomeWall } from "@/app/(home)/home-wall";
import { HomeCompetencies } from "@/app/(home)/home-competencies";
import { HomeJobPosition } from "@/app/(home)/home-job-position";
import { HomeLastWork } from "@/app/(home)/home-last-work";
import { HomeContacts } from "@/app/(home)/home-contacts";
import { Divide } from "@/app/components/ui/divide";
import { Container } from "@/app/components/ui/container";

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

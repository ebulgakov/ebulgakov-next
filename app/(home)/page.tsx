import { HomeWall } from "@/app/(home)/home-wall";
import { HomeCompetencies } from "@/app/(home)/home-competencies";
import { HomeJobPosition } from "@/app/(home)/home-job-position";
import { HomeLastWork } from "@/app/(home)/home-last-work";
import { HomeContacts } from "@/app/(home)/home-contacts";
import { Divide } from "@/app/components/ui/divide";

async function Home() {
  return (
    <div>
      <HomeWall />

      <HomeCompetencies />

      <Divide />

      <HomeLastWork />

      <Divide />

      <HomeJobPosition />

      <Divide />

      <HomeContacts />
    </div>
  );
}

export default Home;

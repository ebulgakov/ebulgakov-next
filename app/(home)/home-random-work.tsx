import type { Work } from "@/db/schema";

type HomeRandomWorkProps = {
  work: Work;
};
function HomeRandomWork({ work }: HomeRandomWorkProps) {
  return <div>{JSON.stringify(work)}</div>;
}

export { HomeRandomWork };

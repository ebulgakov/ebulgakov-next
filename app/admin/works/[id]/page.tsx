import { WorkEdit } from "@/app/components/admin/work-edit";
import { Container } from "@/app/components/ui/container";
import { getAllTags, getTagsByWorkId } from "@/db/queries/get-tags";
import { getWorkBySlug } from "@/db/queries/get-works";

type WorkPageProps = {
  params: {
    id: string;
  };
};
async function AdminEditWorkPage({ params }: WorkPageProps) {
  const { id } = await params;

  const workResponse = await getWorkBySlug(id);
  const tagsResponse = await getAllTags();
  if (!workResponse) return <div>Work not found</div>;

  const tagsByWorkId = await getTagsByWorkId(workResponse.id);

  return (
    <Container>
      <WorkEdit work={workResponse} tags={tagsResponse} workTags={tagsByWorkId} />
    </Container>
  );
}

export default AdminEditWorkPage;

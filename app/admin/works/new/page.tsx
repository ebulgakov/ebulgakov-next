import { AdminNewWork } from "@/app/components/admin/work";
import { Container } from "@/app/components/ui/container";
import { getAllCategories } from "@/db/queries/get-categories";
import { getAllTags } from "@/db/queries/get-tags";

async function AdminNewWorkPage() {
  const tagsResponse = await getAllTags();
  const categoriesResponse = await getAllCategories();

  return (
    <Container>
      <AdminNewWork categories={categoriesResponse} tags={tagsResponse} />
    </Container>
  );
}

export default AdminNewWorkPage;

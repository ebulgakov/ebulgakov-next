import Link from "next/link";

import { Title } from "@/app/components/ui/title";
import { getAllWorks } from "@/db/queries/get-works";

async function AdminWorksPage() {
  const worksResponse = await getAllWorks();

  return (
    <div>
      <Title>Admin Works Page</Title>

      {worksResponse.map(work => (
        <div key={work.id}>
          <h2>{work.title}</h2>
          <Link href={`/admin/works/${work.slug}`} className="text-primary">
            Edit Work
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AdminWorksPage;

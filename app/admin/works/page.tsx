import Link from "next/link";
import { getLocale } from "next-intl/server";

import { Container } from "@/app/components/ui/container";
import { Title } from "@/app/components/ui/title";
import { WorkPreview } from "@/app/components/work-preview";
import { getWorks } from "@/db/queries/get-works";

async function AdminWorksPage() {
  const locale = await getLocale();
  const worksResponse = await getWorks();

  return (
    <main>
      <Container>
        <div className="flex justify-between items-baseline">
          <Title variant="h1">Admin Works Page</Title>
          <Link href="/admin/works/new" className="text-primary text-lg font-bold hover:underline">Add New Work</Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {worksResponse.map(work => (
            <WorkPreview locale={locale} key={work.id} work={work} slugPrefix="/admin/works/" />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default AdminWorksPage;

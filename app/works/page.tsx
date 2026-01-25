import Link from "next/link";

import { CloudinaryImage } from "@/app/components/ui/cloudinary-image";
import { Container } from "@/app/components/ui/container";
import { Title } from "@/app/components/ui/title";
import { getCategories } from "@/db/queries/get-categories";
import { getUniqueWorkYears, getWorks } from "@/db/queries/get-works";

import { FilterRow } from "./filter-row";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eugene Bulgakov - Works"
};

type WorksPageProps = {
  searchParams: {
    year?: string;
    category?: string;
  };
};

async function WorksPage({ searchParams }: WorksPageProps) {
  const { year = "", category = "" } = await searchParams;
  const filters = { year, category: Number(category), isPublished: true };
  const works = await getWorks(filters);

  console.log( await getUniqueWorkYears())
  const years = await getUniqueWorkYears(filters).then(years =>
    years.map(year => ({
      value: year,
      label: year === `${2000}` ? "…–2010" : year
    }))
  );
  const categories = await getCategories(filters).then(categories =>
    categories.map(category => ({
      value: `${category.id}`,
      label: category.name
    }))
  );

  const getUrl = ({ newYear, newCategory }: { newYear?: string; newCategory?: string }) => {
    let url = "/works?";

    const qYear = newYear === "-" ? undefined : newYear || year;
    if (qYear) url += `year=${qYear}&`;

    const qCategory = newCategory === "-" ? undefined : newCategory || category;
    if (qCategory) url += `category=${qCategory}&`;

    return url.slice(0, -1); // Remove trailing '&' or '?'
  };

  return (
    <main>
      <Container>
        <Title variant="h1">All works</Title>
        <div className="flex items-baseline gap-4">
          <Title variant="h3" className="mt-0">
            Filters
          </Title>
          {(year || category) && (
            <Link className="underline" href="/works">
              Clear all
            </Link>
          )}
        </div>

        <div className="mb-2">
          <FilterRow
            prop="newYear"
            title="Year:"
            items={years}
            selectedItem={year}
            getUrl={getUrl}
          />
        </div>

        <div className="mb-6">
          <FilterRow
            prop="newCategory"
            title="Category:"
            items={categories}
            selectedItem={category}
            getUrl={getUrl}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {works.map(work => (
            <Link href={`/works/${work.slug}`} className="group relative pt-[100%]" key={work.id}>
              <figure className="absolute inset-0 size-full">
                <CloudinaryImage
                  plugins={["lazyLoad"]}
                  className="size-full object-cover"
                  width={400}
                  height={400}
                  src={work.previewImage.public_id}
                  alt={work.title}
                />
                <figcaption className="bg-opacity-50 absolute inset-0 bg-gray-900/70 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="text-2xl">{work.title}</div>
                  <p>{work.previewDescription}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default WorksPage;

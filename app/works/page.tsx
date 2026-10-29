import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import { getLocale } from "next-intl/server";

import { WorkPreview } from "@/app/components/work-preview";
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
  const locale = await getLocale();
  const { year = "", category = "" } = await searchParams;
  const filters = { year, category: Number(category), isPublished: true };
  const works = await getWorks(filters);

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
        <Typography variant="h1">All works</Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: "baseline" }}>
          <Typography variant="h3" className="mt-0">
            Filters
          </Typography>
          {(year || category) && (
            <Link underline="always" href="/works">
              Clear all
            </Link>
          )}
        </Stack>

        <Box sx={{ mb: 1 }}>
          <FilterRow
            prop="newYear"
            title="Year:"
            items={years}
            selectedItem={year}
            getUrl={getUrl}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FilterRow
            prop="newCategory"
            title="Category:"
            items={categories}
            selectedItem={category}
            getUrl={getUrl}
          />
        </Box>
        <Grid container spacing={1}>
          {works.map(work => (
            <Grid key={work.id} size={{ xs: 12, md: 6, lg: 4 }}>
              <WorkPreview locale={locale} slugPrefix="/works/" work={work} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default WorksPage;

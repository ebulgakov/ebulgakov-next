import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { getLocale } from "next-intl/server";

import { WorkPreview } from "@/app/components/work-preview";
import { getWorks } from "@/db/queries/get-works";

async function AdminWorksPage() {
  const locale = await getLocale();
  const worksResponse = await getWorks();

  return (
    <main>
      <Container>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "baseline" }}>
          <Typography variant="h1">Admin Works Page</Typography>
          <Button href="/admin/works/new" variant="contained" size="large">
            Add New Work
          </Button>
        </Stack>

        <Grid container spacing={1}>
          {worksResponse.map(work => (
            <Grid key={work.id} size={4}>
              <WorkPreview locale={locale} work={work} slugPrefix="/admin/works/" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default AdminWorksPage;

import { Box, Container, Paper, Typography } from "@mui/material";
import { neonAuth } from "@neondatabase/auth/next/server";

async function ServerRenderedPage() {
  const { session, user } = await neonAuth();
  return (
    <Container maxWidth="sm" className="space-y-4 py-6">
      <Typography variant="h1" className="my-0 text-2xl font-semibold">
        Server Rendered Page
      </Typography>
      <Typography color="text.secondary">
        Authenticated:{" "}
        <Box component="span" sx={{ color: session ? "success.main" : "error.main" }}>
          {session ? "Yes" : "No"}
        </Box>
      </Typography>
      {user && <Typography color="text.secondary">User ID: {user.id}</Typography>}
      <Typography sx={{ fontWeight: 500 }}>Session and User Data:</Typography>
      <Paper variant="outlined" component="pre" className="overflow-x-auto bg-gray-100 p-4 text-sm">
        {JSON.stringify({ session, user }, null, 2)}
      </Paper>
    </Container>
  );
}

export default ServerRenderedPage;

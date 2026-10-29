import { Container } from "@mui/material";

import { SignInForm } from "./sign-in-form";

function AuthPage() {
  return (
    <Container maxWidth="xs" className="flex min-h-[70vh] flex-col justify-center">
      <SignInForm />
    </Container>
  );
}

export default AuthPage;

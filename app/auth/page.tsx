import { AuthView } from "@neondatabase/auth/react";

import { cn } from "@/app/lib/utils";

import styles from "./auth-page.module.css";

async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  return (
    <main className={cn(styles.auth, "flex min-h-[100%] flex-col items-center justify-center")}>
      <AuthView className="mx-auto" path={path} />
    </main>
  );
}

export default AuthPage;

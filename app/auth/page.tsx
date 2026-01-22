import { AuthView } from "@neondatabase/auth/react";

import styles from "./auth-page.module.css";

async function AuthPage({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;
  return (
    <main className={styles.auth}>
      <AuthView className="mx-auto" path={path} />
    </main>
  );
}

export default AuthPage;

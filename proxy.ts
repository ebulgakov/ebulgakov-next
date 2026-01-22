import { neonAuthMiddleware } from "@neondatabase/auth/next/server";
export default neonAuthMiddleware({ loginUrl: "/auth" });
export const config = {
  matcher: [
    // Protected routes requiring authentication
    "/admin/:path*"
  ]
};

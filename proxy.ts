import { neonAuthMiddleware } from "@neondatabase/auth/next/server";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

const neonHandler = neonAuthMiddleware({ loginUrl: "/auth" });

function proxyMiddleware(req: NextRequest & { ip?: string }) {
  if (req.nextUrl.pathname.match("__clerk")) {
    const proxyHeaders = new Headers(req.headers);
    proxyHeaders.set("Clerk-Proxy-Url", process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "");
    proxyHeaders.set("Clerk-Secret-Key", process.env.CLERK_SECRET_KEY || "");

    if (req.ip) {
      proxyHeaders.set("X-Forwarded-For", req.ip);
    } else {
      proxyHeaders.set("X-Forwarded-For", req.headers.get("X-Forwarded-For") || "");
    }

    const proxyUrl = new URL(req.url);
    proxyUrl.host = "frontend-api.clerk.dev";
    proxyUrl.port = "443";
    proxyUrl.protocol = "https";
    proxyUrl.pathname = proxyUrl.pathname.replace("/__clerk", "");

    return NextResponse.rewrite(proxyUrl, {
      request: {
        headers: proxyHeaders
      }
    });
  }

  return null;
}

export default function middleware(req: NextRequest) {
  const proxyResponse = proxyMiddleware(req);
  if (proxyResponse) {
    return proxyResponse;
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    return neonHandler(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc|__clerk|admin)(.*)"
  ]
};

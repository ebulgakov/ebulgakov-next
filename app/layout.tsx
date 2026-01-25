import { NeonAuthUIProvider } from "@neondatabase/auth/react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { StrictMode } from "react";

import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { authClient } from "@/app/lib/auth/client";

import type { Metadata } from "next";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"]
});

export const metadata: Metadata = {
  title: "Eugene Bulgakov - Frontend Engineer",
  description:
    "Hello, I am Eugene Bulgakov. I work as a senior frontend engineer, and I try to make the Internet better. ",
  keywords: [
    "Eugene Bulgakov",
    "Eugene Bulgakov portfolio",
    "Eugene Bulgakov frontend",
    "Eugene Bulgakov engineer",
    "Eugene Bulgakov developer",
    "Eugene Bulgakov web",
    "frontend engineer portfolio",
    "frontend developer portfolio",
    "web developer portfolio",
    "web engineer portfolio"
  ],
  metadataBase: new URL("https://bulgakov.dev"),
  openGraph: {
    title: "Eugene Bulgakov - Senior Frontend Engineer",
    description:
      "Hello, I am Eugene Bulgakov. I work as a senior frontend engineer, and I try to make the Internet better. ",
    url: "https://ebulgakov.com",
    siteName: "Eugene Bulgakov - Senior Frontend Engineer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eugene Bulgakov Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html lang="en" className={openSans.variable} suppressHydrationWarning>
        <NextIntlClientProvider>
          <body className="antialiased">
            <NeonAuthUIProvider authClient={authClient} redirectTo="/admin" emailOTP>
              <Header />
              {children}
              <Footer />
            </NeonAuthUIProvider>
          </body>
        </NextIntlClientProvider>
      </html>
    </StrictMode>
  );
}

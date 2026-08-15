import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";

const siteUrl = "https://dhanushs.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dhanush S | Software Developer",
  description:
    "Software Developer with 2 years of experience building enterprise web applications and SaaS platforms using React, Next.js, TypeScript, NestJS, PostgreSQL, and Prisma.",
  keywords: [
    "Dhanush S",
    "Software Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
  ],
  authors: [{ name: "Dhanush S" }],
  openGraph: {
    title: "Dhanush S | Software Developer",
    description:
      "Software Developer with 2 years of experience building enterprise web applications and SaaS platforms using React, Next.js, TypeScript, NestJS, PostgreSQL, and Prisma.",
    url: siteUrl,
    siteName: "Dhanush S",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dhanush S — Software Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush S | Software Developer",
    description:
      "Software Developer with 2 years of experience building enterprise web applications and SaaS platforms using React, Next.js, TypeScript, NestJS, PostgreSQL, and Prisma.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}

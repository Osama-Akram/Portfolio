import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header, Footer } from "@/components/layout";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-beta-lac-82.vercel.app"),
  title: "M. Osama Akram | Automation Engineer & Agentic AI Developer",
  description:
    "Building intelligent automation systems that eliminate manual workflows and scale businesses. Specializing in Playwright, n8n, RAG systems, and AI-powered solutions.",
  keywords: [
    "Automation Engineer",
    "Agentic AI Developer",
    "Playwright",
    "n8n",
    "RAG Systems",
    "Python Developer",
    "Test Automation",
    "AI Solutions",
    "Pakistan",
    "Remote Developer",
  ],
  authors: [{ name: "M. Osama Akram" }],
  creator: "M. Osama Akram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-beta-lac-82.vercel.app",
    siteName: "M. Osama Akram Portfolio",
    title: "M. Osama Akram | Automation Engineer & Agentic AI Developer",
    description:
      "Building intelligent automation systems that eliminate manual workflows and scale businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "M. Osama Akram - Automation Engineer & Agentic AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Osama Akram | Automation Engineer & Agentic AI Developer",
    description:
      "Building intelligent automation systems that eliminate manual workflows and scale businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

// Font
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codemaster.ai"), // required for OG/Twitter images
  title: "CodeMaster AI – Practice Coding with AI",
  description:
    "CodeMaster AI helps you practice coding problems, learn algorithms, and improve your programming skills with AI-powered hints and solutions.",
  keywords: [
    "coding practice",
    "programming challenges",
    "AI coding assistant",
    "algorithm practice",
    "competitive programming",
    "CodeMaster AI",
    "learn coding online",
    "practice problems",
  ],
  authors: [{ name: "CodeMaster AI Team", url: "https://codemaster.ai" }],
  creator: "CodeMaster AI",
  publisher: "CodeMaster AI",
  category: "Education",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "CodeMaster AI – Practice Coding with AI",
    description:
      "Solve coding problems, improve your programming skills, and get AI-assisted hints and solutions on CodeMaster AI.",
    siteName: "CodeMaster AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeMaster AI – AI Coding Practice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CodeMasterAI",
    title: "CodeMaster AI – Practice Coding with AI",
    description:
      "Solve coding problems, improve your programming skills, and get AI-assisted hints and solutions.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: "#6366f1",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

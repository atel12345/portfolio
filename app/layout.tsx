import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricola = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap"
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-zeta-coral-27.vercel.app"),
  title: "Amine Telouani | Computer Engineering & AI",
  description:
    "Portfolio of Amine Telouani, an engineering student building applied AI, data, and web systems in Casablanca.",
  openGraph: {
    title: "Amine Telouani | Computer Engineering & AI",
    description:
      "Applied AI, data engineering, and web systems by Amine Telouani.",
    url: "https://portfolio-zeta-coral-27.vercel.app",
    siteName: "Amine Telouani",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Telouani | Computer Engineering & AI",
    description:
      "Applied AI, data engineering, and web systems by Amine Telouani."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricola.variable} ${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

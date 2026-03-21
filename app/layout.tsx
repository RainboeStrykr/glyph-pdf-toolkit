import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Suspense } from "react";
import glyphLogo from "./glyph_logo_white.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glyph - Your ultimate browser-based PDF toolkit🚀",
  description: "Unlock the full potential of your PDFs with Glyph. Merge, split, secure, convert – all in one place. Simple, powerful, private. ",
  icons: {
    icon: glyphLogo.src,
    shortcut: glyphLogo.src,
    apple: glyphLogo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 min-h-screen flex flex-col`}>
        <Suspense fallback={null}>
          <LoadingOverlay />
        </Suspense>
        <Navbar />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

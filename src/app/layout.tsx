import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alican Koçman - Frontend Developer",
  description: "Frontend Developer olarak modern web uygulamaları geliştiriyorum. React, Next.js, TypeScript ve Tailwind CSS uzmanı.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Development"],
  authors: [{ name: "Alican Koçman" }],
  creator: "Alican Koçman",
  openGraph: {
    title: "Alican Koçman - Frontend Developer",
    description: "Frontend Developer olarak modern web uygulamaları geliştiriyorum.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}> 
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

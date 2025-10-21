import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FUND-FOR-FOUND",
  description: "A platform for funding and organization projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50"> 
      <body>
        <Header />
        <main className="min-h-[calc(100vh-140px)]"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
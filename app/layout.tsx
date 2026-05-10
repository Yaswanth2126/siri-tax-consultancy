import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";

import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Siri Tax Consultancy",
  description:
    "Professional GST, Income Tax and Business Compliance Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-black text-white overflow-x-hidden">

        <Navbar />

        <main className="pt-32">

          {children}

        </main>

        <WhatsAppButton />

      </body>

    </html>
  );
}
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Siri Tax Consultancy",
    template: "%s | Siri Tax Consultancy",
  },

  description:
    "Professional GST filing, Income Tax filing, MSME registration and business compliance services.",

  keywords: [
    "GST Filing",
    "Income Tax",
    "MSME Registration",
    "Tax Consultancy",
    "GST Services",
    "Business Compliance",
    "Siri Tax Consultancy",
  ],

  authors: [
    {
      name: "Siri Tax Consultancy",
    },
  ],

  creator: "Siri Tax Consultancy",

  metadataBase: new URL("https://siritaxconsultancy.in"),

  openGraph: {
    title: "Siri Tax Consultancy",
    description:
      "Professional GST & Income Tax Solutions for businesses and individuals.",

    url: "https://siritaxconsultancy.in",

    siteName: "Siri Tax Consultancy",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Siri Tax Consultancy",
    description:
      "Professional GST & Income Tax Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body
        suppressHydrationWarning
        className={`${inter.className} bg-black text-white`}
      >

        {children}

      </body>

    </html>
  );
}
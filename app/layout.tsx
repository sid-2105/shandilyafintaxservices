import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicsans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plexmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shandilya Fintax Services LLP | IFRS, Tax Advisory & Compliance",
  description:
    "Shandilya Fintax Services LLP delivers IFRS reporting, tax advisory, bookkeeping, VAT, GST, internal controls and financial accounting for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

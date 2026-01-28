import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vertigo Interiors | Bespoke Interior Design",
    template: "%s | Vertigo Interiors",
  },
  description: "Vertigo Interiors creates sophisticated, timeless spaces that reflect your lifestyle. Award-winning interior design for kitchens, bathrooms, living rooms and bedrooms across the UK.",
  keywords: ["interior design", "bespoke interiors", "kitchen design", "bathroom design", "UK interior designer", "luxury interiors"],
  authors: [{ name: "Vertigo Interiors" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vertigo-interiors.com",
    siteName: "Vertigo Interiors",
    title: "Vertigo Interiors | Bespoke Interior Design",
    description: "Vertigo Interiors creates sophisticated, timeless spaces that reflect your lifestyle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

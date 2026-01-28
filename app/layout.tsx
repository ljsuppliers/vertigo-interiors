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
    default: "Vertigo Interiors | Interior Design London & South East",
    template: "%s | Vertigo Interiors",
  },
  description: "Bespoke interior design services in London and South East England. We create sophisticated, timeless spaces for kitchens, bathrooms, living rooms and bedrooms.",
  keywords: ["interior design London", "interior designer South East", "bespoke interiors", "kitchen design London", "bathroom design", "luxury interiors London"],
  authors: [{ name: "Vertigo Interiors" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vertigo-interiors.com",
    siteName: "Vertigo Interiors",
    title: "Vertigo Interiors | Interior Design London & South East",
    description: "Bespoke interior design services in London and South East England. Sophisticated, timeless spaces.",
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

import type { Metadata } from "next";
import { Playfair_Display, Caveat, Inter } from "next/font/google";
import "./globals.css";
import StarField from "@/components/StarField";
import SecretStar from "@/components/SecretStar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "For You — A Little Something",
  description: "A digital birthday gift, made just for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${caveat.variable} ${inter.variable} font-body bg-midnight text-parchment grain relative`}
      >
        <StarField />
        {children}
        <SecretStar />
      </body>
    </html>
  );
}

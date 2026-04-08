import type {Metadata} from "next";
import {Outfit, Cormorant_Garamond} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mama Giulia — Infant Sleep Coach",
  description: "Certified infant sleep coaching for families. Holistic, gentle, evidence-based.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${outfit.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}

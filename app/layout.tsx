import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MotionEnhancer from "@/components/MotionEnhancer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WARIKOO Projects Ltd",
  description: "Experienced project support. Without the full-time overhead.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} antialiased`}>
      <body>{children}<MotionEnhancer /></body>
    </html>
  );
}

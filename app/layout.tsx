import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Jost as FontSans } from "next/font/google";
import React from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Product Feedback App",
  description: "An app where you can post feedback suggestions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-white-1 font-sans antialiase text-black ",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

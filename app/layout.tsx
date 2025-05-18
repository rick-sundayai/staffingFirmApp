import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "StaffingApp - Modern Recruiting & Staffing Solution",
  description: "Connect top talent with industry-leading companies using our AI-powered staffing and recruiting platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
          <Navigation />
          {children}
      </body>
    </html>
  );
}

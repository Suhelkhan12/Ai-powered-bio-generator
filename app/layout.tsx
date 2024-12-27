import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import MainWrapper from "@/components/mainwrapper/main-wrapper";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import { Toaster } from "sonner";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "AI-Powered Bio Generator for Any Role | Create Your Perfect Bio",
  description:
    "Generate professional and personalized bios tailored for different roles in seconds with our AI-powered bio generator. Perfect for resumes, social profiles, and more!",
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
          GeistMono.variable,
          GeistSans.variable,
          "font-geistMono min-h-screen"
        )}
      >
        <GridPattern
          width={60}
          height={60}
          x={-1}
          y={-1}
          className="-z-10 opacity-30"
        />
        <MainWrapper childrenItems={children} />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

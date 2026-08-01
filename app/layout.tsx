import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NebulaPaste",
  description: "Modern PasteBin built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white">

          <Navbar />

          {children}

          <Footer />

          <Toaster
            richColors
            position="top-right"
          />

        </body>
      </html>
    </ClerkProvider>
  );
}
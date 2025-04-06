import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/header/footer";
import SessionProvider from "./SessionProvider";
import { ThemeProvider } from "@/components/ThemeButton";
import ChatBox from "@/components/chatBox";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clip Curve",
  description: "Skyrocket Your YOUTUBE Growth, with our AI-powered video editing service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black dark:text-white relative bg-white dark:bg-black`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7FE] dark:from-[#1E1B29] via-[#F2E9FC] dark:via-[#2C2A3F] to-[#E8F2FE] dark:to-[#3A3750] -z-50 "></div>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider>
            <SessionProvider>
              <Navbar />
              {/* Floating Chat Button */}
              <ChatBox />
              {children}
              <Footer />
            </SessionProvider>
          </ThemeProvider>
        </Suspense>


      </body>
    </html>
  );
}

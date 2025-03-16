import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/header/footer";
import StarryBackground from "@/components/animations/star-background";
import CircleAnimation from "./test-video/page";
import SessionProvider from "./SessionProvider";


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
        <link href="https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-text`}
      >
        <StarryBackground />
        <SessionProvider>
          <Navbar />
          {/* Floating Chat Button */}
          <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 transition">
            Let&apos;s Chat!
          </div>
          {/* <section className="absolute top-0 right-0 left-0 translate-x w-full z-10 min-h-full"> */}
          {/* <CircleAnimation /> */}
          {/* </section> */}
          {children}
          <Footer />
        </SessionProvider>

      </body>
    </html>
  );
}

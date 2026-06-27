import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import clsx from "clsx";

const geist = localFont({
  src: [
    {
      path: "../public/fonts/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Geist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Geist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "../public/fonts/Geist-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-geist",
});

const beVietnamPro = localFont({
  src: [
    {
      path: "../public/fonts/BeVietnamPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BeVietnamPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BeVietnamPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BeVietnamPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Wave Equb – Transforming Equb For The Digital Age",
  description:
    "Save Together, Access Funds Early, And Manage Your Equb Anytime, Anywhere With Wave.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* Hero background — covers navbar + hero area */}
        <div
          className={clsx(
            "absolute top-0 left-0 right-0 h-[1000px] bg-center bg-cover",
            "bg-no-repeat pointer-events-none -z-10",
          )}
          style={{ backgroundImage: "url('/imgs/hero-bg.png')" }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

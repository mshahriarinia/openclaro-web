import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "OpenClaro — AI That Recovers Your Lost Revenue · $0 Upfront",
  description:
    "Missed calls, cold leads, and no-shows are recoverable revenue. OpenClaro's done-for-you AI services catch them and book them — $0 upfront, we earn a commission only on jobs we recover. Leave any time.",
  openGraph: {
    title: "OpenClaro — AI that recovers your lost revenue, free until it does",
    description:
      "Done-for-you AI services for businesses. $0 upfront — we earn a commission only on the jobs we recover. Backed by the Triple Guarantee.",
    type: "website",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='6.3' y='6.3' width='11.4' height='11.4' rx='1.5' transform='rotate(45 12 12)' fill='%230E6F4F'/%3E%3C/svg%3E",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

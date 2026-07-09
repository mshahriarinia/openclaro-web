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
  title: "OpenClaro — A Catalog of AI Services for Your Business · $0 Upfront",
  description:
    "OpenClaro is a growing catalog of AI services that take action inside your business — from missed-call recovery to review requests — $0 upfront, with a commission only on the results delivered. Leave any time.",
  openGraph: {
    title: "OpenClaro — A catalog of AI services, free until they pay off",
    description:
      "Done-for-you AI services for businesses — each one a self-contained piece you can pick up and embed. $0 upfront. Backed by the Triple Guarantee.",
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

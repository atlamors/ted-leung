import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ted Leung | Insurance as Hope.",
  description:
    "I’m Ted Leung, Principal Partner at Group 7 Insurance Brokers, Life & Wealth Division. Learn about my approach to insurance and connect with me.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${hankenGrotesk.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

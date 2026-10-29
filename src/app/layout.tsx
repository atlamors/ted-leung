import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ted Leung",
  description: "Personal website of Ted Leung.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

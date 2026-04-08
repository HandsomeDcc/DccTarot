import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mystic Tarot",
  description: "以原創視覺設計呈現的塔羅抽牌網站"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

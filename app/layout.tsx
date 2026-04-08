import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "罡之鍊金術師 — Celestial Luxe Tarot",
  description: "以原創視覺設計與儀式化互動呈現的塔羅抽牌體驗"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;600;700&family=Noto+Serif+TC:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

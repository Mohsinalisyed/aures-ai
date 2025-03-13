"use client";
import { fontBWGradual } from "./assets/fonts";
import "./globals.css";
import Providers from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${fontBWGradual.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

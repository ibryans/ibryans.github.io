import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Icon from '/public/me.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan Oliveira",
  description: "Um pouco sobre mim e sobre minhas experiências",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={Icon.src} type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Icon from '@/assets/avatar.webp'

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
    <html lang="en" className="dark scroll-smooth">
      <link rel="icon" href={Icon.src} type="image/webp" />
      <body className={`${inter.className} bg-white-900 dark:bg-black transition duration-500`}>{children}</body>
    </html>
  );
}

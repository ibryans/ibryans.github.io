import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Icon from '@/assets/avatar.webp'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryan Oliveira",
  description: "Um pouco sobre mim e sobre minhas experiências",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Aplica o tema antes da renderização para evitar o flash do tema errado
const themeScript = `(function () {
  var theme = null;
  try { theme = localStorage.getItem('theme'); } catch (e) {}
  var isDark = theme ? theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href={Icon.src} type="image/webp" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black transition duration-500`}>{children}</body>
    </html>
  );
}

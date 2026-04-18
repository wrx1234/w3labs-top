import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LangProvider } from "@/context/LangContext";
import { DialogProvider } from "@/context/DialogContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "W³ Labs | 链接人，链接 AI，链接下一个可能",
  description: "中国最活跃的 AI 产业落地社区。链接传统行业与 AI 技术团队，让每个懂行业的人都能用 AI 颠覆自己的领域。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LangProvider>
            <DialogProvider>
              {children}
            </DialogProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

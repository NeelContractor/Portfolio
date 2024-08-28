import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Space from "@/components/Space";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "neeeel.com",
    template: "%s | neeeel.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-8px fixed z-50 items-center gap-6px top-8 right-8">
          <Space />
        </div>
        {children}
      </body>
    </html>
  );
}

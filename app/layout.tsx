import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "KEL - Kel's Epic Library",
  description: "A site where you can find EPIC books recommended by Kel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} relative bg-slate-100`}>
        {children}
        </body>
    </html>
  );
}

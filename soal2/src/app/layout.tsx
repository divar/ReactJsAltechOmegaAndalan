import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altech Omega Andalan",
  description: "ERP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="wave-background"></div>
      <div className="wave-background-home"></div>
      <div className="small-circle"></div>
      <div className="large-circle"></div>
      <Navigation/>
      <div>
        {children}
      </div>
    </body>
    </html>
);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WagmiConfigProvider from "@/context/WagmiProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "simp1e's blog",
  description: "I am a frontend engineer,Here is my blog.",
  keywords: [
    "portfolio",
    "web developer",
    "web dev",
    "developer",
    "web3",
    "blockchain",
    "nextjs",
  ],
  authors: [
    {
      name: "simp1e",
      url: "https://github.com/SimpLe-L",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased h-screen`}
      >
        <WagmiConfigProvider>
          <Navbar />
          {children}
        </WagmiConfigProvider>
        <Toaster />
      </body>
    </html>
  );
}

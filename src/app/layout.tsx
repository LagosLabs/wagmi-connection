import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Web3Modal from "@/context/Web3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abiinchii",
  description: "The official Abiinchii DApp for foodies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Modal>
          {children}
        </Web3Modal>
      </body>
    </html>
  );
}

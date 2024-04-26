import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./components/container";

import Navbar from "./(CSR)/Navbar/Navbar";
import Footer from "../app/footer";
import SessionProvider from "./SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce App built with Next.js and MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Container>
            <Navbar />
            <main className="m-auto min-w-[360px] max-w-7xl p-4">
              {children}
            </main>
            <Footer />
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google"

const primary = Poppins({
  weight: ["100","200","300","400","500","600","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodem Limited",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primary.className} antialiased`}>
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

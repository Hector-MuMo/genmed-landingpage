import type { Metadata } from "next";
import "./globals.css";
import { roboto_slab } from "./ui/font";
import { Providers } from "./providers";
import Navigation from "./ui/navigation";

export const metadata: Metadata = {
  title: "GenMed App",
  description: "Generic landing page for the medical sector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto_slab.className} antialiased`}>
        <Providers>
          <Navigation/>
          {children}

        </Providers>
      </body>
    </html>
  );
}

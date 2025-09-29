import type { Metadata } from "next";
import "./globals.css";
import { roboto_slab } from "./ui/font";
import { Providers } from "./providers";
import Navigation from "./ui/navigation";
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: " %s | GenMed",
    default: "GenMed"
  }, 
  description: "Página muestra para ofrecer serevicios medicos genericos (Odontología, Psicología, Dermatología, etc.) y poder agendar citas directamente desde Google Calendar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto_slab.className} antialiased`}>
        <Script strategy="afterInteractive">
          {}
        </Script>
        <Providers>
          <Navigation/>
          {children}

        </Providers>
      </body>
    </html>
  );
}

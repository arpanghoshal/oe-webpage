import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export const metadata = {
  title: 'OperatingEquity.ai — Enabling Truth & Justice',
  description: 'Capital for ventures that advance transparency, fairness and justice',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>
          {children}
          {/* Calendly widget script */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="beforeInteractive"
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
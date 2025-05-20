import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export const metadata = {
  title: 'OperatingEquity.ai — Investing in Truth & Justice',
  description: 'Capital for ventures that advance transparency, fairness and justice',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Calendly widget script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
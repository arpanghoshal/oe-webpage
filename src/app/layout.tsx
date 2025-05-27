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
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 
            "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300",
          card: "rounded-2xl shadow-2xl",
          headerTitle: "text-2xl font-bold text-gray-900",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: "border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300",
          formFieldInput: "rounded-xl border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          footerActionLink: "text-blue-600 hover:text-blue-700 font-semibold"
        }
      }}
    >
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
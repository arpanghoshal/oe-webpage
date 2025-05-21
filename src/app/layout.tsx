import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'] });

export const metadata = {
  title: 'OperatingEquity.ai — Investing in Truth & Justice',
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
          <div className="absolute top-5 right-5 z-50 flex gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-truth">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-justice">Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
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
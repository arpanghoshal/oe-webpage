import Image from 'next/image';
import { SignInButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--truth-light)] to-[var(--light)]">
      <div className="text-center">
        <Image 
          src="/oe-logo.png" 
          alt="OperatingEquity.ai logo" 
          width={200} 
          height={200} 
          className="mx-auto mb-8"
        />
        <h1 className="text-3xl font-extrabold mb-8">
          <span className="text-gray-900 tracking-tight" style={{letterSpacing: '0.01em'}}>
            Operating<span className="text-[var(--truth)]">Equity</span>.<em className="not-italic font-normal italic">ai</em>
          </span>
        </h1>
        <SignInButton mode="modal">
          <button className="btn btn-truth text-lg px-8 py-3">
            Sign In
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
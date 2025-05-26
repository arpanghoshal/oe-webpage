import Image from 'next/image';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 animate-gradient-xy"></div>
      <div className="absolute top-6 right-6 flex gap-4 z-10">
        <SignInButton mode="modal">
          <button className="btn btn-truth">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="btn btn-justice">
            Sign Up
          </button>
        </SignUpButton>
      </div>
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10">
        <div className="text-center">
          <Image 
            src="/oe-logo.png" 
            alt="OperatingEquity.ai logo" 
            width={200} 
            height={200} 
            className="mx-auto mb-8"
          />
          <h1 className="text-3xl font-extrabold">
            <span className="text-gray-900 tracking-tight" style={{letterSpacing: '0.01em'}}>
              OperatingEquity.<em className="not-italic font-normal italic">ai</em>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
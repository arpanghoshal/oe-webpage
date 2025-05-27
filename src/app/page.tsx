'use client';

import Image from 'next/image';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleCardClick = async (destination: string) => {
    if (isSignedIn) {
      try {
        const response = await fetch('/api/generate-token');
        const { token } = await response.json();
        window.location.href = `${destination}?token=${token}`;
      } catch (error) {
        console.error('Error generating token:', error);
      }
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-xy"></div>
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10">
        <div className="text-center mb-12">
          <Image 
            src="/oe-logo.png" 
            alt="OperatingEquity.ai logo" 
            width={200} 
            height={200} 
            className="mx-auto mb-8"
          />
          <h1 className="text-3xl font-extrabold mb-8">
            <span className="text-gray-900 tracking-tight" style={{letterSpacing: '0.01em'}}>
              OperatingEquity.<em className="not-italic font-normal italic">ai</em>
            </span>
          </h1>
          <div className="flex gap-4 justify-center mb-12">
            <SignedOut>
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
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
        
        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <div 
            onClick={() => handleCardClick('https://civic.operatingequity.ai')}
            className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <Image 
              src="/civic-logo.png" 
              alt="Civic Software Foundation" 
              width={150} 
              height={60} 
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Civic Software Foundation</h3>
            <p className="text-gray-600">Building technology for the public good</p>
          </div>
          
          <div 
            onClick={() => handleCardClick('https://loveandlaw.operatingequity.ai')}
            className="bg-white/90 backdrop-blur rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <Image 
              src="/loveandlaw-logo.png" 
              alt="Love and Law" 
              width={150} 
              height={60} 
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Love and Law</h3>
            <p className="text-gray-600">Justice through compassion and legal excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
}
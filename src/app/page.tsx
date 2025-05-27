'use client';

import Image from 'next/image';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

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
      setShowSignInPrompt(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-xy"></div>
      
      {/* Sign In Prompt Modal */}
      {showSignInPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSignInPrompt(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all">
            <button 
              onClick={() => setShowSignInPrompt(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sign In Required</h3>
              <p className="text-sm text-gray-500 mb-6">
                Please sign in to access this application
              </p>
              
              <SignInButton mode="modal">
                <button className="w-full btn btn-truth mb-3">
                  Sign In
                </button>
              </SignInButton>
              
              <p className="text-xs text-gray-500">
                Don't have an account? 
                <SignUpButton mode="modal">
                  <button className="ml-1 text-blue-600 hover:text-blue-700 font-medium">
                    Sign up
                  </button>
                </SignUpButton>
              </p>
            </div>
          </div>
        </div>
      )}
      
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
            <h3 className="text-xl font-semibold mb-2">Civic</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}
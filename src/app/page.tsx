'use client';

import Image from 'next/image';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';
import CalendlyButton from '@/components/CalendlyButton';

export default function Home() {
  const { isSignedIn } = useAuth();
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
    <div className="min-h-screen relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 animate-gradient-subtle"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      {/* Sign In Prompt Modal */}
      {showSignInPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowSignInPrompt(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full transform transition-all animate-in slide-in-from-bottom duration-300">
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
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign In Required</h3>
              <p className="text-base text-gray-600 mb-8">
                Please sign in to access this application
              </p>
              
              <SignInButton mode="modal">
                <button className="w-full relative group px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-xl hover:scale-[1.02] mb-4">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Sign In to Continue
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </SignInButton>
              
              <p className="text-xs text-gray-500">
                Don&apos;t have an account? 
                <SignUpButton mode="modal">
                  <button className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold transition-all duration-200">
                    Sign up
                  </button>
                </SignUpButton>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-4 py-16">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <Image 
              src="/oe-logo.png" 
              alt="OperatingEquity.ai logo" 
              width={180} 
              height={180} 
              className="relative z-10 mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              OperatingEquity<span className="text-blue-600">.</span><em className="not-italic font-light">ai</em>
            </span>
          </h1>
          <div className="flex gap-4 justify-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="relative group px-10 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-2xl hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </span>
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="relative group px-10 py-4 font-semibold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-200 rounded-2xl hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white hover:shadow-2xl hover:scale-[1.02]">
                  <span className="relative z-10">Get Started</span>
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Welcome back!</span>
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12 shadow-lg"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
        
        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full mt-16">
          <div 
            onClick={() => handleCardClick('https://civic.operatingequity.ai')}
            onMouseEnter={() => setHoveredCard('civic')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-10">
              <div className="flex items-center justify-between mb-6">
                <Image 
                  src="/civic-logo.png" 
                  alt="Civic Software Foundation" 
                  width={160} 
                  height={64} 
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center transform transition-all duration-300 ${hoveredCard === 'civic' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Civic</h3>
            </div>
          </div>
          
          <div 
            onClick={() => handleCardClick('https://loveandlaw.operatingequity.ai')}
            onMouseEnter={() => setHoveredCard('loveandlaw')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-[1.02] animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: '400ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-10">
              <div className="flex items-center justify-between mb-6">
                <Image 
                  src="/loveandlaw-logo.png" 
                  alt="Love and Law" 
                  width={160} 
                  height={64} 
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center transform transition-all duration-300 ${hoveredCard === 'loveandlaw' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Love and Law</h3>
            </div>
          </div>
        </div>
        
        {/* Schedule Meeting Section */}
        <div className="mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '600ms' }}>
          <CalendlyButton url="https://calendly.com/halsey2005/45-minute-meeting">
            Schedule a 45-Minute Meeting
          </CalendlyButton>
        </div>
      </div>
    </div>
  );
}
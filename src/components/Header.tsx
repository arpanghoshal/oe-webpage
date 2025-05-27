'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      ref.current.classList.toggle('shadow-lg', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur transition-shadow"
    >
      <nav className="container mx-auto flex items-center justify-between py-5 px-5 max-w-screen-xl">
        <Link href="#" className="flex items-center gap-3 text-xl font-extrabold">
          <Image src="/oe-logo-white.jpeg" alt="OperatingEquity.ai logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-gray-900 tracking-tight" style={{letterSpacing: '0.01em'}}>Operating<span className="text-[var(--truth)]">Equity</span>.<em className="not-italic font-normal italic">ai</em></span>
        </Link>

        <ul className="hidden gap-8 md:flex">
          {['Mission','Companies','Book Time','About'].map((label) => (
            <li key={label}>
              <a
                href={'#' + label.toLowerCase().replace(' ','')}
                className="font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[var(--truth)] after:transition-[width] hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <SignedOut>
          <SignInButton 
            mode="modal" 
            forceRedirectUrl="/portfolio"
            signUpForceRedirectUrl="/portfolio"
          >
            <button className="btn btn-truth">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="font-medium hover:text-[var(--truth)]">
              Portfolio
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </nav>
    </header>
  );
}
'use client';

import { useCallback } from 'react';

interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}

export default function CalendlyButton(
  { url, children }: { url: string; children: React.ReactNode },
) {
  const open = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      } else {
        console.error('Calendly widget not loaded');
        // Fallback to direct URL open
        window.open(url, '_blank');
      }
    },
    [url],
  );

  return (
    <button 
      onClick={open} 
      className="relative group px-8 py-3 font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </span>
      <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    </button>
  );
}
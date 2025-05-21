'use client';

import { useCallback, useEffect } from 'react';

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
    <a href="#" onClick={open} className="btn btn-justice">
      {children}
    </a>
  );
}
'use client';

import { useCallback } from 'react';

export default function CalendlyButton(
  { url, children }: { url: string; children: React.ReactNode },
) {
  const open = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      // @ts-expect-error – calendly script attaches global
      window.Calendly?.initPopupWidget?.({ url });
    },
    [url],
  );

  return (
    <a href="#" onClick={open} className="btn btn-justice">
      {children}
    </a>
  );
}
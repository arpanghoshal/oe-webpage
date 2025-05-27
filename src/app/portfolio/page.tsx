'use client';

import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function PortfolioPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isSignedIn) {
    redirect('/');
  }

  const portfolioSites = [
    {
      id: 'civic',
      name: 'Civic Operating Equity',
      description: 'Empowering communities through civic engagement and equity-driven solutions',
      url: 'https://civic.operatingequity.ai/',
      logo: '/civic-logo.png',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBg: 'hover:bg-blue-100'
    },
    {
      id: 'loveandlaw',
      name: 'Love and Law',
      description: 'Bridging hearts and justice through compassionate legal services',
      url: 'https://loveandlaw.operatingequity.ai/',
      logo: '/loveandlaw-logo.png',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      hoverBg: 'hover:bg-pink-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Operating Equity Portfolio
          </h1>
          <p className="text-xl text-gray-600">
            Select a platform to continue
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioSites.map((site) => (
            <a
              key={site.id}
              href={site.url}
              className={`block p-8 rounded-lg border-2 ${site.borderColor} ${site.bgColor} ${site.hoverBg} transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 relative mb-6">
                  <Image
                    src={site.logo}
                    alt={`${site.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {site.name}
                </h2>
                <p className="text-gray-600">
                  {site.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
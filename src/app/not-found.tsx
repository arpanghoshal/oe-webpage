import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-truth">
        Return Home
      </Link>
    </div>
  );
} 
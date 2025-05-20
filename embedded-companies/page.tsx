import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function EmbeddedCompanies() {
  return (
    <div className="py-24 px-4 max-w-5xl mx-auto">
      <SignedIn>
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Companies</h2>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Civic</h3>
            <iframe
              src="https://civic.operatingequity.ai"
              title="Civic"
              className="w-full min-h-[600px] rounded-xl border border-slate-400 shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">LoveAndLaw</h3>
            <iframe
              src="https://loveandlaw.operatingequity.ai"
              title="LoveAndLaw"
              className="w-full min-h-[600px] rounded-xl border border-slate-400 shadow-lg"
            />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center mt-12">
          <p className="mb-4 text-lg">You must be signed in to view this page.</p>
          <SignInButton />
        </div>
      </SignedOut>
    </div>
  );
} 
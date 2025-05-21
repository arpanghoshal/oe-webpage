import Image from 'next/image';
import Header from '@/components/Header';
import CalendlyButton from '@/components/CalendlyButton';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="hero"
        className="pt-40 pb-28 bg-[radial-gradient(circle_farthest-side_at_top_left,var(--truth-light),var(--light)_65%)]"
      >
        <div className="container mx-auto grid gap-16 md:grid-cols-2 px-5 max-w-screen-xl">
          <div>
            <h1 className="mb-5 text-4xl md:text-5xl font-extrabold leading-tight">
              Invest in <span className="text-[var(--justice)]">Truth</span> &amp;{' '}
              <span className="text-[var(--justice)]">Justice</span>
            </h1>
            <p className="mb-8 text-lg text-[var(--gray)] max-w-prose">
              Founded by entrepreneur <strong><a href="https://www.linkedin.com/in/halseyminor/" target="_blank" rel="noopener noreferrer">Halsey Minor</a></strong> (CNET, Salesforce), OperatingEquity.ai invests in ventures that promote transparency, fairness, and justice.
            </p>
            <a href="#companies" className="btn btn-truth">
              Explore Opportunities&nbsp;<i className="fas fa-arrow-right" />
            </a>
          </div>

          <Image
            src="/abc123.png"
            width={700}
            height={500}
            alt="Scales of justice symbolizing truth and fairness"
            className="rounded-[var(--radius)] shadow-xl"
          />
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="mission" className="py-24">
        <div className="container mx-auto px-5 max-w-screen-xl">
          <h2 className="text-center text-3xl font-semibold mb-12">Our Manifesto</h2>

          <div className="grid gap-10 sm:grid-cols-3">
            {[
              ['fas fa-scale-balanced','Justice First','Every portfolio company advances fairness—whether in courts, media or everyday life.'],
              ['fas fa-eye','Radical Transparency','We publish impact metrics and require verifiable reporting from founders.'],
              ['fas fa-user-shield','Truth as a Service','From content integrity to affordable legal help, truth underpins our products.'],
            ].map(([icon,title,desc]) => (
              <div
                key={title}
                className="bg-[var(--gray-light)] p-8 rounded-[var(--radius)] text-center shadow-md hover:-translate-y-2 hover:shadow-lg transition"
              >
                <i className={`${icon} text-3xl text-[var(--accent)] mb-4`} />
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[var(--gray)]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES & EMBEDDED */}
      <section id="companies" className="py-24">
        <div className="container mx-auto px-5 max-w-screen-xl">
          <h2 className="text-center text-3xl font-semibold mb-12">Our Companies & Investments</h2>

          <div className="grid gap-10 md:grid-cols-2 mb-16">
            {[{
              img: '/civic-logo.png',
              tags: ['Media Integrity','Web'],
              title: 'Civic',
              body: 'The internet\'s trust badge. Videos, articles & posts bearing the Civic Seal have passed rigorous fact-checks and provenance tracing—giving billions confidence in what they read & watch.',
            },
            {
              img: '/loveandlaw-logo.png',
              tags: ['LegalTech','Family Law'],
              title: 'LoveAndLaw',
              body: 'A compassionate platform matching families with vetted attorneys, automating filings, and slashing costs so justice stays within reach of every household.',
            }].map((c) => (
              <div
                key={c.title}
                className="rounded-[var(--radius)] overflow-hidden border border-[var(--gray-light)] shadow-lg hover:-translate-y-3 transition-[transform] duration-500 cubic-bezier-[.175,.885,.32,1.275]"
              >
                <div className="w-full h-52 flex items-center justify-center bg-white">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={300}
                    height={100}
                    className="object-contain max-h-40"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-3">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-block bg-[var(--truth-light)] text-[var(--truth-dark)] rounded-full px-3 py-1 text-xs font-semibold mr-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{c.title}</h3>
                  <p className="text-[var(--gray)] mb-4">{c.body}</p>
                  <div className="flex gap-3">
                    <a href="#booking" className="btn btn-truth">Talk to Us</a>
                    <a href="#" className="btn btn-outline-truth">View Pitch Deck&nbsp;<i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {[['Civic','https://civic.operatingequity.ai'],['LoveAndLaw','https://loveandlaw.operatingequity.ai']].map(([name,src]) => (
            <div key={name} className="mb-16">
              <h3 className="text-xl font-semibold mb-4">{name}</h3>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  src={src}
                  title={name}
                  className="absolute top-0 left-0 w-full h-full rounded-[var(--radius)] border border-[var(--gray)] shadow-lg"
                />
                <SignedOut>
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-[var(--radius)]">
                    <h4 className="text-xl font-bold mb-4">Sign in to view this demo</h4>
                    <p className="text-[var(--gray)] mb-6 text-center max-w-md px-4">
                      You need to be signed in to access the {name} demo. Please sign in or sign up to continue.
                    </p>
                    <div className="flex gap-4">
                      <SignInButton mode="modal">
                        <button className="btn btn-truth">Sign In</button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="btn btn-justice">Sign Up</button>
                      </SignUpButton>
                    </div>
                  </div>
                </SignedOut>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALENDLY BOOKING */}
      <section id="booking" className="py-24 bg-gradient-to-br from-[var(--truth-light)] to-[var(--justice-light)]">
        <div className="container mx-auto max-w-screen-md px-5">
          <h2 className="text-center text-3xl font-semibold mb-12">Book Time with Halsey Minor</h2>

          <div className="grid gap-10 sm:grid-cols-3">
            {[
              ['30-Minute Call','https://calendly.com/halsey2005/30min'],
              ['45-Minute Call','https://calendly.com/halsey2005/45-minute-meeting'],
              ['1-Hour Meeting','https://calendly.com/halsey2005/1-hour-meeting'],
            ].map(([label,url]) => (
              <div
                key={label}
                className="bg-white p-8 text-center rounded-[var(--radius)] shadow-lg hover:-translate-y-2 transition"
              >
                <h4 className="font-semibold mb-4 text-lg">{label}</h4>
                <CalendlyButton url={url}>Schedule&nbsp;{label.split('-')[0]}</CalendlyButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 text-center">
        <div className="container mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-[var(--gray)]">
            OperatingEquity.ai was founded by a team of technologists and impact
            investors dedicated to the belief that capital can be a force for
            positive change. Our portfolio companies advance truth and justice
            while generating market-rate returns.
          </p>
          <a href="#booking" className="btn btn-justice mt-8">
            Join Our Mission&nbsp;<i className="fas fa-heart" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--dark)] text-white py-12">
        <div className="container mx-auto grid gap-10 sm:grid-cols-3 px-5 max-w-screen-xl">
          <div>
            <h3 className="font-semibold mb-3">OperatingEquity.ai</h3>
            <p className="text-sm text-[var(--gray-light)]">
              Investing in truth, justice, and transparency for a better world.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-[var(--gray-light)] text-sm">
              <li><a href="#booking">Contact Us</a></li>
              <li><a href="#">Investor Portal</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-linkedin" /></a>
              <a href="#"><i className="fab fa-medium" /></a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-[var(--gray-light)]">
          © 2025 OperatingEquity.ai. All rights reserved.
        </p>
      </footer>
    </>
  );
}
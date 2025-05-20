import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="hero py-36 bg-gradient-to-br from-blue-100 to-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
              Invest in <span className="text-emerald-600">Truth</span> &amp; <span className="text-emerald-600">Justice</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-xl">
              Backed by legendary entrepreneur <strong>Halsey Minor</strong> (CNET, Salesforce), OperatingEquity.ai channels capital into ventures that make the world more transparent, fair and just.
            </p>
            <Link href="#companies" className="btn btn-truth inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition mb-4">
              Explore Opportunities <span className="fa fa-arrow-right" />
            </Link>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1509228627150-72ae9ae6848c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg5OTR8MHwxfHNlYXJjaHwzfHxzY2FsZXMlMjBvZiUyMGp1c3RpY2V8ZW58MHx8fHwxNzE2MjAxNTQ0&ixlib=rb-4.0.3&q=80&w=700" alt="Scales of justice symbolizing truth and fairness" className="rounded-xl shadow-lg w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manifesto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-100 rounded-xl p-8 text-center shadow hover:-translate-y-2 transition">
              <i className="fas fa-scale-balanced text-3xl text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Justice First</h3>
              <p>Every portfolio company advances fairness—whether in courts, media or everyday life.</p>
            </div>
            <div className="bg-slate-100 rounded-xl p-8 text-center shadow hover:-translate-y-2 transition">
              <i className="fas fa-eye text-3xl text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Radical Transparency</h3>
              <p>We publish impact metrics and require verifiable reporting from founders.</p>
            </div>
            <div className="bg-slate-100 rounded-xl p-8 text-center shadow hover:-translate-y-2 transition">
              <i className="fas fa-user-shield text-3xl text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">Truth as a Service</h3>
              <p>From content integrity to affordable legal help, truth underpins our products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section id="companies" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Active Investments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-3 transition">
              <img src="https://images.unsplash.com/photo-1598991405175-14edcdef7211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg5OTR8MHwxfHNlYXJjaHwyfHxuZXdzJTIwbWVkaWF8ZW58MHx8fHwxNzE2MjAxNTU0&ixlib=rb-4.0.3&q=80&w=900" alt="Civic — media integrity" className="w-full h-52 object-cover" />
              <div className="p-8">
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1 mr-2">Media Integrity</span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold rounded-full px-3 py-1">Web</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Civic</h3>
                <p className="text-slate-500 mb-4">The internet's trust badge. Videos, articles & posts bearing the <strong>Civic Seal</strong> have passed rigorous fact-checks and provenance tracing—giving billions confidence in what they read & watch.</p>
                <Link href="/embedded-companies" className="btn btn-truth mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition">Talk to Us</Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-3 transition">
              <img src="https://images.unsplash.com/photo-1565071167873-3e04e02dacf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg5OTR8MHwxfHNlYXJjaHwzfHxwYXJlbnRzJTIwd2l0aCUyMGNoaWxkfGVufDB8fHx8MTcxNjIwMTU2MQ&ixlib=rb-4.0.3&q=80&w=900" alt="LoveAndLaw platform" className="w-full h-52 object-cover" />
              <div className="p-8">
                <div className="mb-2">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mr-2">LegalTech</span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1">Family Law</span>
                </div>
                <h3 className="font-bold text-xl mb-2">LoveAndLaw</h3>
                <p className="text-slate-500 mb-4">A compassionate platform matching families with vetted attorneys, automating filings, and slashing costs by up to 70%—so justice stays within reach of every household.</p>
                <Link href="/embedded-companies" className="btn btn-truth mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition">Talk to Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 bg-gradient-to-br from-blue-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Book Time with Halsey Minor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow p-8 text-center hover:-translate-y-2 transition">
              <h4 className="font-semibold text-lg mb-4">30‑Minute Call</h4>
              <a href="https://calendly.com/halsey2005/30min" target="_blank" rel="noopener" className="btn btn-justice bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition">Schedule 30&nbsp;min</a>
            </div>
            <div className="bg-white rounded-xl shadow p-8 text-center hover:-translate-y-2 transition">
              <h4 className="font-semibold text-lg mb-4">45‑Minute Call</h4>
              <a href="https://calendly.com/halsey2005/45-minute-meeting" target="_blank" rel="noopener" className="btn btn-justice bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition">Schedule 45&nbsp;min</a>
            </div>
            <div className="bg-white rounded-xl shadow p-8 text-center hover:-translate-y-2 transition">
              <h4 className="font-semibold text-lg mb-4">1‑Hour Meeting</h4>
              <a href="https://calendly.com/halsey2005/1-hour-meeting" target="_blank" rel="noopener" className="btn btn-justice bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition">Schedule 60&nbsp;min</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="max-w-2xl mx-auto text-slate-500 mb-8">
            OperatingEquity.ai was founded by a team of technologists and impact investors dedicated to the belief that capital can be a force for positive change. Our portfolio companies advance truth and justice while generating market-rate returns.
          </p>
          <Link href="#booking" className="btn btn-justice mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Join Our Mission <span className="fa fa-heart" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">OperatingEquity.ai</h3>
            <p className="text-slate-300 text-sm">Investing in truth, justice, and transparency for a better world.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li><Link href="#booking">Contact Us</Link></li>
              <li><a href="#">Investor Portal</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white text-xl"><i className="fab fa-twitter" /></a>
              <a href="#" className="text-white text-xl"><i className="fab fa-linkedin" /></a>
              <a href="#" className="text-white text-xl"><i className="fab fa-medium" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>&copy; 2025 OperatingEquity.ai. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 
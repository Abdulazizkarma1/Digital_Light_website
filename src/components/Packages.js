import { Check, ArrowRight } from "lucide-react";

const Packages = () => (
  <section id="packages" className="max-w-6xl mx-auto px-4 py-16">
    <h3 className="text-3xl md:text-4xl font-bold text-center">Simple, clear packages</h3>
    <p className="text-center text-slate-6 00 mt-3">Start small. Grow fast. Prices in Ghana Cedis (GHS).</p>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {[{
        name: "Basic",
        price: "₵200",
        highlight: "Google Business Setup",
        features: ["Profile claim & verification", "Photos (3–5)", "Hours, services, call button", "Review prompts (QR)"]
      }, {
        name: "Standard",
        price: "₵500",
        highlight: "Setup + 1‑page website",
        features: ["Everything in Basic", "Custom 1‑page site", "Map & WhatsApp chat", "1 month support"]
      }, {
        name: "Premium",
        price: "₵800+",
        highlight: "Website + Social + Strategy",
        features: ["Everything in Standard", "Facebook/Instagram pages", "Content calendar (4 weeks)", "Photo session (optional)"]
      }].map((p, i) => (
        <div key={i} className={`rounded-2xl p-6 shadow-sm ring-1 ${i===1? 'bg-blue-600 text-white ring-blue-500' : 'bg-white ring-slate-200'}`}>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">{p.name}</p>
            {i===1 && <span className="text-xs px-2 py-1 rounded-full bg-white/20">Popular</span>}
          </div>
          <p className={`mt-2 text-3xl font-extrabold ${i===1? 'text-white' : 'text-slate-800'}`}>{p.price}</p>
          <p className={`text-sm mt-1 ${i===1? 'text-blue-50' : 'text-slate-500'}`}>{p.highlight}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {p.features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/>{f}</li>
            ))}
          </ul>
          <a href="https://wa.me/233506063217" className={`mt-6 inline-flex items-center gap-2 w-full justify-center px-4 py-3 rounded-xl ${i===1? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>Get Started <ArrowRight className="h-5 w-5"/></a>
        </div>
      ))}
    </div>
  </section>
);
export default Packages;

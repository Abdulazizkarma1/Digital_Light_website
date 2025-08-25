import { MapPin, Camera, Star, Globe, Rocket, Check } from "lucide-react";

const Features = () => (
  <section id="features" className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-center">Everything you need to be discoverable</h2>
    <p className="text-center text-slate-600 mt-3">From Google Business to a clean one‑page website and review strategy.</p>
    <div className="mt-10 grid md:grid-cols-3 gap-6">
      {[
        { icon: MapPin, title: "Google Business Profile", desc: "Setup & optimization so you show up in 'near me' searches." },
        { icon: Camera, title: "Authentic Photos", desc: "Crisp storefront & product photos to build trust." },
        { icon: Star, title: "Review Boost", desc: "Simple scripts & QR cards to collect 5-star reviews." },
        { icon: Globe, title: "1‑Page Website", desc: "Fast, mobile‑friendly page with your essentials." },
        { icon: Rocket, title: "Visibility Playbook", desc: "Practical steps to rank higher than competitors." },
        { icon: Check, title: "Done‑For‑You", desc: "We set it up. You run your business." },
      ].map((f, i) => (
        <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <f.icon className="h-6 w-6" />
          <p className="mt-3 font-semibold">{f.title}</p>
          <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Features;

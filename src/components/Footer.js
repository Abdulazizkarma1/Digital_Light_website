import { MessageCircle, Phone, Globe } from "lucide-react";

const Footer = () => (
  <footer className="py-10">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
      <p>© {new Date().getFullYear()} Digital Light — Helping Tamale businesses shine online.</p>
      <div className="flex items-center gap-4">
        <a href="https://wa.me/233506063217" className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4"/> WhatsApp</a>
        <a href="tel:+233506063217" className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> 050 606 3217</a>
        <a href="#!" className="inline-flex items-center gap-2"><Globe className="h-4 w-4"/> Tamale, GH</a>
      </div>
    </div>
  </footer>
);
export default Footer;

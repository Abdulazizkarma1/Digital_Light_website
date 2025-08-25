import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";

const Header = () => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-2xl bg-blue-600 grid place-items-center text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <p className="font-semibold">Digital Light</p>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#packages" className="hover:text-blue-600">Packages</a>
        <a href="#process" className="hover:text-blue-600">Process</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
        <a href="https://wa.me/233506063217" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2">
          <MessageCircle className="h-4 w-4"/>WhatsApp
        </a>
      </nav>
    </div>
  </header>
);
export default Header;

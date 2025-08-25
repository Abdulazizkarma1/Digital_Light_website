import React, { useState } from "react";
import { MessageCircle, Phone, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">Ready to be found?</h3>
          <p className="mt-3 text-blue-100">Call/WhatsApp: <span className="font-semibold">050 606 3217</span> • Tamale, Ghana</p>
          <div className="mt-6 flex gap-3">
            <a href="https://wa.me/233506063217" className="px-5 py-3 rounded-2xl bg-white text-blue-700 inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5"/> Chat on WhatsApp
            </a>
            <a href="tel:+233506063217" className="px-5 py-3 rounded-2xl bg-blue-600/40 border border-white/30 inline-flex items-center gap-2">
              <Phone className="h-5 w-5"/> Call now
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-blue-100">
            <Facebook className="h-5 w-5"/>
            <Instagram className="h-5 w-5"/>
            <span className="text-xs">@AdSalBizSolutions</span>
          </div>
        </div>
        <form onSubmit={(e)=>{e.preventDefault(); alert(`Thanks! We'll contact you at ${email}`);}} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
          <label className="text-sm text-blue-100">Get a free profile audit link in your inbox</label>
          <div className="mt-2 flex gap-2">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-800 outline-none" />
            <button className="px-4 py-3 rounded-xl bg-white text-blue-700 font-medium">Send</button>
          </div>
          <p className="text-xs text-blue-100 mt-2">No spam. We'll review your current visibility and share the quickest wins.</p>
        </form>
      </div>
    </section>
  );
};
export default Contact;

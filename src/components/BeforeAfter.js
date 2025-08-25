import { Check } from "lucide-react";
import ProfileCard from './ProfileCard';

const BeforeAfter = () => (
  <section className="bg-white/60 border-y border-slate-200/70">
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold">From invisible to visible</h3>
        <p className="mt-3 text-slate-600">We clean up your online footprint so customers can actually find and trust you. Here's a sample improvement of a local profile.</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/> Accurate hours & location pinned correctly</li>
          <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/> Real storefront photos + product highlights</li>
          <li className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5"/> Review strategy and reply templates</li>
        </ul>
      </div>
      <div className="grid md:justify-end">
        <ProfileCard />
      </div>
    </div>
  </section>
);
export default BeforeAfter;

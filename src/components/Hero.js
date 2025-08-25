import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import MapIllustration from './MapIllustration';
import ProfileCard from './ProfileCard';

const Hero = () => (
  <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Bring Your Business to the <span className="text-blue-700">Digital Light</span>
      </h1>
      <p className="mt-5 text-lg text-slate-600">
        Helping Tamale businesses get found on Google—clean profiles, great photos, accurate hours, real reviews, and simple websites that convert.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="https://wa.me/233506063217" className="px-5 py-3 rounded-2xl bg-blue-600 text-white shadow hover:shadow-md hover:bg-blue-700 inline-flex items-center gap-2">
          <Phone className="h-5 w-5"/> Chat on WhatsApp
        </a>
        <a href="#packages" className="px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 inline-flex items-center gap-2">
          View Packages <ArrowRight className="h-5 w-5"/>
        </a>
      </div>
      <div className="mt-6 text-sm text-slate-500 flex items-center gap-3">
        <ShieldCheck className="h-4 w-4"/> Tamale • Northern Region • Ghana
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-6">
      <MapIllustration />
      <div className="flex justify-center">
        <ProfileCard />
      </div>
    </motion.div>
  </section>
);
export default Hero;

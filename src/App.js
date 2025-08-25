import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import BeforeAfter from "./components/BeforeAfter";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function DigitalLightLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-indigo-50 text-slate-800">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <BeforeAfter />
      <Packages />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

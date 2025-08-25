import React, { useState } from "react";
import { MessageCircle, Phone, Facebook, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        user_email: email,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        message: `New profile audit request from: ${email}`,
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setEmail(""); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
          <label className="text-sm text-blue-100">Get a free profile audit link in your inbox</label>
          <div className="mt-2 flex gap-2">
            <input 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              type="email" 
              required 
              placeholder="your@email.com" 
              className="flex-1 px-4 py-3 rounded-xl bg-white text-slate-800 outline-none" 
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-3 rounded-xl bg-white text-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="text-green-300 text-sm mt-2">✓ Email sent successfully! We'll contact you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-300 text-sm mt-2">✗ Failed to send email. Please try again.</p>
          )}
          
          <p className="text-xs text-blue-100 mt-2">No spam. We'll review your current visibility and share the quickest wins.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;

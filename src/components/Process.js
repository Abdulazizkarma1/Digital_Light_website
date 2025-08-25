const Process = () => (
  <section id="process" className="bg-white/60 border-y border-slate-200/70">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold text-center">How it works</h3>
      <div className="mt-10 grid md:grid-cols-4 gap-6 text-sm">
        {[
          { step: "1", title: "Quick chat", desc: "We understand your business & goals (10 mins)." },
          { step: "2", title: "On‑site visit", desc: "We capture photos and confirm pin location." },
          { step: "3", title: "Setup & verify", desc: "Profile cleanup + mini‑site built." },
          { step: "4", title: "Launch & reviews", desc: "Go live, collect 5★ reviews, track calls." },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center font-bold">{s.step}</div>
            <p className="mt-3 font-semibold">{s.title}</p>
            <p className="text-slate-600 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Process;

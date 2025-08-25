const Testimonials = () => (
  <section className="max-w-6xl mx-auto px-4 py-16">
    <h3 className="text-3xl font-bold text-center">What local owners say</h3>
    <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
      {[
        { name: "A. Yakubu", role: "Pharmacy Owner", quote: "Customers now call directly from Google. Setup was fast and clean." },
        { name: "S. Rahama", role: "Boutique", quote: "He pinned our exact location and added photos. Sales improved within a week." },
        { name: "K. Musah", role: "Rice Joint", quote: "People find us when they search 'best waakye Tamale'. Worth it!" },
      ].map((t, i) => (
        <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-100" />
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </div>
          <p className="mt-3 text-slate-700">"{t.quote}"</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;

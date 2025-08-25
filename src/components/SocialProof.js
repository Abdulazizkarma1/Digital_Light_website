const SocialProof = () => (
  <section className="py-6">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Local Searches / month", value: "1,000+" },
          { label: "Typical Profile Views in 90 days", value: "3k–10k" },
          { label: "Average Rating Target", value: "4.6★" },
        ].map((stat, i) => (
          <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default SocialProof;

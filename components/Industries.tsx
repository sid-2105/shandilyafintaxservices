const INDUSTRIES = [
  { code: "01", name: "Manufacturing" },
  { code: "02", name: "IT & SaaS" },
  { code: "03", name: "Real Estate & Construction" },
  { code: "04", name: "Healthcare" },
  { code: "05", name: "Retail & E-commerce" },
  { code: "06", name: "NBFC & Financial Services" },
  { code: "07", name: "Import / Export Trading" },
  { code: "08", name: "Professional Services" },
];

export default function Industries() {
  return (
    <section id="industries" className="section py-24 md:py-32 bg-paper-dim/40">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">Industries We Serve</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-xl">
              Sector knowledge, not just software fluency.
            </h2>
          </div>
          <p className="text-slate max-w-sm leading-relaxed">
            Compliance obligations differ by sector. We staff each mandate
            with advisors who already speak its accounting vocabulary.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.code}
              className="bg-paper p-7 hover:bg-emerald hover:text-paper transition-colors duration-200 group"
            >
              <span className="font-mono text-xs text-brass-dark group-hover:text-brass-light tracking-widest2">
                {ind.code}
              </span>
              <p className="font-display text-lg mt-3 leading-snug">{ind.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Fintax rebuilt our books ahead of a Series B audit in six weeks flat. The data room questions our investors raised were already answered in the working papers.",
    name: "Aditi Rao",
    role: "CFO, a B2B SaaS company",
  },
  {
    quote:
      "Our parent company reports under IFRS and we file locally under Ind AS. Fintax is the only advisor we've used who moves between both without translation errors.",
    name: "Marcus Lindqvist",
    role: "Finance Director, manufacturing group",
  },
  {
    quote:
      "GST notices used to eat a week of our time every quarter. They now get resolved before we even see them land in our inbox.",
    name: "Priya Menon",
    role: "Founder, D2C retail brand",
  },
];

export default function Testimonials() {
  return (
    <section className="section py-24 md:py-32 bg-paper-dim/40">
      <div className="section-inner">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">Client Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Statements from the people who sign off on our work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-paper p-8 flex flex-col justify-between">
              <blockquote className="font-display text-lg text-ink leading-snug italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-paper-line">
                <div className="font-body text-sm font-semibold text-ink">{t.name}</div>
                <div className="ledger-code text-slate mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

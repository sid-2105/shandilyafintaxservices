const STEPS = [
  {
    entry: "Entry 01",
    title: "Discovery & document review",
    desc: "We review your existing books, prior filings and reporting obligations to map exactly where things stand.",
  },
  {
    entry: "Entry 02",
    title: "Scope & compliance calendar",
    desc: "A written engagement scope and a shared filing calendar, so deadlines are visible to both sides from day one.",
  },
  {
    entry: "Entry 03",
    title: "Ledger setup & migration",
    desc: "Chart of accounts, opening balances and controls are configured or migrated before any live processing begins.",
  },
  {
    entry: "Entry 04",
    title: "Ongoing processing & review",
    desc: "Monthly bookkeeping, reconciliations and tax working papers, reviewed by a senior advisor before they reach you.",
  },
  {
    entry: "Entry 05",
    title: "Filing, reporting & close-out",
    desc: "Returns filed, statements issued, and a plain-language summary delivered — nothing left for you to interpret alone.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section py-24 md:py-32 bg-paper">
      <div className="section-inner">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            Five entries, posted in order, every engagement.
          </h2>
        </div>

        <div className="border-t border-ink/15">
          {STEPS.map((step, i) => (
            <div
              key={step.entry}
              className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-9 border-b border-ink/15"
            >
              <div className="flex items-baseline gap-4 md:block">
                <span className="font-mono text-xs text-brass-dark tracking-widest2">
                  {step.entry}
                </span>
                <span className="md:hidden font-mono text-xs text-slate">
                  {String(i + 1).padStart(2, "0")}/05
                </span>
              </div>
              <div className="max-w-2xl">
                <h3 className="font-display text-xl md:text-2xl text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Counter from "./Counter";

const STATEMENT_ROWS = [
  { label: "Entities under active mandate", value: 180, suffix: "+" },
  { label: "Statutory filings closed, FY25", value: 4200, suffix: "+" },
  { label: "Jurisdictions covered", value: 14, suffix: "" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="absolute inset-0 bg-ledger opacity-70 pointer-events-none" />
      <div className="section relative">
        <div className="section-inner grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end">
          <div className="animate-fade-up">
            <p className="eyebrow mb-6">Chartered Advisory &nbsp;·&nbsp; IFRS &amp; Tax Compliance</p>
            <h1 className="text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.06] font-medium max-w-2xl">
              Financial clarity,
              <br />
              entered and reconciled.
            </h1>
            <p className="mt-7 text-slate text-base md:text-lg max-w-lg leading-relaxed">
              Shandilya Fintax Services LLP keeps your books, your filings and your reporting
              standards in balance — from IFRS conversions to GST returns —
              so every number you sign off on is one you can stand behind.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Book a Consultation
              </a>
              <a href="#services" className="btn-secondary">
                View Our Services
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:150ms] opacity-0">
            <div className="border border-ink/15 bg-white/60 backdrop-blur-sm shadow-[0_1px_0_rgba(14,27,44,0.05)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-ink/15">
                <span className="ledger-code text-ink/70">Statement of Practice</span>
                <span className="ledger-code text-brass-dark">FY 2025–26</span>
              </div>
              <div>
                {STATEMENT_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-baseline justify-between px-6 py-5 ${
                      i % 2 === 1 ? "bg-paper-dim/60" : ""
                    } ${i !== STATEMENT_ROWS.length - 1 ? "border-b border-ink/10" : ""}`}
                  >
                    <span className="text-sm text-slate max-w-[60%]">{row.label}</span>
                    <span className="font-mono text-2xl text-emerald-deep">
                      <Counter target={row.value} suffix={row.suffix} />
                    </span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-ink text-paper/80 flex items-center justify-between">
                <span className="ledger-code">Status</span>
                <span className="ledger-code text-brass-light">Reconciled &amp; Current</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

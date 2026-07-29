const CREDENTIALS = [
  { label: "Founded", value: "2013" },
  { label: "Structure", value: "LLP" },
  { label: "Practising members", value: "22" },
  { label: "Client retention", value: "96%" },
];

export default function About() {
  return (
    <section id="about" className="section py-24 md:py-32 bg-paper">
      <div className="section-inner">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">About the Firm</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              A practice built for businesses that can&rsquo;t afford
              <span className="italic"> ambiguity</span> in their numbers.
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-slate leading-relaxed text-base md:text-lg">
              Shandilya Fintax Services LLP is a multidisciplinary accounting and tax advisory
              practice serving founders, CFOs and finance teams who need more than a
              once-a-year filing relationship. We sit inside your close process,
              your compliance calendar and your reporting stack — treating your
              ledger with the same rigour we would apply to our own.
            </p>
            <p className="text-slate leading-relaxed text-base md:text-lg">
              Our partners hold cross-border experience across IFRS reporting,
              Indian direct and indirect tax, and internal controls design, which
              means the same team that reconciles your VAT return can also
              defend your IFRS disclosures to an overseas parent company.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-paper-line pt-8">
              {CREDENTIALS.map((c, i) => (
                <div
                  key={c.label}
                  className={`py-2 ${i > 0 ? "border-l border-paper-line pl-6" : ""}`}
                >
                  <div className="font-mono text-2xl text-emerald-deep">{c.value}</div>
                  <div className="ledger-code text-slate mt-1">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

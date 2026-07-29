import { Fingerprint, Timer, ShieldCheck, Globe2 } from "lucide-react";

const POINTS = [
  {
    icon: Fingerprint,
    title: "One advisor, full accountability",
    desc: "No handoffs between departments. The person who understands your business owns every deliverable.",
  },
  {
    icon: Timer,
    title: "Deadlines treated as commitments",
    desc: "Statutory dates are entered on our calendar the moment they're confirmed on yours — not chased in the last week.",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready, not audit-scrambled",
    desc: "Working papers, reconciliations and disclosures are maintained continuously, so year-end review is a formality.",
  },
  {
    icon: Globe2,
    title: "Cross-border fluency",
    desc: "Comfortable moving between IFRS, local GAAP and Indian tax law within the same engagement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section py-24 md:py-32 bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-ledger-dark opacity-60 pointer-events-none" />
      <div className="section-inner relative">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5 text-brass-light">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-medium leading-tight">
            The difference shows up in the details you never have to chase.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {POINTS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="border-t border-paper/15 pt-6">
                <Icon size={22} strokeWidth={1.4} className="text-brass-light mb-5" />
                <h3 className="font-display text-xl mb-2 text-paper">{p.title}</h3>
                <p className="text-paper/65 leading-relaxed text-sm md:text-base">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

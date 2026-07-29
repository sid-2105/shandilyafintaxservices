import {
  FileBarChart,
  Scale,
  BookOpenCheck,
  Receipt,
  ShieldCheck,
  ReceiptText,
  Landmark,
  Calculator,
  Users,
  LineChart,
} from "lucide-react";

const SERVICES = [
  {
    code: "IFRS",
    title: "IFRS Reporting",
    desc: "Financial statement conversion, first-time adoption and disclosure review under International Financial Reporting Standards.",
    icon: FileBarChart,
  },
  {
    code: "TAX",
    title: "Tax Advisory",
    desc: "Structuring, planning and cross-border tax positions reviewed before they become filing-season surprises.",
    icon: Scale,
  },
  {
    code: "BK",
    title: "Bookkeeping",
    desc: "Day-to-day ledger maintenance, bank reconciliation and month-end close, delivered on a fixed reporting calendar.",
    icon: BookOpenCheck,
  },
  {
    code: "VAT",
    title: "Value-Added Tax",
    desc: "VAT registration, return preparation and cross-jurisdiction compliance for goods and services trade.",
    icon: Receipt,
  },
  {
    code: "IC",
    title: "Internal Controls",
    desc: "Design and testing of financial controls that hold up under audit, not just on paper.",
    icon: ShieldCheck,
  },
  {
    code: "GST",
    title: "Goods & Services Tax",
    desc: "GST registration, monthly and annual returns, input credit reconciliation and notice response.",
    icon: ReceiptText,
  },
  {
    code: "ITX",
    title: "Income Tax",
    desc: "Individual and corporate income tax computation, advance tax planning and assessment representation.",
    icon: Landmark,
  },
  {
    code: "FA",
    title: "Financial Accounting",
    desc: "Statutory books maintained under applicable GAAP, ready for audit and board reporting on demand.",
    icon: Calculator,
  },
  {
    code: "TP",
    title: "Tax Preparation",
    desc: "Accurate, on-time preparation and filing across direct and indirect tax obligations.",
    icon: ReceiptText,
  },
  {
    code: "AM",
    title: "Account Management",
    desc: "A named advisor accountable for your accounts, filings and deadlines — one point of contact, always.",
    icon: Users,
  },
  {
    code: "FIN",
    title: "Financial Analysis",
    desc: "Variance analysis, cash-flow forecasting and management reporting that turns your ledger into decisions.",
    icon: LineChart,
  },
];

export default function Services() {
  return (
    <section id="services" className="section py-24 md:py-32 bg-paper">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-5">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-xl">
              Eleven disciplines. One ledger.
            </h2>
          </div>
          <p className="text-slate max-w-sm leading-relaxed">
            Every engagement is logged, coded and reconciled the way a line
            item belongs in a statement — nothing left off the books.
          </p>
        </div>

        <div className="border-t border-ink/15">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.code}
                className={`group grid grid-cols-[64px_1fr] md:grid-cols-[80px_220px_1fr_36px] items-center gap-4 md:gap-8 py-6 border-b border-ink/15 hover:bg-paper-dim/50 transition-colors duration-200 ${
                  i % 2 === 1 ? "bg-paper-dim/25" : ""
                }`}
              >
                <span className="font-mono text-xs text-brass-dark tracking-widest2">
                  {s.code}
                </span>
                <div className="flex items-center gap-3">
                  <Icon size={18} strokeWidth={1.5} className="text-emerald shrink-0" />
                  <h3 className="font-display text-lg text-ink">{s.title}</h3>
                </div>
                <p className="hidden md:block text-sm text-slate leading-relaxed max-w-md">
                  {s.desc}
                </p>
                <span className="hidden md:block h-px w-6 bg-ink/20 group-hover:w-9 group-hover:bg-emerald transition-all duration-200 justify-self-end" />
                <p className="md:hidden text-sm text-slate leading-relaxed col-span-2 -mt-2">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

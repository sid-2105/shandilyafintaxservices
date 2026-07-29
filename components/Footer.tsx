import Image from "next/image";

const COLUMNS = [
  {
    heading: "Services",
    links: ["IFRS Reporting", "Tax Advisory", "Bookkeeping", "VAT", "GST"],
  },
  {
    heading: "Firm",
    links: ["About", "Industries", "Process", "Testimonials"],
  },
  {
    heading: "Contact",
    links: ["hello@shandilyafintax.com", "+91 20 4567 8901"],
  },
];

export default function Footer() {
  return (
    <footer className="section bg-ink text-paper/70 pt-20 pb-10">
      <div className="section-inner">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-paper/15">
          <div>
            <div className="inline-block bg-paper px-4 py-3 mb-4 rounded-sm">
              <Image
                src="/logo.png"
                alt="Shandilya Fintax Services LLP — A Complete Accounting Solution"
                width={488}
                height={142}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Financial reporting, tax advisory and compliance for businesses
              that need their numbers to hold up under scrutiny.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="ledger-code text-brass-light mb-4">{col.heading}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link} className="text-sm">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono tracking-wide text-paper/50">
          <span>© {new Date().getFullYear()} Shandilya Fintax Services LLP. All rights reserved.</span>
          <span>Registered Limited Liability Partnership · India</span>
        </div>
      </div>
    </footer>
  );
}

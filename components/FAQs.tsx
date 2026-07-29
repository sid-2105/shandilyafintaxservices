"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "Do you work with businesses outside India?",
    a: "Yes. We advise foreign subsidiaries and cross-border groups on IFRS reporting and VAT alongside Indian GST and income tax obligations, coordinating with your overseas finance team or parent-company auditors directly.",
  },
  {
    q: "Can you take over mid-year from our current accountant?",
    a: "Regularly. Our onboarding starts with a document and ledger review so we can pick up your books at the correct opening balances without disrupting your existing filing calendar.",
  },
  {
    q: "How is pricing structured?",
    a: "Engagements are scoped and quoted upfront as a fixed monthly or annual fee based on transaction volume and filing complexity — no surprise hourly billing.",
  },
  {
    q: "Who actually handles our account day to day?",
    a: "A named account manager is assigned at onboarding and stays with your engagement. Senior partners review filings and sign-off items before anything is submitted.",
  },
  {
    q: "Can you support us through a statutory audit?",
    a: "Yes. We prepare and maintain audit-ready working papers throughout the year and liaise directly with your external auditors during fieldwork.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="section py-24 md:py-32 bg-paper">
      <div className="section-inner">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight">
              Questions worth answering before you sign an engagement letter.
            </h2>
          </div>

          <div className="border-t border-ink/15">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald"
                  >
                    <span className="font-display text-lg text-ink">{item.q}</span>
                    <Plus
                      size={20}
                      strokeWidth={1.5}
                      className={`shrink-0 text-emerald transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate leading-relaxed max-w-xl">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

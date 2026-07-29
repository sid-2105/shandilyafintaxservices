"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "912045678901";
const WHATSAPP_MESSAGE =
  "Hello Shandilya Fintax Services LLP, I'd like to enquire about your services.";

const INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@shandilyafintax.com",
    href: "mailto:hello@shandilyafintax.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 20 4567 8901",
    href: "tel:+912045678901",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Pimpri-Chinchwad, Maharashtra, India",
    href: "#",
  },
];

export default function ContactPreview() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section py-24 md:py-32 bg-paper-dim/40">
      <div className="section-inner">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10">
              Tell us what&rsquo;s on the books. We&rsquo;ll reply within one
              business day.
            </h2>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                WHATSAPP_MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm px-6 py-5 mb-10 hover:bg-[#25D366]/15 transition-colors group"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] shrink-0">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.906 6.484L4 29l7.71-1.868A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.99 0-3.85-.56-5.435-1.53l-.39-.235-4.575 1.108 1.127-4.46-.257-.406A9.66 9.66 0 0 1 5.34 15c0-5.878 4.786-10.664 10.664-10.664S26.668 9.122 26.668 15 21.882 24.7 16.004 24.7Zm5.85-7.985c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668s1.147 3.094 1.307 3.307c.16.213 2.257 3.445 5.467 4.83.764.33 1.36.527 1.825.674.767.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
                </svg>
              </span>
              <span>
                <span className="block font-display text-lg text-ink group-hover:text-[#128C7E] transition-colors">
                  Chat with us instantly
                </span>
                <span className="block text-sm text-slate">
                  Get an answer on WhatsApp — usually within minutes
                </span>
              </span>
            </a>

            <div className="space-y-6">
              {INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <Icon size={18} strokeWidth={1.5} className="text-emerald mt-1 shrink-0" />
                    <div>
                      <div className="ledger-code text-slate">{item.label}</div>
                      <div className="text-ink group-hover:text-emerald transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-paper border border-ink/15 p-8 md:p-10">
            <p className="ledger-code text-slate mb-6">Or send us the details</p>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <p className="font-display text-2xl text-ink mb-3">Message logged.</p>
                <p className="text-slate max-w-xs">
                  Thank you — a member of our team will be in touch within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="ledger-code text-slate block mb-2" htmlFor="name">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-ink/25 py-2 focus:outline-none focus:border-emerald transition-colors"
                    />
                  </div>
                  <div>
                    <label className="ledger-code text-slate block mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="w-full bg-transparent border-b border-ink/25 py-2 focus:outline-none focus:border-emerald transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="ledger-code text-slate block mb-2" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-ink/25 py-2 focus:outline-none focus:border-emerald transition-colors"
                  />
                </div>
                <div>
                  <label className="ledger-code text-slate block mb-2" htmlFor="service">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    className="w-full bg-transparent border-b border-ink/25 py-2 focus:outline-none focus:border-emerald transition-colors text-ink"
                  >
                    <option>IFRS Reporting</option>
                    <option>Tax Advisory</option>
                    <option>Bookkeeping</option>
                    <option>VAT</option>
                    <option>Internal Controls</option>
                    <option>GST</option>
                    <option>Income Tax</option>
                    <option>Financial Accounting</option>
                    <option>Tax Preparation</option>
                    <option>Account Management</option>
                    <option>Financial Analysis</option>
                  </select>
                </div>
                <div>
                  <label className="ledger-code text-slate block mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-ink/25 py-2 focus:outline-none focus:border-emerald transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

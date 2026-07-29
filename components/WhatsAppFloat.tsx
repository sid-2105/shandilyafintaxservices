"use client";

import { useEffect, useState } from "react";

// TODO: replace with the firm's actual WhatsApp Business number, digits only, country code first (e.g. 91XXXXXXXXXX)
const WHATSAPP_NUMBER = "912045678901";
const DEFAULT_MESSAGE =
  "Hello Shandilya Fintax Services LLP, I'd like to enquire about your services.";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 1800);
    const hide = setTimeout(() => setShowTooltip(false), 6500);
    return () => {
      clearTimeout(timer);
      clearTimeout(hide);
    };
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div
        className={`bg-ink text-paper text-sm px-4 py-2.5 rounded-sm shadow-lg transition-all duration-300 origin-right ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-2 scale-95 pointer-events-none"
        }`}
      >
        Chat with us on WhatsApp
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => setShowTooltip(false)}
        onMouseEnter={() => setShowTooltip(true)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.906 6.484L4 29l7.71-1.868A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.99 0-3.85-.56-5.435-1.53l-.39-.235-4.575 1.108 1.127-4.46-.257-.406A9.66 9.66 0 0 1 5.34 15c0-5.878 4.786-10.664 10.664-10.664S26.668 9.122 26.668 15 21.882 24.7 16.004 24.7Zm5.85-7.985c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.575-1.588-.952-.85-1.595-1.9-1.782-2.22-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668s1.147 3.094 1.307 3.307c.16.213 2.257 3.445 5.467 4.83.764.33 1.36.527 1.825.674.767.244 1.464.21 2.016.127.615-.092 1.89-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
        </svg>
      </a>
    </div>
  );
}

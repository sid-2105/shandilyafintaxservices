export default function CTA() {
  return (
    <section className="section py-24 md:py-28 bg-emerald-deep text-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-ledger-dark opacity-40 pointer-events-none" />
      <div className="section-inner relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="max-w-xl">
          <p className="eyebrow mb-5 text-brass-light">Call to Action</p>
          <h2 className="text-3xl md:text-[2.6rem] leading-tight font-medium">
            Ready to bring your books to a close you trust?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a href="#contact" className="btn-on-dark">
            Book a Consultation
          </a>
          <a
            href="https://wa.me/912045678901?text=Hello%20Shandilya%20Fintax%20Services%20LLP%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-on-dark border-[#25D366]/50"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

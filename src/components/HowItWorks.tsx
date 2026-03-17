import AnimateIn from "./AnimateIn";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: "Fahrzeug wählen",
    description: "Wähle dein Fahrzeug aus unserer Kollektion – BMW, VW Golf, Käfer, Traktor und viele mehr.",
  },
  {
    step: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: "Text personalisieren",
    description: "Gib deinen Namen, ein Datum oder einen Wunschtext für die Rückseite ein.",
  },
  {
    step: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Vorschau & Bestellen",
    description: "Live-Vorschau beider Seiten. Sicher online bestellen – in wenigen Klicks.",
  },
  {
    step: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    title: "Lieferung in 2–4 Tagen",
    description: "Wir fertigen deinen Anhänger von Hand und liefern ihn sicher verpackt zu dir.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-bc-brown-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-16 sm:mb-20">
          <span className="text-bc-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Prozess</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">So einfach geht&apos;s</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-bc-gold/20 via-bc-gold/40 to-bc-gold/20" />

          {steps.map((item, i) => (
            <AnimateIn key={i} delay={i * 150}>
              <div className="relative">
                {/* Icon circle */}
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] border border-bc-gold/40 flex items-center justify-center text-bc-gold mb-6 bg-bc-brown-dark">
                  {item.icon}
                </div>
                <div className="text-bc-gold/40 text-xs font-bold tracking-widest mb-2">{item.step}</div>
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200} className="mt-14 sm:mt-16">
          <Link
            href="/konfigurieren"
            className="inline-flex items-center gap-2 bg-bc-gold text-bc-brown-dark px-8 py-4 font-bold tracking-wide hover:bg-bc-gold-light transition-colors text-sm"
          >
            Jetzt deinen Anhänger gestalten →
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    title: "Modell wählen",
    description: "Wähle aus Holz, Leder oder unserem Bayern-Wappen-Design das passende Modell.",
  },
  {
    step: "02",
    title: "Text eingeben",
    description: "Gib deinen Wunschtext, Namen oder ein Datum ein. Bis zu 2 Zeilen möglich.",
  },
  {
    step: "03",
    title: "Vorschau & Bestellen",
    description: "Sieh dir eine Echtzeit-Vorschau an und bestelle sicher mit Stripe.",
  },
  {
    step: "04",
    title: "Lieferung nach Hause",
    description: "Wir fertigen deinen Anhänger handgefertigt und liefern in 2–4 Werktagen.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bavarian-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-bavarian-copper text-xs font-semibold tracking-widest uppercase mb-3">Prozess</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">So einfach geht&apos;s</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, index) => (
            <div key={index}>
              <div className="text-bavarian-copper text-4xl font-bold mb-4 tracking-tight">{item.step}</div>
              <h3 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

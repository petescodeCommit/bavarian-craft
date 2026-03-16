const steps = [
  {
    step: "1",
    title: "Modell wählen",
    description:
      "Wähle aus Holz, Leder oder unserem Bayern-Wappen-Design das passende Modell.",
    icon: "🎨",
  },
  {
    step: "2",
    title: "Text eingeben",
    description:
      "Gib deinen Wunschtext, Namen oder ein Datum ein. Bis zu 2 Zeilen möglich.",
    icon: "✍️",
  },
  {
    step: "3",
    title: "Vorschau & Bestellen",
    description:
      "Sieh dir eine Echtzeit-Vorschau an und bestelle sicher mit Stripe.",
    icon: "✅",
  },
  {
    step: "4",
    title: "Lieferung nach Hause",
    description:
      "Wir fertigen deinen Anhänger handgefertigt und liefern in 2–4 Werktagen.",
    icon: "📦",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-bavarian-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">So einfach geht's</h2>
          <p className="text-gray-500 text-lg">
            In vier Schritten zu deinem individuellen Schlüsselanhänger
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-bavarian-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-bavarian-blue/20 -translate-y-0.5" />
                )}
              </div>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

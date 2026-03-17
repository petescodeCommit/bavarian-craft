const reviews = [
  {
    name: "Maria S.",
    location: "München",
    rating: 5,
    text: "Der Holz-Klassiker mit dem Namen meines Mannes ist wunderschön geworden! Die Gravur ist sehr sauber und das Holz fühlt sich hochwertig an.",
  },
  {
    name: "Thomas B.",
    location: "Augsburg",
    rating: 5,
    text: "Schnelle Lieferung, tolle Verpackung und der Leder-Anhänger übertrifft alle Erwartungen. Habe gleich noch einen für meine Schwester bestellt.",
  },
  {
    name: "Julia M.",
    location: "Regensburg",
    rating: 5,
    text: "Das Bayern-Wappen-Design ist ein Blickfang. Alle fragen woher ich es habe. Perfektes Souvenir für Bayern-Fans!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-bavarian-copper text-xs font-semibold tracking-widest uppercase mb-3">Kundenstimmen</p>
          <h2 className="section-title mb-0">Was unsere Kunden sagen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-100 p-8">
              <div className="flex text-bavarian-copper text-lg mb-5 tracking-widest">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5">
                <div className="font-semibold text-sm tracking-wide">{review.name}</div>
                <div className="text-gray-400 text-xs tracking-wide mt-0.5">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

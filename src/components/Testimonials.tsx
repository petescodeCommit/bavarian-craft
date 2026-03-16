const reviews = [
  {
    name: "Maria S.",
    location: "München",
    rating: 5,
    text: "Der Holz-Klassiker mit dem Namen meines Mannes ist wunderschön geworden! Die Gravur ist sehr sauber und das Holz fühlt sich hochwertig an. Kommt definitiv wieder!",
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
    text: "Das Bayern-Wappen-Design ist ein Blickfang. Alle fragen woher ich es habe. Perfektes Souvenir und Geschenk für Bayern-Fans!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Was unsere Kunden sagen</h2>
          <p className="text-gray-500 text-lg">
            Über 500 zufriedene Kunden in ganz Deutschland
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-bavarian-cream rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-4">
                {"★".repeat(review.rating)}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold">{review.name}</div>
                <div className="text-gray-400 text-sm">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

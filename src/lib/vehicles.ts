export type VehicleCategory = "german-premium" | "sports" | "motorcycle" | "truck" | "agriculture" | "classic" | "italian" | "american" | "japanese";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  symbol: string;       // emoji or text symbol for front design
  tagline: string;      // short design description
  accentColor: string;  // Tailwind bg color class for design accent
  textColor: string;
}

export const vehicles: Vehicle[] = [
  // German Premium
  { id: "bmw", name: "BMW", category: "german-premium", symbol: "◎", tagline: "Freude am Fahren", accentColor: "#1C69D4", textColor: "#fff" },
  { id: "mercedes", name: "Mercedes-Benz", category: "german-premium", symbol: "✦", tagline: "Das Beste oder nichts", accentColor: "#222222", textColor: "#fff" },
  { id: "audi", name: "Audi", category: "german-premium", symbol: "⬭⬭⬭⬭", tagline: "Vorsprung durch Technik", accentColor: "#C0392B", textColor: "#fff" },
  { id: "porsche", name: "Porsche", category: "sports", symbol: "⚡", tagline: "Sportwagen seit 1948", accentColor: "#8B0000", textColor: "#fff" },
  { id: "vw", name: "Volkswagen", category: "german-premium", symbol: "V·W", tagline: "Das Auto", accentColor: "#1E3A5F", textColor: "#fff" },
  { id: "opel", name: "Opel", category: "german-premium", symbol: "⚡", tagline: "Wir leben Autos", accentColor: "#FFD700", textColor: "#000" },

  // Motorcycles
  { id: "harley", name: "Harley-Davidson", category: "motorcycle", symbol: "✦✦", tagline: "Live to Ride", accentColor: "#FF6600", textColor: "#fff" },
  { id: "bmw-moto", name: "BMW Motorrad", category: "motorcycle", symbol: "◎", tagline: "Make Life a Ride", accentColor: "#1C69D4", textColor: "#fff" },
  { id: "ktm", name: "KTM", category: "motorcycle", symbol: "▶", tagline: "Ready to Race", accentColor: "#FF4500", textColor: "#fff" },
  { id: "ducati", name: "Ducati", category: "motorcycle", symbol: "◆", tagline: "Born to Race", accentColor: "#CC0000", textColor: "#fff" },

  // Italian
  { id: "ferrari", name: "Ferrari", category: "italian", symbol: "♞", tagline: "Cavallino Rampante", accentColor: "#CC0000", textColor: "#fff" },
  { id: "lamborghini", name: "Lamborghini", category: "italian", symbol: "◈", tagline: "Born to be Wild", accentColor: "#FFD700", textColor: "#000" },
  { id: "alfa", name: "Alfa Romeo", category: "italian", symbol: "✤", tagline: "La meccanica delle emozioni", accentColor: "#C0392B", textColor: "#fff" },

  // American
  { id: "ford", name: "Ford", category: "american", symbol: "F", tagline: "Built Ford Tough", accentColor: "#003476", textColor: "#fff" },
  { id: "chevrolet", name: "Chevrolet", category: "american", symbol: "✛", tagline: "Find New Roads", accentColor: "#C8A400", textColor: "#000" },
  { id: "jeep", name: "Jeep", category: "american", symbol: "◉", tagline: "Go Anywhere", accentColor: "#2E6B2E", textColor: "#fff" },

  // Japanese
  { id: "toyota", name: "Toyota", category: "japanese", symbol: "◎", tagline: "Nichts ist unmöglich", accentColor: "#EB0A1E", textColor: "#fff" },
  { id: "honda", name: "Honda", category: "japanese", symbol: "H", tagline: "The Power of Dreams", accentColor: "#CC0000", textColor: "#fff" },
  { id: "yamaha", name: "Yamaha", category: "motorcycle", symbol: "✦", tagline: "Revs your Heart", accentColor: "#0038A8", textColor: "#fff" },
  { id: "kawasaki", name: "Kawasaki", category: "motorcycle", symbol: "◆", tagline: "Let the Good Times Roll", accentColor: "#006400", textColor: "#fff" },

  // Agriculture / Trucks
  { id: "fendt", name: "Fendt", category: "agriculture", symbol: "✦", tagline: "Die grüne Perfektion", accentColor: "#3C7A3C", textColor: "#fff" },
  { id: "john-deere", name: "John Deere", category: "agriculture", symbol: "◈", tagline: "Nothing Runs Like a Deere", accentColor: "#367C2B", textColor: "#fff" },
  { id: "claas", name: "Claas", category: "agriculture", symbol: "●", tagline: "Aus Erfahrung gut", accentColor: "#A8CE38", textColor: "#000" },
  { id: "man", name: "MAN Truck", category: "truck", symbol: "M", tagline: "Engineered to go further", accentColor: "#E2001A", textColor: "#fff" },
  { id: "mercedes-truck", name: "Mercedes Actros", category: "truck", symbol: "✦", tagline: "Der König der Straße", accentColor: "#444", textColor: "#fff" },

  // Classic
  { id: "vw-bus", name: "VW Bulli / T1", category: "classic", symbol: "⬡", tagline: "Kult seit 1950", accentColor: "#4682B4", textColor: "#fff" },
  { id: "mini", name: "Mini", category: "classic", symbol: "◎", tagline: "Small car, big fun", accentColor: "#C0392B", textColor: "#fff" },
];

export function searchVehicles(query: string): Vehicle[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return vehicles.filter((v) => v.name.toLowerCase().includes(q)).slice(0, 6);
}

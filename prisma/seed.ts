import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        name: "Leder-Klassiker",
        slug: "leder-klassiker",
        description: "Glattes Rindsleder aus Bayern. Die Vorderseite zeigt dein Fahrzeug-Motiv, die Rückseite wird mit deinem Text geprägt.",
        price: 24.90,
        material: "Rindsleder",
        size: "7 × 4 cm",
        tag: "Bestseller",
        emoji: "🟫",
        active: true,
      },
      {
        name: "Leder-Premium",
        slug: "leder-premium",
        description: "Genarbtes Büffelleder mit natürlicher Textur. Tiefere Prägung, edles Finish – für Anspruchsvolle.",
        price: 34.90,
        material: "Büffelleder",
        size: "7 × 4 cm",
        tag: "Premium",
        emoji: "🏅",
        active: true,
      },
      {
        name: "Leder-Vintage",
        slug: "leder-vintage",
        description: "Antik-behandeltes Leder mit natürlichem Used-Look. Jedes Stück ist ein Unikat mit einzigartiger Patina.",
        price: 29.90,
        material: "Antik-Leder",
        size: "7 × 4 cm",
        tag: "Beliebt",
        emoji: "⌚",
        active: true,
      },
    ],
  });

  console.log("✓ 3 Produkte eingetragen");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

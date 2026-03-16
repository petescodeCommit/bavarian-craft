"use client";

import { useState } from "react";

const models = [
  { id: 1, name: "Holz-Klassiker", emoji: "🪵", price: 19.9, maxChars: 30 },
  { id: 2, name: "Leder-Edition", emoji: "🟫", price: 24.9, maxChars: 25 },
  { id: 3, name: "Bayern-Wappen", emoji: "🏰", price: 22.9, maxChars: 20 },
  { id: 4, name: "Mini-Herz", emoji: "❤️", price: 17.9, maxChars: 15 },
  { id: 5, name: "Edelstahl-Pro", emoji: "🔩", price: 29.9, maxChars: 30 },
  { id: 6, name: "Weihnachts-Edition", emoji: "🎄", price: 18.9, maxChars: 15 },
];

const fonts = [
  { id: "serif", label: "Klassisch", style: "font-serif" },
  { id: "sans", label: "Modern", style: "font-sans" },
  { id: "mono", label: "Technisch", style: "font-mono" },
];

export default function Configurator() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [added, setAdded] = useState(false);

  const totalChars = line1.length + line2.length;
  const isValid = line1.trim().length > 0 && totalChars <= selectedModel.maxChars;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left: Options */}
      <div className="space-y-8">
        {/* Model selection */}
        <div>
          <h2 className="font-bold text-lg mb-3">1. Modell wählen</h2>
          <div className="grid grid-cols-3 gap-3">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`border-2 rounded-xl p-3 text-center transition-all ${
                  selectedModel.id === model.id
                    ? "border-bavarian-blue bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-3xl mb-1">{model.emoji}</div>
                <div className="text-xs font-medium">{model.name}</div>
                <div className="text-xs text-bavarian-blue font-bold">
                  {model.price.toFixed(2).replace(".", ",")} €
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Text input */}
        <div>
          <h2 className="font-bold text-lg mb-3">2. Text eingeben</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Zeile 1 *
              </label>
              <input
                type="text"
                value={line1}
                onChange={(e) =>
                  setLine1(e.target.value.slice(0, selectedModel.maxChars))
                }
                placeholder="z.B. dein Name"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-bavarian-blue focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-1 block">
                Zeile 2 (optional)
              </label>
              <input
                type="text"
                value={line2}
                onChange={(e) =>
                  setLine2(
                    e.target.value.slice(
                      0,
                      Math.max(0, selectedModel.maxChars - line1.length)
                    )
                  )
                }
                placeholder="z.B. ein Datum"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-bavarian-blue focus:outline-none transition-colors"
              />
            </div>
            <div className="text-xs text-gray-400 text-right">
              {totalChars}/{selectedModel.maxChars} Zeichen
            </div>
          </div>
        </div>

        {/* Font selection */}
        <div>
          <h2 className="font-bold text-lg mb-3">3. Schriftart wählen</h2>
          <div className="flex gap-3">
            {fonts.map((font) => (
              <button
                key={font.id}
                onClick={() => setSelectedFont(font)}
                className={`flex-1 border-2 rounded-lg py-3 text-center transition-all ${font.style} ${
                  selectedFont.id === font.id
                    ? "border-bavarian-blue bg-blue-50 font-bold"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Preview + Order */}
      <div className="space-y-6">
        {/* Live preview */}
        <div>
          <h2 className="font-bold text-lg mb-3">Vorschau</h2>
          <div className="bg-bavarian-cream rounded-2xl p-8 flex items-center justify-center min-h-64">
            <div className="bg-white rounded-xl shadow-lg p-6 w-40 min-h-24 flex flex-col items-center justify-center text-center border-2 border-gray-100">
              <div className="text-4xl mb-3">{selectedModel.emoji}</div>
              {line1 || line2 ? (
                <div className={`${selectedFont.style} text-bavarian-dark`}>
                  {line1 && (
                    <div className="font-semibold text-sm">{line1}</div>
                  )}
                  {line2 && (
                    <div className="text-xs text-gray-500">{line2}</div>
                  )}
                </div>
              ) : (
                <div className="text-gray-300 text-xs italic">
                  Dein Text erscheint hier
                </div>
              )}
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">
            * Vorschau ist vereinfacht dargestellt
          </p>
        </div>

        {/* Order summary */}
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 space-y-4">
          <h2 className="font-bold text-lg">Zusammenfassung</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Modell</span>
              <span className="font-medium">{selectedModel.name}</span>
            </div>
            {line1 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Zeile 1</span>
                <span className="font-medium">{line1}</span>
              </div>
            )}
            {line2 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Zeile 2</span>
                <span className="font-medium">{line2}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-gray-500">Schriftart</span>
              <span className="font-medium">{selectedFont.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Versand</span>
              <span className="text-green-600 font-medium">Kostenlos ab 30€</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="font-bold">Gesamt</span>
              <span className="font-bold text-bavarian-blue text-xl">
                {selectedModel.price.toFixed(2).replace(".", ",")} €
              </span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!isValid}
            className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
              isValid
                ? added
                  ? "bg-green-500 text-white"
                  : "bg-bavarian-blue text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {added ? "✓ Zum Warenkorb hinzugefügt!" : "In den Warenkorb"}
          </button>

          {!isValid && line1.trim().length === 0 && (
            <p className="text-red-400 text-xs text-center">
              Bitte gib mindestens einen Text in Zeile 1 ein.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

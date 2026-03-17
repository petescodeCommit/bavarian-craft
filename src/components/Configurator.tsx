"use client";

import { useState, useRef, useEffect } from "react";
import { vehicles, searchVehicles, type Vehicle } from "@/lib/vehicles";

const leatherModels = [
  { id: 1, name: "Leder-Klassiker", price: 24.9, description: "Glattes Rindsleder" },
  { id: 2, name: "Leder-Premium", price: 34.9, description: "Genarbtes Büffelleder" },
  { id: 3, name: "Leder-Vintage", price: 29.9, description: "Antik-behandeltes Leder" },
];

const fonts = [
  { id: "serif", label: "Klassisch", style: "font-serif" },
  { id: "sans", label: "Modern", style: "font-sans" },
  { id: "mono", label: "Technisch", style: "font-mono" },
];

export default function Configurator() {
  const [selectedModel, setSelectedModel] = useState(leatherModels[0]);
  const [vehicleQuery, setVehicleQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [backLine1, setBackLine1] = useState("");
  const [backLine2, setBackLine2] = useState("");
  const [selectedFont, setSelectedFont] = useState(fonts[0]);
  const [showFront, setShowFront] = useState(true);
  const [added, setAdded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSuggestions(searchVehicles(vehicleQuery));
  }, [vehicleQuery]);

  function selectVehicle(v: Vehicle) {
    setSelectedVehicle(v);
    setVehicleQuery(v.name);
    setSuggestions([]);
  }

  const maxChars = 20;
  const isValid = selectedVehicle !== null && backLine1.trim().length > 0;

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT: Configuration */}
      <div className="space-y-8">

        {/* Step 1: Leather model */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-bc-brown text-white text-sm font-bold flex items-center justify-center">1</span>
            <h2 className="font-bold text-lg">Ledermodell wählen</h2>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {leatherModels.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m)}
                className={`border-2 p-3 text-center transition-all text-left ${
                  selectedModel.id === m.id ? "border-bc-brown bg-bc-cream" : "border-bc-border hover:border-bc-brown/40"
                }`}
              >
                <div className="font-semibold text-sm">{m.name}</div>
                <div className="text-xs text-bc-muted mt-0.5">{m.description}</div>
                <div className="text-bc-brown font-bold text-sm mt-1">{m.price.toFixed(2).replace(".", ",")} €</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Vehicle */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-bc-brown text-white text-sm font-bold flex items-center justify-center">2</span>
            <h2 className="font-bold text-lg">Fahrzeug eingeben</h2>
          </div>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={vehicleQuery}
              onChange={(e) => {
                setVehicleQuery(e.target.value);
                setSelectedVehicle(null);
              }}
              placeholder="z.B. BMW, Porsche, Fendt, Harley…"
              className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors bg-white"
            />
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-10 bg-white border border-bc-border shadow-lg mt-1">
                {suggestions.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => selectVehicle(v)}
                    className="w-full text-left px-4 py-3 hover:bg-bc-cream transition-colors border-b border-bc-border last:border-0"
                  >
                    <span className="font-medium text-sm">{v.name}</span>
                    <span className="text-bc-muted text-xs ml-2">— {v.tagline}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Quick picks */}
          <div className="mt-3 flex flex-wrap gap-2">
            {["BMW", "Porsche", "Harley-Davidson", "Fendt", "Mercedes-Benz", "Ducati"].map((name) => (
              <button
                key={name}
                onClick={() => {
                  const v = vehicles.find((x) => x.name === name);
                  if (v) selectVehicle(v);
                }}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  selectedVehicle?.name === name
                    ? "border-bc-brown bg-bc-brown text-white"
                    : "border-bc-border text-bc-muted hover:border-bc-brown hover:text-bc-text"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Back personalization */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-bc-brown text-white text-sm font-bold flex items-center justify-center">3</span>
            <h2 className="font-bold text-lg">Rückseite personalisieren</h2>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-bc-muted mb-1 block">Zeile 1 *</label>
              <input
                type="text"
                value={backLine1}
                onChange={(e) => setBackLine1(e.target.value.slice(0, maxChars))}
                placeholder="z.B. dein Name"
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-bc-muted mb-1 block">Zeile 2 (optional)</label>
              <input
                type="text"
                value={backLine2}
                onChange={(e) => setBackLine2(e.target.value.slice(0, maxChars))}
                placeholder="z.B. ein Datum"
                className="w-full border-2 border-bc-border px-4 py-3 focus:border-bc-brown focus:outline-none transition-colors"
              />
            </div>
            <div className="text-xs text-bc-muted text-right">{Math.max(backLine1.length, backLine2.length)}/{maxChars} Zeichen</div>
          </div>
        </div>

        {/* Step 4: Font */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-7 rounded-full bg-bc-brown text-white text-sm font-bold flex items-center justify-center">4</span>
            <h2 className="font-bold text-lg">Schriftart</h2>
          </div>
          <div className="flex gap-3">
            {fonts.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFont(f)}
                className={`flex-1 border-2 py-3 text-center text-sm transition-all ${f.style} ${
                  selectedFont.id === f.id ? "border-bc-brown bg-bc-cream font-bold" : "border-bc-border hover:border-bc-brown/40"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Preview + Order */}
      <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        {/* Preview */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">Live-Vorschau</h2>
            <div className="flex border border-bc-border overflow-hidden text-sm">
              <button
                onClick={() => setShowFront(true)}
                className={`px-4 py-1.5 transition-colors ${showFront ? "bg-bc-brown text-white" : "text-bc-muted hover:text-bc-text"}`}
              >
                Vorderseite
              </button>
              <button
                onClick={() => setShowFront(false)}
                className={`px-4 py-1.5 transition-colors ${!showFront ? "bg-bc-brown text-white" : "text-bc-muted hover:text-bc-text"}`}
              >
                Rückseite
              </button>
            </div>
          </div>

          <div className="bg-bc-cream-dark rounded-sm p-8 flex items-center justify-center min-h-64">
            {/* Leather keychain preview */}
            <div className="relative">
              {/* Key ring */}
              <div className="w-5 h-5 border-4 border-bc-muted rounded-full mx-auto mb-1" />
              {/* Leather card */}
              <div
                className="w-36 h-56 rounded-sm shadow-lg flex flex-col items-center justify-center p-4 text-center transition-all duration-300"
                style={{ backgroundColor: "#8B5240", backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 6px)" }}
              >
                {showFront ? (
                  /* Front: vehicle design */
                  selectedVehicle ? (
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-inner"
                        style={{ backgroundColor: selectedVehicle.accentColor, color: selectedVehicle.textColor }}
                      >
                        {selectedVehicle.symbol}
                      </div>
                      <div className="text-white font-bold text-sm tracking-widest uppercase mt-1">
                        {selectedVehicle.name}
                      </div>
                      <div className="text-white/60 text-xs italic">{selectedVehicle.tagline}</div>
                    </div>
                  ) : (
                    <div className="text-white/40 text-xs text-center px-2">
                      Fahrzeug eingeben für Vorderseite-Design
                    </div>
                  )
                ) : (
                  /* Back: personalized text */
                  <div className={`text-white ${selectedFont.style} flex flex-col items-center gap-2`}>
                    {backLine1 || backLine2 ? (
                      <>
                        {backLine1 && <div className="font-bold text-base tracking-wide">{backLine1}</div>}
                        {backLine2 && <div className="text-sm text-white/70">{backLine2}</div>}
                      </>
                    ) : (
                      <div className="text-white/40 text-xs italic">Dein Text hier</div>
                    )}
                    <div className="absolute bottom-3 text-white/30 text-xs tracking-widest uppercase">Bavaria</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-xs text-bc-muted text-center mt-2">* Vorschau ist vereinfacht dargestellt</p>
        </div>

        {/* Order summary */}
        <div className="bg-white border border-bc-border p-6 space-y-4">
          <h2 className="font-bold text-lg">Bestellung</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-bc-muted">Modell</span>
              <span className="font-medium">{selectedModel.name}</span>
            </div>
            {selectedVehicle && (
              <div className="flex justify-between">
                <span className="text-bc-muted">Fahrzeug</span>
                <span className="font-medium">{selectedVehicle.name}</span>
              </div>
            )}
            {backLine1 && (
              <div className="flex justify-between">
                <span className="text-bc-muted">Rückseite</span>
                <span className="font-medium">{backLine1}{backLine2 ? ` / ${backLine2}` : ""}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-bc-muted">Versand</span>
              <span className="text-green-600 font-medium">Kostenlos ab 30€</span>
            </div>
            <div className="border-t border-bc-border pt-2 flex justify-between">
              <span className="font-bold">Gesamt</span>
              <span className="font-bold text-bc-brown text-xl">{selectedModel.price.toFixed(2).replace(".", ",")} €</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!isValid}
            className={`w-full py-4 font-bold text-lg tracking-wide transition-all ${
              isValid
                ? added
                  ? "bg-green-600 text-white"
                  : "bg-bc-brown text-white hover:bg-bc-brown-dark"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            {added ? "✓ Zum Warenkorb hinzugefügt!" : "In den Warenkorb"}
          </button>

          {!isValid && (
            <p className="text-xs text-bc-muted text-center">
              {!selectedVehicle ? "Bitte wähle ein Fahrzeug." : "Bitte gib mindestens Zeile 1 ein."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

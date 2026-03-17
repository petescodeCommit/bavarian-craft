"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProductData {
  id?: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  material: string;
  size: string;
  tag: string;
  emoji: string;
  imageUrl: string;
  sizes: string;
  colors: string;
  active: boolean;
}

export default function ProductForm({ product }: { product?: ProductData }) {
  const router = useRouter();
  const isEdit = !!product?.id;

  const [form, setForm] = useState<ProductData>({
    name: product?.name ?? "",
    slug: product?.slug ?? "",
    description: product?.description ?? "",
    price: product?.price ?? 0,
    material: product?.material ?? "",
    size: product?.size ?? "7 × 4 cm",
    tag: product?.tag ?? "",
    emoji: product?.emoji ?? "🟫",
    imageUrl: product?.imageUrl ?? "",
    sizes: product?.sizes ?? "",
    colors: product?.colors ?? "",
    active: product?.active ?? true,
    ...(product?.id ? { id: product.id } : {}),
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(product?.imageUrl ?? "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked
        : name === "price" ? parseFloat(value) || 0
        : value,
    }));
    if (name === "name" && !isEdit) {
      setForm((f) => ({ ...f, slug: value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") }));
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return form.imageUrl || null;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", imageFile);
    fd.append("slug", form.slug);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    if (!res.ok) {
      const data = await res.json();
      setError("Bild-Upload fehlgeschlagen: " + (data.error ?? res.statusText));
      return null;
    }
    const { url } = await res.json();
    return url;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const imageUrl = await uploadImage();
    if (imageFile && !imageUrl) { setSaving(false); return; }

    const payload = { ...form, imageUrl: imageUrl ?? form.imageUrl };
    const res = await fetch(isEdit ? `/api/admin/products/${product!.id}` : "/api/admin/products", {
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);
    if (res.ok) {
      router.push("/admin/produkte");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error ?? "Fehler beim Speichern.");
    }
  }

  async function handleDelete() {
    if (!confirm("Produkt wirklich löschen?")) return;
    await fetch(`/api/admin/products/${product!.id}`, { method: "DELETE" });
    router.push("/admin/produkte");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">{error}</div>}

      {/* Image upload */}
      <div className="bg-white border border-gray-200 p-6">
        <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-3">Produktbild</label>
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 bg-bc-cream flex items-center justify-center border border-bc-border overflow-hidden">
            {imagePreview ? (
              <img src={imagePreview} alt="Vorschau" className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl">{form.emoji}</span>
            )}
          </div>
          <div className="flex-1">
            <input type="file" accept="image/*" onChange={handleImageChange}
              className="block w-full text-sm text-bc-muted file:mr-4 file:py-2 file:px-4 file:border file:border-bc-border file:text-sm file:bg-white file:text-bc-brown hover:file:bg-bc-cream" />
            <p className="text-xs text-bc-muted mt-2">JPG, PNG oder WebP · max. 5 MB</p>
            {uploading && <p className="text-xs text-bc-brown mt-1">Wird hochgeladen…</p>}
          </div>
        </div>
      </div>

      {/* Basic info */}
      <div className="bg-white border border-gray-200 p-6 space-y-4">
        <h2 className="font-semibold">Grunddaten</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Slug</label>
            <input name="slug" value={form.slug} onChange={handleChange} required
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm font-mono" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Beschreibung *</label>
          <textarea name="description" value={form.description} onChange={handleChange} required rows={4}
            className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm resize-none" />
        </div>
      </div>

      {/* Details */}
      <div className="bg-white border border-gray-200 p-6 space-y-4">
        <h2 className="font-semibold">Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Preis (€) *</label>
            <input name="price" type="number" step="0.01" min="0" value={form.price} onChange={handleChange} required
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Material *</label>
            <input name="material" value={form.material} onChange={handleChange} required
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Standardgröße</label>
            <input name="size" value={form.size} onChange={handleChange}
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Verfügbare Größen <span className="font-normal text-bc-muted">(kommagetrennt, z.B. Klein 5×3 cm,Mittel 7×4 cm,Groß 9×5 cm)</span></label>
            <input name="sizes" value={form.sizes} onChange={handleChange}
              placeholder="Klein 5×3 cm,Mittel 7×4 cm,Groß 9×5 cm"
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Verfügbare Farben <span className="font-normal text-bc-muted">(kommagetrennt, z.B. Naturbraun,Dunkelbraun,Schwarz)</span></label>
            <input name="colors" value={form.colors} onChange={handleChange}
              placeholder="Naturbraun,Dunkelbraun,Schwarz"
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Tag (z.B. Bestseller)</label>
            <input name="tag" value={form.tag} onChange={handleChange}
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-bc-muted tracking-wide block mb-1.5">Emoji (Fallback)</label>
            <input name="emoji" value={form.emoji} onChange={handleChange}
              className="w-full border border-gray-200 px-3 py-2.5 focus:border-bc-brown focus:outline-none text-sm" />
          </div>
          <div className="flex items-center gap-3 pt-6">
            <input type="checkbox" name="active" id="active" checked={form.active}
              onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))}
              className="w-4 h-4 accent-bc-brown" />
            <label htmlFor="active" className="text-sm font-medium">Produkt aktiv (im Shop sichtbar)</label>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button type="submit" disabled={saving || uploading}
          className="bg-bc-brown text-white px-8 py-3 font-bold hover:bg-bc-brown-dark transition-colors disabled:opacity-50">
          {saving ? "Speichern…" : isEdit ? "Änderungen speichern" : "Produkt erstellen"}
        </button>
        <button type="button" onClick={() => router.back()}
          className="border border-gray-200 px-6 py-3 text-bc-muted hover:border-bc-brown hover:text-bc-text transition-colors">
          Abbrechen
        </button>
        {isEdit && (
          <button type="button" onClick={handleDelete}
            className="ml-auto text-red-500 hover:underline text-sm">
            Produkt löschen
          </button>
        )}
      </div>
    </form>
  );
}

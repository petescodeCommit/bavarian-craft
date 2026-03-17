"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  id: string; // unique per config
  productId: number;
  productName: string;
  productImage: string | null;
  price: number;
  size: string;
  color: string;
  backText: string;
  quantity: number;
}

interface CartCtx {
  items: CartItem[];
  add: (item: Omit<CartItem, "id" | "quantity">) => void;
  remove: (id: string) => void;
  update: (id: string, quantity: number) => void;
  clear: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bc_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("bc_cart", JSON.stringify(items));
  }, [items]);

  const add = useCallback((item: Omit<CartItem, "id" | "quantity">) => {
    const id = `${item.productId}-${item.size}-${item.color}-${item.backText}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, id, quantity: 1 }];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const update = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) { remove(id); return; }
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity } : i));
  }, [remove]);

  const clear = useCallback(() => setItems([]), []);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, update, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

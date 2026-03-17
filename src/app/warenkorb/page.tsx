import type { Metadata } from "next";
import CartPage from "@/components/CartPage";

export const metadata: Metadata = { title: "Warenkorb" };

export default function WarenkorbPage() {
  return <CartPage />;
}

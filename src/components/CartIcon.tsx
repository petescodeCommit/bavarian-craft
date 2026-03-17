"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function CartIcon() {
  const { count } = useCart();
  return (
    <Link href="/warenkorb" className="relative text-bc-muted hover:text-bc-text transition-colors">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-bc-brown text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </Link>
  );
}

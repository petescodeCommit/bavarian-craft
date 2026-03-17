import { createClient } from "@supabase/supabase-js";

// Server-side admin client (bypasses RLS, uses service role)
export function getAdminDb() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

// Types
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  material: string;
  size: string;
  tag: string | null;
  emoji: string | null;
  imageUrl: string | null;
  sizes: string | null;
  colors: string | null;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: number;
  order_number: string;
  user_id: string;
  status: string;
  total_amount: number;
  shipping_name: string;
  shipping_street: string;
  shipping_city: string;
  shipping_zip: string;
  shipping_country: string;
  created_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  vehicle: string;
  back_line1: string;
  back_line2: string | null;
  font_style: string;
  product?: Product;
}

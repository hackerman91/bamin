"use client";
import Link from "next/link";
import ShopCard from "../card/ShopCard";
import { Shop } from "@prisma/client";

export default function ShopListSection({ shops }: { shops: Shop[] }) {
  return (
    <section className="p-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <h2>배달</h2>
        </div>
        <Link href="/upload">upload</Link>
      </div>
      <div className="bg-gray-300 w-full flex h-1 my-2" />

      {/* Shop List */}
      <div>
        {shops.map((shop: Shop, index: number) => (
          <Link key={shop.id} href={`/shop/${shop.id}`}>
            <ShopCard shop={shop} />
          </Link>
        ))}
      </div>
    </section>
  );
}

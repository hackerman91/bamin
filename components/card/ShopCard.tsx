import { Shop } from "@prisma/client";
import Link from "next/link";

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div className="my-2 p-2 border-b border-gray-300 hover:cursor-pointer">
      <div className="flex w-full">
        <div className="w-16">
          <div className="w-12 h-16 bg-slate-500">{shop.cardImage}</div>
        </div>
        <div className="flex flex-col w-full text-xs">
          <h2 className="font-semibold text-sm mb-1">{shop.title}</h2>
          <div className="flex gap-2">
            <p>{shop.star}</p>
            <p>{shop.description}</p>
          </div>
          <div className="flex gap-2">
            <p>{shop.deliveryTime}</p>
            <p>{shop.deliveryFee}</p>
          </div>
          <div className="flex">
            <p>{shop.minumumOrder}</p>
            <p>{shop.tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

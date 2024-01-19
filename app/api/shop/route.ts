import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/prisma";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") as string;

  if (!id) {
    const shopItem = await prisma.shop.findMany({ take: 10 });

    if (shopItem) {
      return NextResponse.json(shopItem);
    }
  }

  const shopItem = await prisma.shop.findFirst({
    where: {
      id: id,
    },
  });

  if (shopItem) {
    return NextResponse.json(shopItem);
  }

  return NextResponse.json({ message: "error" });
}

export async function POST(req: NextRequest) {
  const data = await req.formData();
  return NextResponse.json({ message: "error" });
}

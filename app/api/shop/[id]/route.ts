import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const menu = await prisma.menu.findMany({
    where: {
      shopId: id,
    },
  });

  if (menu) {
    return NextResponse.json(menu);
  }

  return NextResponse.json({ message: "error" });
}

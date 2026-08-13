import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cities = await prisma.cities.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(cities);
  } catch (error) {
    console.error("Lỗi lấy danh sách tỉnh/thành phố:", error);

    return NextResponse.json(
      {
        error: "Không thể tải dữ liệu Tỉnh/Thành phố",
      },
      {
        status: 500,
      }
    );
  }
}
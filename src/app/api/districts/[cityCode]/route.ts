import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  context: { params: Promise<{ cityCode: string }> }
) {
  try {
    const { cityCode } = await context.params;

    const districts = await prisma.districts.findMany({
      where: {
        parent_code: cityCode,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(districts);
  } catch (error) {
    console.error("Lỗi lấy danh sách quận/huyện:", error);

    return NextResponse.json(
      {
        error: "Không thể tải dữ liệu Quận/Huyện",
      },
      {
        status: 500,
      }
    );
  }
}
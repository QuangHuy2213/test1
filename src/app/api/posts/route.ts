import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const city = searchParams.get("city");
    const district = searchParams.get("district");

    const minPrice = searchParams.get("min_price");
    const maxPrice = searchParams.get("max_price");

    const minArea = searchParams.get("min_area");
    const maxArea = searchParams.get("max_area");

    const posts = await prisma.posts.findMany({
      where: {
        city: city || undefined,
        district: district || undefined,

        price:
          minPrice || maxPrice
            ? {
                gte: minPrice ? Number(minPrice) : undefined,
                lte: maxPrice ? Number(maxPrice) : undefined,
              }
            : undefined,

        area:
          minArea || maxArea
            ? {
                gte: minArea ? Number(minArea) : undefined,
                lte: maxArea ? Number(maxArea) : undefined,
              }
            : undefined,
      },

      orderBy: {
        id: "desc",
      },
    });

    const result = posts.map((post: typeof posts[number]) => ({
      ...post,
      price: Number(post.price),
      area: Number(post.area),
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Lỗi lấy danh sách bài viết:", error);

    return NextResponse.json(
      { error: "Không thể tải dữ liệu Bài viết" },
      { status: 500 }
    );
  }
}
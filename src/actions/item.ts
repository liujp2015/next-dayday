import { prisma } from "@/prisma";

export async function getItemsByTitle(
  prevState: { message: string } | null | undefined,
  params: URLSearchParams
) {
  const table = params.get("table") as string;
  const title = params.get("title") as string;
  prisma.item.findMany({
    where: {
      table,
      title,
    },
  });
}

export async function getItemsByTags(
  prevState: { message: string } | null | undefined,
  params: URLSearchParams
) {
  const tags = params.get("tags") as string;
  prisma.item.findMany({
    where: {
      tags,
    },
  });
}

export async function getTemplateList() {
  const items = await prisma.item.findMany();
  return {
    message: "Success",
    data: items, // 返回数据和状态
  };
}

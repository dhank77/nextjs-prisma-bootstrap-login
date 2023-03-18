import { prisma } from "@/libs/prisma";

export default async function handler(req, res) {
  let data = await prisma.user.findMany();
  res.json(data);
}

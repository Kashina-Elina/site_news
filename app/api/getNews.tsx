import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const news = await prisma.news.findMany({ orderBy: { date: "desc" } });
      res.status(200).json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Error fetching news" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

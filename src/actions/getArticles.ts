"use server"

import { prisma } from "@/lib/prisma"

export async function getArticles() {
	const articles = await prisma.article.findMany({
		orderBy: { createdAt: "desc" },
	})

	return { articles }
}

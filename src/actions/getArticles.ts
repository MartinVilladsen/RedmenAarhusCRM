"use server"

import { prisma } from "@/lib/prisma"

export async function getArticles() {
	const articles = await prisma.article.findMany({
		orderBy: { createdAt: "desc" },
	})

	return { articles }
}

export async function getPodcasts() {
	const podcasts = await prisma.podcast.findMany({
		orderBy: { createdAt: "desc" },
	})

	return { podcasts }
}
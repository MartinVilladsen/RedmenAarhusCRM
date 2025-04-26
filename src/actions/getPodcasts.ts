"use server"

import { prisma } from "@/lib/prisma"

export async function getPodcasts() {
	const podcasts = await prisma.podcast.findMany({
		orderBy: { createdAt: "desc" },
	})

	return { podcasts }
}
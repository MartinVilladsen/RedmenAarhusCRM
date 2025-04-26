"use server"

import { prisma } from "@/lib/prisma"
import { articleSchema } from "@/schemas/ArticleSchema"
import { redirect } from "next/navigation"

export async function createArticle(prevState: any, formData: FormData) {
    const subject = formData.get("subject") as string
    const title = formData.get("title") as string
    const image = formData.get("image") as string
    const content = formData.get("content") as string | null

    const data = {
        subject,
        title,
        image,
        content
    }

    const validationResult = articleSchema.safeParse(data)
    if (!validationResult.success) {
		return {
			errors: validationResult.error.flatten().fieldErrors,
			message: "Please correct the errors in the form.",
		}
	}

    const validatedData = validationResult.data
	const { ...rest } = validatedData


    try {
        await prisma.article.create({
            data: {
                ...rest,
                userId: 4
            }
        })
    } catch (error) {
		console.error("Error creating article:", error)
		return {
			errors: { general: ["There was an error creating the article."] },
			message: "Error creating article.",
		}
	}
	return redirect("/")


}

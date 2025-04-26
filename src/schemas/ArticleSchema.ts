import { z } from "zod";

export const articleSchema = z.object({
    subject: z.string().min(1, "Subject must be at least 1 character"),
    title: z.string().min(1, "Title must be at least 1 character"),
    image: z.string().optional(),
    content: z.string(),
})
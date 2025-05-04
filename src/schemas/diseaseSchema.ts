import {z} from "zod"

export const diseaseSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Content must be atleast 10 characters long"})
    .max(300, {message: "Content must be atmost 300 characters"})
})
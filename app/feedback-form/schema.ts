import { z } from "zod";

export const LoginSchema = z.object({
  title: z.string().min(1, { message: "Feedback title is required." }).max(64),
  category: z.string(),
  detail: z
    .string()
    .min(1, { message: "Feedback detail is required." })
    .max(128),
});

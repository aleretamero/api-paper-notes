import { Schema, z } from "zod";

export const idSchema: Schema<{ id: string }> = z.object({
  id: z.string().trim().length(24),
});

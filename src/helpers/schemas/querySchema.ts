import { Schema, z } from "zod";

export const querySchema: Schema<{ query: string }> = z.object({
  query: z.string(),
});

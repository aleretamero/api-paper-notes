import { Schema, z } from "zod";
import { CreateCommentDto } from "../dtos/CreateCommentDto";

export const createCommentSchema: Schema<
  Omit<CreateCommentDto, "user" | "note"> & { noteId: string }
> = z
  .object({
    body: z.string().trim().min(3),
    noteId: z.string().trim().length(24),
  })
  .strict();

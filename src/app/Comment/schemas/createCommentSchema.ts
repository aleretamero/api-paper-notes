import { Schema, z } from "zod";
import { CreateCommentDto } from "../dtos/CreateCommentDto";

export const createCommentSchema: Schema<Omit<CreateCommentDto, "user">> = z
  .object({
    body: z.string().trim().min(3),
    note: z.string().trim().min(3),
  })
  .strict();

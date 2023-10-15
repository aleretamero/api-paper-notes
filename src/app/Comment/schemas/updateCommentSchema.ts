import { Schema, z } from "zod";
import { UpdateCommentDto } from "../dtos/UpdateCommentDto";

export const updateCommentSchema: Schema<UpdateCommentDto> = z
  .object({
    body: z.string().trim().min(3),
  })
  .strict();

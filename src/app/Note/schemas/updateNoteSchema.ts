import { Schema, z } from "zod";
import { UpdateNoteDto } from "../dtos/UpdateNoteDto";

export const updateNoteSchema: Schema<Omit<UpdateNoteDto, "author">> = z
  .object({
    title: z.string().trim().min(3),
    body: z.string().trim().min(3),
  })
  .strict()
  .partial();

import { Schema, z } from "zod";
import { UpdateNoteDto } from "../dtos/UpdateNoteDto";

export const updateNoteSchema: Schema<Omit<UpdateNoteDto, "author">> = z
  .object({
    title: z.string(),
    body: z.string(),
  })
  .partial();

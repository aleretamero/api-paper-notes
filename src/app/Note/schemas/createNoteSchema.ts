import { Schema, z } from "zod";
import { CreateNoteDto } from "../dtos/CreateNoteDto";

export const createNoteSchema: Schema<Omit<CreateNoteDto, "author">> = z
  .object({
    title: z.string().trim().min(3),
    body: z.string().trim().min(3),
  })
  .strict();

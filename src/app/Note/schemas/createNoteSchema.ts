import { Schema, z } from "zod";
import { CreateNoteDto } from "../dtos/CreateNoteDto";

export const createNoteSchema: Schema<Omit<CreateNoteDto, "author">> = z.object(
  {
    title: z.string(),
    body: z.string(),
  },
);

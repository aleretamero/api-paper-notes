import { Note } from "../../database/models/Note";
import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { NoteEntity } from "./entity/NoteEntity";

export class NoteRepository {
  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return Note.create(createNoteDto);
  };

  findById = (id: string): Promise<NoteEntity | null> => {
    return Note.findById(id);
  };
}

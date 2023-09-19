import { Note } from "../../database/models/Note";
import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { UpdateNoteDto } from "./dtos/UpdateNoteDto";
import { NoteEntity } from "./entity/NoteEntity";

export class NoteRepository {
  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return Note.create(createNoteDto);
  };

  findByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId });
  };

  findById = (id: string): Promise<NoteEntity | null> => {
    return Note.findById(id);
  };

  update = async (
    id: string,
    { title, body }: UpdateNoteDto,
  ): Promise<NoteEntity> => {
    return Note.findByIdAndUpdate(
      id,
      { $set: { title, body, updated_at: new Date() } },
      { upsert: true, new: true },
    );
  };
}

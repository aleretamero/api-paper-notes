import { Note } from "../../database/models/Note";
import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { UpdateNoteDto } from "./dtos/UpdateNoteDto";
import { NoteEntity } from "./entity/NoteEntity";
import { INoteRepository } from "./interfaces/INoteRepository";

export class NoteRepository implements INoteRepository {
  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return Note.create(createNoteDto);
  };

  findByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId });
  };

  findById = (id: string): Promise<NoteEntity | null> => {
    return Note.findById(id);
  };

  searchByAuthor = (authorId: string, query: string): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId }).find({ $text: { $search: query } });
  };

  searchBodiesByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId }, "body");
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

  delete = async (id: string): Promise<NoteEntity | null> => {
    return Note.findByIdAndDelete(id);
  };
}

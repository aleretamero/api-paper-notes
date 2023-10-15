import { Note } from "../../database/models/Note";
import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { UpdateNoteDto } from "./dtos/UpdateNoteDto";
import { NoteEntity } from "./entity/NoteEntity";
import { INoteRepository } from "./interfaces/INoteRepository";

export class NoteRepository implements INoteRepository {
  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return Note.create(createNoteDto);
  };

  findAllByAuthorId = (authorId: string): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId });
  };

  findById = (id: string): Promise<NoteEntity | null> => {
    return Note.findById(id);
  };

  searchAllByAuthorId = (
    authorId: string,
    query: string,
  ): Promise<NoteEntity[]> => {
    return Note.find({ author: authorId }).find({ $text: { $search: query } });
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

  changeStatus = async (id: string, status: boolean): Promise<NoteEntity> => {
    return Note.findByIdAndUpdate(
      id,
      { $set: { done: status } },
      { upsert: true, new: true },
    );
  };

  changeVisibility = async (
    id: string,
    visibility: boolean,
  ): Promise<NoteEntity> => {
    return Note.findByIdAndUpdate(
      id,
      { $set: { public: visibility } },
      { upsert: true, new: true },
    );
  };

  delete = async (id: string): Promise<NoteEntity | null> => {
    return Note.findByIdAndDelete(id);
  };
}

import { CreateNoteDto } from "../dtos/CreateNoteDto";
import { UpdateNoteDto } from "../dtos/UpdateNoteDto";
import { NoteEntity } from "../entity/NoteEntity";

export interface INoteRepository {
  create: (createNoteDto: CreateNoteDto) => Promise<NoteEntity>;

  findByAuthor: (authorId: string) => Promise<NoteEntity[]>;

  findById: (id: string) => Promise<NoteEntity | null>;

  searchByAuthor: (authorId: string, query: string) => Promise<NoteEntity[]>;

  searchBodiesByAuthor: (authorId: string) => Promise<NoteEntity[]>;

  update: (id: string, { title, body }: UpdateNoteDto) => Promise<NoteEntity>;

  delete: (id: string) => Promise<NoteEntity | null>;
}

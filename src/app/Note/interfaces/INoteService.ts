import { CreateNoteDto } from "../dtos/CreateNoteDto";
import { UpdateNoteDto } from "../dtos/UpdateNoteDto";
import { NoteEntity } from "../entity/NoteEntity";

export interface INoteService {
  create: (createNoteDto: CreateNoteDto) => Promise<NoteEntity>;

  findByAuthor: (authorId: string) => Promise<NoteEntity[]>;

  searchByAuthor: (authorId: string, query: string) => Promise<NoteEntity[]>;

  searchBodiesByAuthor: (authorId: string) => Promise<NoteEntity[]>;

  findById: (noteId: string, userId: string) => Promise<NoteEntity>;

  update: (
    noteId: string,
    userId: string,
    updateNoteDto: UpdateNoteDto,
  ) => Promise<NoteEntity>;

  delete: (noteId: string, userId: string) => Promise<NoteEntity>;

  isOwner: (note: NoteEntity, userId: string) => boolean;
}

import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { UpdateNoteDto } from "./dtos/UpdateNoteDto";

import { NoteEntity } from "./entity/NoteEntity";
import { INoteRepository } from "./interfaces/INoteRepository";
import { INoteService } from "./interfaces/INoteService";

export class NoteService implements INoteService {
  constructor(private readonly noteRepository: INoteRepository) {}

  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return this.noteRepository.create(createNoteDto);
  };

  findByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return this.noteRepository.findByAuthor(authorId);
  };

  searchByAuthor = (authorId: string, query: string): Promise<NoteEntity[]> => {
    return this.noteRepository.searchByAuthor(authorId, query);
  };

  searchBodiesByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return this.noteRepository.searchBodiesByAuthor(authorId);
  };

  findById = async (noteId: string, userId: string): Promise<NoteEntity> => {
    const note = await this.noteRepository.findById(noteId);

    if (!note) throw new Error(`Note: _id ${noteId} not found!`);

    if (!this.isOwner(note, userId)) throw new Error("Permission denied");

    return note;
  };

  update = async (
    noteId: string,
    userId: string,
    updateNoteDto: UpdateNoteDto,
  ): Promise<NoteEntity> => {
    await this.findById(noteId, userId);

    return this.noteRepository.update(noteId, updateNoteDto);
  };

  delete = async (noteId: string, userId: string): Promise<NoteEntity> => {
    await this.findById(noteId, userId);

    return this.noteRepository.delete(noteId) as Promise<NoteEntity>;
  };

  isOwner = (note: NoteEntity, userId: string): boolean => {
    if (JSON.stringify(userId) === JSON.stringify(note.author)) return true;
    else return false;
  };
}

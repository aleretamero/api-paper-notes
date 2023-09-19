import { NoteRepository } from "./NoteRepository";
import { CreateNoteDto } from "./dtos/CreateNoteDto";

import { NoteEntity } from "./entity/NoteEntity";

export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    return this.noteRepository.create(createNoteDto);
  };

  findByAuthor = (authorId: string): Promise<NoteEntity[]> => {
    return this.noteRepository.findByAuthor(authorId);
  };

  findById = async (noteId: string, userId: string): Promise<NoteEntity> => {
    const note = await this.noteRepository.findById(noteId);

    if (!note) throw new Error(`Note: _id ${noteId} not found!`);

    if (!this.isOwner(note, userId)) throw new Error("Permission denied");

    return note;
  };

  isOwner = (note: NoteEntity, userId: string): boolean => {
    if (JSON.stringify(userId) === JSON.stringify(note.author)) return true;
    else return false;
  };
}

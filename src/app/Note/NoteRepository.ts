import { Note } from "../../database/models/Note";
import { InternalServerError } from "../../helpers/classes/InternalServerError";
import { CreateNoteDto } from "./dtos/CreateNoteDto";
import { UpdateNoteDto } from "./dtos/UpdateNoteDto";
import { NoteEntity } from "./entity/NoteEntity";
import { INoteRepository } from "./interfaces/INoteRepository";

export class NoteRepository implements INoteRepository {
  create = (createNoteDto: CreateNoteDto): Promise<NoteEntity> => {
    try {
      return Note.create(createNoteDto);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to create the note. Please try again later",
      );
    }
  };

  findAllByAuthorId = (authorId: string): Promise<NoteEntity[]> => {
    try {
      return Note.find({ author: authorId });
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the notes. Please try again later",
      );
    }
  };

  findById = (id: string): Promise<NoteEntity | null> => {
    try {
      return Note.findById(id);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the note. Please try again later",
      );
    }
  };

  searchAllByAuthorId = (
    authorId: string,
    query: string,
  ): Promise<NoteEntity[]> => {
    try {
      return Note.find({ author: authorId }).find({
        $text: { $search: query },
      });
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the notes. Please try again later",
      );
    }
  };

  update = async (
    id: string,
    { title, body }: UpdateNoteDto,
  ): Promise<NoteEntity> => {
    try {
      return Note.findByIdAndUpdate(
        id,
        { $set: { title, body, updated_at: new Date() } },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to update the note. Please try again later",
      );
    }
  };

  changeStatus = async (id: string, status: boolean): Promise<NoteEntity> => {
    try {
      return Note.findByIdAndUpdate(
        id,
        { $set: { done: status } },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to update the note. Please try again later",
      );
    }
  };

  changeVisibility = async (
    id: string,
    visibility: boolean,
  ): Promise<NoteEntity> => {
    try {
      return Note.findByIdAndUpdate(
        id,
        { $set: { public: visibility } },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to update the note. Please try again later",
      );
    }
  };

  delete = async (id: string): Promise<NoteEntity | null> => {
    try {
      return Note.findByIdAndDelete(id);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to delete the note. Please try again later",
      );
    }
  };
}

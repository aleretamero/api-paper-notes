import { ObjectId } from "mongoose";
import { ReturnUserDto } from "../../User/dtos/ReturnUserDto";
import { NoteEntity } from "../entity/NoteEntity";

export class ReturnNoteDto {
  public readonly _id: string;
  public readonly title: string;
  public readonly body: string;
  public readonly author: ReturnUserDto | ObjectId;
  public readonly done: boolean;
  public readonly public: boolean;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(note: NoteEntity) {
    this._id = note._id;
    this.title = note.title;
    this.body = note.body;
    this.author = note.author;
    this.done = note.done;
    this.public = note.public;
    this.createdAt = note.createdAt;
    this.updatedAt = note.updatedAt;
  }
}

import { ObjectId } from "mongoose";
import { NoteEntity } from "../../Note/entity/NoteEntity";
import { UserEntity } from "../../User/entity/UserEntity";

export interface CommentEntity {
  _id: string;
  body: string;
  note: NoteEntity | ObjectId;
  user: UserEntity | ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

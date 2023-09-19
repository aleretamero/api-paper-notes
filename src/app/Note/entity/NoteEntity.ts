import { UserEntity } from "../../User/entity/UserEntity";
import { ObjectId } from "mongoose";

export interface NoteEntity {
  _id: string;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
  author: UserEntity | ObjectId;
}

import { UserEntity } from "../../User/entity/UserEntity";
import { ObjectId } from "mongoose";

export interface NoteEntity {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  author: UserEntity | ObjectId;
}

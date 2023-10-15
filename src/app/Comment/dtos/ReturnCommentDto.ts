import { ObjectId } from "mongoose";
import { ReturnUserDto } from "../../User/dtos/ReturnUserDto";
import { ReturnNoteDto } from "../../Note/dtos/ReturnNoteDto";
import { CommentEntity } from "../entity/CommentEntity";

export class ReturnCommentDto {
  public readonly _id: string;
  public readonly body: string;
  public readonly note: ReturnNoteDto | ObjectId;
  public readonly user: ReturnUserDto | ObjectId;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(comment: CommentEntity) {
    this._id = comment._id;
    this.body = comment.body;
    this.note = comment.note;
    this.user = comment.user;
    this.createdAt = comment.createdAt;
    this.updatedAt = comment.updatedAt;
  }
}

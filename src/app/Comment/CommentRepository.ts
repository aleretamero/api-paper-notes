import { Comment } from "../../database/models/Comment";
import { InternalServerError } from "../../helpers/classes/InternalServerError";
import { CreateCommentDto } from "./dtos/CreateCommentDto";
import { UpdateCommentDto } from "./dtos/UpdateCommentDto";
import { CommentEntity } from "./entity/CommentEntity";
import { ICommentRepository } from "./interfaces/ICommentRepository";

export class CommentRepository implements ICommentRepository {
  create = async (
    createCommentDto: CreateCommentDto,
  ): Promise<CommentEntity> => {
    try {
      return await Comment.create(createCommentDto);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to create the comment. Please try again later",
      );
    }
  };

  findAllByNoteId = async (noteId: string): Promise<CommentEntity[]> => {
    try {
      return await Comment.find({ note: noteId });
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the comments. Please try again later",
      );
    }
  };

  findById = async (id: string): Promise<CommentEntity | null> => {
    try {
      return await Comment.findById(id);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to find the comment. Please try again later",
      );
    }
  };

  update = async (
    id: string,
    { body }: UpdateCommentDto,
  ): Promise<CommentEntity> => {
    try {
      return Comment.findByIdAndUpdate(
        id,
        { $set: { body, updated_at: new Date() } },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to update the comment. Please try again later",
      );
    }
  };

  delete = async (id: string): Promise<CommentEntity | null> => {
    try {
      return Comment.findByIdAndDelete(id);
    } catch (error) {
      throw new InternalServerError(
        "An error occurred while trying to delete the comment. Please try again later",
      );
    }
  };
}

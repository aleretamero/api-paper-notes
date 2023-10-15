import { Comment } from "../../database/models/Comment";
import { CreateCommentDto } from "./dtos/CreateCommentDto";
import { UpdateCommentDto } from "./dtos/UpdateCommentDto";
import { CommentEntity } from "./entity/CommentEntity";
import { ICommentRepository } from "./interfaces/ICommentRepository";

export class CommentRepository implements ICommentRepository {
  create = async (createCommentDto: CreateCommentDto): Promise<CommentEntity> => {
    return await Comment.create(createCommentDto);
  };

  findAllByNoteId = async (noteId: string): Promise<CommentEntity[]> => {
    return await Comment.find({ note: noteId });
  };

  findById = async (id: string): Promise<CommentEntity | null> => {
    return await Comment.findById(id);
  };

  update = async (id: string, { body }: UpdateCommentDto): Promise<CommentEntity> => {
    return Comment.findByIdAndUpdate(
      id,
      { $set: { body, updated_at: new Date() } },
      { upsert: true, new: true },
    );
  };

  delete = async (id: string): Promise<CommentEntity | null> => {
    return Comment.findByIdAndDelete(id);
  };
}

import { CreateCommentDto } from "../dtos/CreateCommentDto";
import { UpdateCommentDto } from "../dtos/UpdateCommentDto";
import { CommentEntity } from "../entity/CommentEntity";

export interface ICommentRepository {
  create: (createCommentDto: CreateCommentDto) => Promise<CommentEntity>;

  findAllByNoteId: (noteId: string) => Promise<CommentEntity[]>;

  findById: (id: string) => Promise<CommentEntity | null>;

  update: (id: string, updateCommentDto: UpdateCommentDto) => Promise<CommentEntity>;

  delete: (id: string) => Promise<CommentEntity | null>;
}

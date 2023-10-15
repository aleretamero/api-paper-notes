import { CreateCommentDto } from "../dtos/CreateCommentDto";
import { ReturnCommentDto } from "../dtos/ReturnCommentDto";
import { UpdateCommentDto } from "../dtos/UpdateCommentDto";

export interface ICommentService {
  create: (createCommentDto: CreateCommentDto) => Promise<ReturnCommentDto>;

  findAllByNoteId: (noteId: string) => Promise<ReturnCommentDto[]>;

  findById: (id: string) => Promise<ReturnCommentDto>;

  update: (
    id: string,
    updateCommentDto: UpdateCommentDto,
  ) => Promise<ReturnCommentDto>;

  delete: (id: string) => Promise<ReturnCommentDto>;
}

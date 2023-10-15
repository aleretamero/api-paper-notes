import { NotFound } from "../../helpers/classes/NotFound";
import { CreateCommentDto } from "./dtos/CreateCommentDto";
import { ReturnCommentDto } from "./dtos/ReturnCommentDto";
import { UpdateCommentDto } from "./dtos/UpdateCommentDto";

import { CommentEntity } from "./entity/CommentEntity";
import { ICommentRepository } from "./interfaces/ICommentRepository";
import { ICommentService } from "./interfaces/ICommentService";

export class CommentService implements ICommentService {
  constructor(private readonly commentRepository: ICommentRepository) {}

  create = async (
    createCommentDto: CreateCommentDto,
  ): Promise<ReturnCommentDto> => {
    const comment = await this.commentRepository.create(createCommentDto);

    return new ReturnCommentDto(comment);
  };

  findAllByNoteId = async (noteId: string): Promise<ReturnCommentDto[]> => {
    const comments = await this.commentRepository.findAllByNoteId(noteId);

    return comments.map((comment) => new ReturnCommentDto(comment));
  };

  findById = async (id: string): Promise<ReturnCommentDto> => {
    const comment = await this.commentRepository.findById(id);

    if (!comment) throw new NotFound(`Comment: _id ${id} not found!`);

    return new ReturnCommentDto(comment);
  };

  update = async (
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<ReturnCommentDto> => {
    await this.findById(id);

    const comment = await this.commentRepository.update(id, updateCommentDto);

    return new ReturnCommentDto(comment);
  };

  delete = async (id: string): Promise<ReturnCommentDto> => {
    await this.findById(id);

    const comment = (await this.commentRepository.delete(id)) as CommentEntity;

    return new ReturnCommentDto(comment);
  };
}

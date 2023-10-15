import { CreateCommentDto } from "./dtos/CreateCommentDto";
import { UpdateCommentDto } from "./dtos/UpdateCommentDto";

import { CommentEntity } from "./entity/CommentEntity";
import { ICommentRepository } from "./interfaces/ICommentRepository";
import { ICommentService } from "./interfaces/ICommentService";

export class CommentService implements ICommentService {
  constructor(private readonly noteRepository: ICommentRepository) {}

  create = (createCommentDto: CreateCommentDto): Promise<CommentEntity> => {
    return this.noteRepository.create(createCommentDto);
  };

  findAllByNoteId = (noteId: string): Promise<CommentEntity[]> => {
    return this.noteRepository.findAllByNoteId(noteId);
  };

  findById = async (id: string): Promise<CommentEntity> => {
    const note = await this.noteRepository.findById(id);

    if (!note) throw new Error(`Comment: _id ${id} not found!`);

    return note;
  };

  update = async (
    id: string,

    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentEntity> => {
    await this.findById(id);

    return this.noteRepository.update(id, updateCommentDto);
  };

  delete = async (id: string): Promise<CommentEntity> => {
    await this.findById(id);

    return this.noteRepository.delete(id) as Promise<CommentEntity>;
  };
}

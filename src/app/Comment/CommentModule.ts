import { CommentController } from "./CommentController";
import { CommentRepository } from "./CommentRepository";
import { CommentService } from "./CommentService";
import { ICommentController } from "./interfaces/ICommentController";
import { ICommentRepository } from "./interfaces/ICommentRepository";
import { ICommentService } from "./interfaces/ICommentService";

class CommentModule {
  private readonly commentRepository: ICommentRepository;
  private readonly commentService: ICommentService;
  public readonly commentController: ICommentController;

  constructor() {
    this.commentRepository = new CommentRepository();
    this.commentService = new CommentService(this.commentRepository);
    this.commentController = new CommentController(this.commentService);
  }
}

const commentModule = new CommentModule();

export const commentController = commentModule.commentController;

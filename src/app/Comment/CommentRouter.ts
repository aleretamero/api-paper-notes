import { Router } from "express";
import { isAuthenticated } from "../../middlewares/Authenticated";
import { commentController } from "./CommentModule";
import { ICommentController } from "./interfaces/ICommentController";

class CommentRouter {
  public readonly router = Router();

  constructor(private readonly commentController: ICommentController) {
    this.routes();
  }

  private routes(): void {
    this.router.post("/", isAuthenticated, this.commentController.create);
    this.router.get("/note/:id", isAuthenticated, this.commentController.getAllByNoteId);
    this.router.get("/:id", isAuthenticated, this.commentController.show);
    this.router.patch("/:id", isAuthenticated, this.commentController.update);
    this.router.delete("/:id", isAuthenticated, this.commentController.delete);
  }
}

export const commentRouter = new CommentRouter(commentController).router;

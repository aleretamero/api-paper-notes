import { Router } from "express";
import { isAuthenticated } from "../../middlewares/Authenticated";
import { noteController } from "./NoteModule";
import { INoteController } from "./interfaces/INoteController";

class NoteRouter {
  public readonly router = Router();

  constructor(private readonly noteController: INoteController) {
    this.routes();
  }

  private routes(): void {
    this.router.post("/", isAuthenticated, this.noteController.create);
    this.router.get("/", isAuthenticated, this.noteController.index);
    this.router.get("/search", isAuthenticated, this.noteController.search);
    this.router.get("/:id", isAuthenticated, this.noteController.show);
    this.router.put(
      "/changeStatus/:id",
      isAuthenticated,
      this.noteController.changeStatus,
    );
    this.router.put(
      "/changeVisibility/:id",
      isAuthenticated,
      this.noteController.changeVisibility,
    );
    this.router.put("/:id", isAuthenticated, this.noteController.update);
    this.router.delete("/:id", isAuthenticated, this.noteController.delete);
  }
}

export const noteRouter = new NoteRouter(noteController).router;

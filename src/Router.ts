import { Router } from "express";

import { userController } from "./app/User/UserModule";
import { noteController } from "./app/Note/NoteModule";
import { isAuthenticated } from "./middlewares/Authenticated";

class Routes {
  public readonly router = Router();

  constructor() {
    this.indexRoutes();
    this.userRoutes();
    this.noteRoutes();
  }

  private indexRoutes(): void {
    this.router.get("/", (_req, res) => res.json({ message: "Hello world!" }));
  }

  private userRoutes(): void {
    this.router.post("/users/register", userController.create);
    this.router.post("/users/login", userController.login);
    this.router.get("/users/show", isAuthenticated, userController.show);
  }

  private noteRoutes(): void {
    this.router.post("/notes", isAuthenticated, noteController.create);
    this.router.get("/notes", isAuthenticated, noteController.index);
    this.router.get("/notes/search", isAuthenticated, noteController.search);
    this.router.get(
      "/notes/searchBodies",
      isAuthenticated,
      noteController.searchBodies,
    );
    this.router.get("/notes/:id", isAuthenticated, noteController.show);
    this.router.patch("/notes/:id", isAuthenticated, noteController.update);
    this.router.delete("/notes/:id", isAuthenticated, noteController.delete);
  }
}

export const router = new Routes().router;

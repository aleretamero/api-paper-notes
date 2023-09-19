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
  }

  private noteRoutes(): void {
    this.router.post("/notes", isAuthenticated, noteController.create);
    this.router.get("/notes/:id", isAuthenticated, noteController.show);
  }
}

export const router = new Routes().router;

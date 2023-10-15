import express, { Express } from "express";
import cors from "cors";

import { errorHandler } from "./middlewares/ErrorHandler";
import { corsOptions } from "./middlewares/Cors";
import { resolve } from "path";

import { userRouter } from "./app/User/UserRouter";
import { noteRouter } from "./app/Note/NoteRouter";
import { commentRouter } from "./app/Comment/CommentRouter";

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  private routes(): void {
    this.app.use("/users", userRouter);
    this.app.use("/notes", noteRouter);
    this.app.use("/comments", commentRouter);
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(resolve(__dirname, "..", "public")));
    this.app.use(cors(corsOptions));
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }
}

export const app = new App().app;

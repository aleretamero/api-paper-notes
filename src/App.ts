import express, { Express, Router } from "express";
import cors from "cors";
import { resolve } from "node:path";
import { corsOptions } from "./middlewares/Cors";
import { errorHandler } from "./middlewares/ErrorHandler";
import { userRouter } from "./app/User/UserRouter";
import { noteRouter } from "./app/Note/NoteRouter";
import { commentRouter } from "./app/Comment/CommentRouter";

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.views();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  private routes(): void {
    this.app.get("/", (_req, res) => res.render(resolve(__dirname, "views")));
    this.app.get("/health", (_req, res) => res.json({ status: "ok" }));
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

  private views(): void {
    this.app.set("views", resolve(__dirname, "views"));
    this.app.set("view engine", "ejs");
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }
}

export const app = new App().app;

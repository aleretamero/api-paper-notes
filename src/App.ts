import express, { Express } from "express";
import { resolve } from "path";

import cors from "cors";
import { corsOptions } from "./middlewares/Cors";

import { errorHandler } from "./middlewares/ErrorHandler";

import { userRouter } from "./app/User/UserRouter";
import { noteRouter } from "./app/Note/NoteRouter";
import { commentRouter } from "./app/Comment/CommentRouter";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  private routes(): void {
    this.app.get("/", (_req, res) =>
      res.sendFile(resolve(__dirname, "..", "public", "index.html")),
    );
    this.app.use("/users", userRouter);
    this.app.use("/notes", noteRouter);
    this.app.use("/comments", commentRouter);
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    this.app.use("/", express.static(resolve(__dirname, "..", "public")));
    this.app.use(cors(corsOptions));
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }
}

export const app = new App().app;

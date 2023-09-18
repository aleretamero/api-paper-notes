import express, { type Express } from "express";
import cors from "cors";

import { errorHandler } from "./middlewares/ErrorHandler";
import { corsOptions } from "./middlewares/Cors";
import { routes } from "./Router";
import { join } from "path";

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.app.use(routes);
    this.errorHandler();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(join(__dirname, "public")));
    this.app.use(cors(corsOptions));
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }
}

export const app = new App().app;

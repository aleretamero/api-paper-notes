import express, { type Express } from 'express';
import cors from 'cors';

import { errorHandler } from './middlewares/ErrorHandler';
import { corsOptions } from './middlewares/Cors';
import { routes } from './Router';

class App {
  public readonly app: Express;

  constructor() {
    this.app = express();
    this.app.use(routes);
    this.middlewares();
    this.errorHandler();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }
}

export const app = new App().app;

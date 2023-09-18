import { Router } from 'express';

class Routes {
  public readonly routes = Router();

  constructor() {
    this.userRoutes();
    this.notesRoutes();
    this.helloRoutes();
  }

  private helloRoutes(): void {
    this.routes.get('/', (_req, res) =>
      res.status(200).json({ message: 'Hello world!' }),
    );
  }

  private userRoutes(): void {}

  private notesRoutes(): void {}
}

export const routes = new Routes().routes;

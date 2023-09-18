import { Router } from "express";

class Routes {
  public readonly routes = Router();

  constructor() {
    this.userRoutes();
    this.notesRoutes();
    this.helloRoutes();
    this.userRoutes();
    this.notesRoutes();
  }

  private helloRoutes(): void {
    this.routes.get("/", (_req, res) => res.json({ message: "Hello world!" }));
  }

  private userRoutes(): void {}

  private notesRoutes(): void {}
}

export const routes = new Routes().routes;

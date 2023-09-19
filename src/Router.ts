import { Router } from "express";

import { userController } from "./app/User/UserModule";

class Routes {
  public readonly router = Router();

  constructor() {
    this.routes();
  }

  private routes(): void {
    this.router.get("/", (_req, res) => res.json({ message: "Hello world!" }));
    this.router.post("/users/register", userController.create);
  }
}

export const router = new Routes().router;

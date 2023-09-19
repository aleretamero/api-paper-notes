import { Router } from "express";

import { userController } from "./app/User/UserModule";

class Routes {
  public readonly router = Router();

  constructor() {
    this.indexRoutes();
    this.userRoutes();
  }

  private indexRoutes(): void {
    this.router.get("/", (_req, res) => res.json({ message: "Hello world!" }));
  }

  private userRoutes(): void {
    this.router.post("/users/register", userController.create);
    this.router.post("/users/login", userController.login);
  }
}

export const router = new Routes().router;

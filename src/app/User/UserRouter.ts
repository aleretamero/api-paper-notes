import { Router } from "express";
import { isAuthenticated } from "../../middlewares/Authenticated";
import { userController } from "./UserModule";

class UserRouter {
  public readonly router = Router();
  private readonly userController = userController;

  constructor() {
    this.routes();
  }

  private routes(): void {
    this.router.post("/register", this.userController.register);
    this.router.post("/login", this.userController.login);
    this.router.post("/show", isAuthenticated, this.userController.show);
  }
}

export const userRouter = new UserRouter().router;

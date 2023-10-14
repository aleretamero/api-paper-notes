import { Router } from "express";
import { isAuthenticated } from "../../middlewares/Authenticated";
import { userController } from "./UserModule";
import { IUserController } from "./interfaces/IUserController";

class UserRouter {
  public readonly router = Router();

  constructor(private readonly userController: IUserController) {
    this.routes();
  }

  private routes(): void {
    this.router.post("/register", this.userController.register);
    this.router.post("/login", this.userController.login);
    this.router.get("/show", isAuthenticated, this.userController.show);
  }
}

export const userRouter = new UserRouter(userController).router;

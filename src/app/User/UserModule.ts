import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";
import { IUserController } from "./interfaces/IUserController";
import { IUserRepository } from "./interfaces/IUserRepository";
import { IUserService } from "./interfaces/IUserService";

class UserModule {
  private readonly userRepository: IUserRepository;
  public readonly userService: IUserService;
  public readonly userController: IUserController;

  constructor() {
    this.userRepository = new UserRepository();
    this.userService = new UserService(this.userRepository);
    this.userController = new UserController(this.userService);
  }
}

const userModule = new UserModule();

export const userService = userModule.userService;
export const userController = userModule.userController;

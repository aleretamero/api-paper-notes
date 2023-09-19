import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";

class UserModule {
  private readonly userRepository: UserRepository;
  private readonly userService: UserService;
  public readonly userController: UserController;

  constructor() {
    this.userRepository = new UserRepository();
    this.userService = new UserService(this.userRepository);
    this.userController = new UserController(this.userService);
  }
}

export const userController = new UserModule().userController;

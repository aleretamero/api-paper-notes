import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";

class UserModule {
  private readonly userRepository: UserRepository;
  public readonly userService: UserService;
  public readonly userController: UserController;

  constructor() {
    this.userRepository = new UserRepository();
    this.userService = new UserService(this.userRepository);
    this.userController = new UserController(this.userService);
  }
}

const userModule = new UserModule();

export const userService = userModule.userService;
export const userController = userModule.userController;

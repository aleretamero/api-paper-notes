import { NextFunction, Request, Response, Router } from "express";
import { UserService } from "./UserService";
import { ReturnUserDto } from "./dtos/ReturnUserDto";
import { createUserSchema } from "./schemas/createUserSchema";
import { loginUserSchema } from "./schemas/loginUserSchema";

export class UserController {
  public readonly userRouter = Router();

  constructor(private readonly userService: UserService) {}

  register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const createUserDto = createUserSchema.parse(req.body);

      const user = await this.userService
        .create(createUserDto)
        .then((user) => new ReturnUserDto(user));

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

  login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const loginUserDto = loginUserSchema.parse(req.body);

      const returnLoginDto = await this.userService.login(loginUserDto);

      res.status(200).json(returnLoginDto);
    } catch (error) {
      next(error);
    }
  };

  show = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const user = req.user!;

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };
}

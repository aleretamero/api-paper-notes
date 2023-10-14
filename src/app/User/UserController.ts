import { NextFunction, Request, Response } from "express";
import { ReturnUserDto } from "./dtos/ReturnUserDto";
import { createUserSchema } from "./schemas/createUserSchema";
import { loginUserSchema } from "./schemas/loginUserSchema";
import { IUserService } from "./interfaces/IUserService";
import { IUserController } from "./interfaces/IUserController";

export class UserController implements IUserController {
  constructor(private readonly userService: IUserService) {}

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

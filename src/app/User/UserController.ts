import { NextFunction, Request, Response } from "express";
import { UserService } from "./UserService";
import { ReturnUserDto } from "./dtos/ReturnUserDto";

export class UserController {
  constructor(private readonly userService: UserService) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const createUserDto = req.body;

      const user = new ReturnUserDto(
        await this.userService.create(createUserDto),
      );

      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };
}

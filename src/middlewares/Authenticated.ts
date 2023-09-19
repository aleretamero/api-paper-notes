import type { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { z } from "zod";

import { userService } from "../app/User/UserModule";
import { UserService } from "../app/User/UserService";
import { ReturnUserDto } from "../app/User/dtos/ReturnUserDto";

class Authenticated {
  constructor(private readonly userService: UserService) {}

  private readonly schema = z.object({
    authorization: z.string(),
  });

  public readonly isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { authorization } = this.schema.parse(req.headers);

      const token = authorization.replace(/^Bearer /, "");

      const payload = this.isValidToken(token);

      if (!payload) throw new Error("Unauthorized: Invalid token.");

      const isValidUser = await this.isValidUser(payload);

      if (!isValidUser) {
        throw new Error("Unauthorized: Please log in again to continue.");
      }

      req.userId = payload._id;

      next();
    } catch (error) {
      next(error);
    }
  };

  private readonly isValidToken = (
    token: string,
  ): ReturnUserDto | undefined => {
    try {
      const payload = verify(token, process.env.JWT_TOKEN!) as ReturnUserDto;

      return payload;
    } catch (error) {
      return undefined;
    }
  };

  private readonly isValidUser = async (
    payload: ReturnUserDto,
  ): Promise<boolean> => {
    const user = await this.userService
      .findById(payload._id)
      .catch(() => undefined);

    if (!user) return false;
    if (payload.email !== user.email) return false;
    if (payload.name !== user.name) return false;

    return true;
  };
}

export const isAuthenticated = new Authenticated(userService).isAuthenticated;

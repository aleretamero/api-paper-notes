import type { NextFunction, Request, Response } from "express";

import { z } from "zod";

class Authenticated {
  private readonly schema = z.object({
    authorization: z.string(),
  });

  public readonly isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      next();
    } catch (error) {
      next(error);
    }
  };
}

export const isAuthenticated = new Authenticated().isAuthenticated;

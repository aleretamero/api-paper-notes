import { NextFunction, Request, Response } from "express";

export interface INoteController {
  create: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  index: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  show: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  search: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  searchBodies: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  update: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

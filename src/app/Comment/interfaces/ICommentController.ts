import { NextFunction, Request, Response } from "express";

export interface ICommentController {
  create: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  getAllByNoteId: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  show: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  update: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  delete: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

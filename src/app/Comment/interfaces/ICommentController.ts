import { RequestHandler } from "express";

export interface ICommentController {
  create: RequestHandler;

  getAllByNoteId: RequestHandler;

  show: RequestHandler;

  update: RequestHandler;

  delete: RequestHandler;
}

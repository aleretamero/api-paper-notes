import { RequestHandler } from "express";

export interface INoteController {
  create: RequestHandler;

  index: RequestHandler;

  show: RequestHandler;

  search: RequestHandler;

  update: RequestHandler;

  delete: RequestHandler;
}

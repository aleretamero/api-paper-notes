import { RequestHandler } from "express";

export interface IUserController {
  register: RequestHandler;

  login: RequestHandler;

  show: RequestHandler;
}

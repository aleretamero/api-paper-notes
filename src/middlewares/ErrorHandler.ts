import { ErrorRequestHandler } from "express";

class ErrorHandler {
  readonly errorHandler: ErrorRequestHandler = async (
    error,
    req,
    res,
    next,
  ) => {
    if (error) {
      console.log(error);
    }

    next();
  };
}

export const errorHandler = new ErrorHandler().errorHandler;

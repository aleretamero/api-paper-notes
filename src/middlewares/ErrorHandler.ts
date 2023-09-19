import { ErrorRequestHandler } from "express";

class ErrorHandler {
  readonly errorHandler: ErrorRequestHandler = async (error, req, res) => {
    if (error) {
      return res.status(500).json({ error });
    }
  };
}

export const errorHandler = new ErrorHandler().errorHandler;

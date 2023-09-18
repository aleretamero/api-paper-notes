import type { ErrorRequestHandler } from "express";

class ErrorHandler {
  readonly errorHandler: ErrorRequestHandler = async (error, req, res) => {
    console.log(error);

    return res.status(500).json({ error: error?.message });
  };
}
export const errorHandler = new ErrorHandler().errorHandler;

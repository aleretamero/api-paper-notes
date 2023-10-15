import { ErrorRequestHandler } from "express";
import { CustomError } from "../helpers/classes/CustomError";

class ErrorHandler {
  readonly errorHandler: ErrorRequestHandler = async (
    error,
    req,
    res,
    next,
  ) => {
    console.log(error);

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error) {
      return res.status(500).send("deu ruim");
    }

    next();
  };
}

export const errorHandler = new ErrorHandler().errorHandler;

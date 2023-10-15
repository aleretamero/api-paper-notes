import { ErrorRequestHandler } from "express";
import { CustomError } from "../helpers/classes/CustomError";
import { ZodError } from "zod";

class ErrorHandler {
  readonly errorHandler: ErrorRequestHandler = async (
    error,
    _req,
    res,
    next,
  ) => {
    console.log(error);

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    if (error instanceof ZodError) {
      const zodErrors: Record<string, string> = {};

      error.issues.forEach((zodError) => {
        const [path] = zodError.path;
        zodErrors[path ?? "error"] = zodError.message;
      });

      return res.status(400).json({ errors: zodErrors });
    }

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    next();
  };
}

export const errorHandler = new ErrorHandler().errorHandler;

import { NextFunction, Request, Response } from "express";
import { NoteService } from "./NoteService";
import { ReturnNoteDto } from "./dtos/ReturnNoteDto";
import { createNoteSchema } from "./schemas/createNoteSchema";
import { idSchema } from "../../helpers/schemas/idSchema";

export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const author = req.userId!;

      const createNoteDto = { ...createNoteSchema.parse(req.body), author };

      const note = new ReturnNoteDto(
        await this.noteService.create(createNoteDto),
      );

      res.status(201).json(note);
    } catch (error) {
      next(error);
    }
  };

  show = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;

      const { id: noteId } = idSchema.parse(req.params);

      const note = new ReturnNoteDto(
        await this.noteService.findById(noteId, userId),
      );

      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  };
}

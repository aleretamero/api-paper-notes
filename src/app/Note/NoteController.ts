import { NextFunction, Request, Response } from "express";
import { createNoteSchema } from "./schemas/createNoteSchema";
import { idSchema } from "../../helpers/schemas/idSchema";
import { updateNoteSchema } from "./schemas/updateNoteSchema";
import { querySchema } from "../../helpers/schemas/querySchema";
import { INoteController } from "./interfaces/INoteController";
import { INoteService } from "./interfaces/INoteService";

export class NoteController implements INoteController {
  constructor(private readonly noteService: INoteService) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const author = req.userId!;

      const createNoteDto = { ...createNoteSchema.parse(req.body), author };

      const note = await this.noteService.create({ ...createNoteDto, author });

      res.status(201).json(note);
    } catch (error) {
      next(error);
    }
  };

  index = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;

      const notes = await this.noteService.findAllByAuthorId(userId);

      res.status(200).json(notes);
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

      const note = await this.noteService.findById(noteId, userId);

      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  };

  search = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;
      const { query } = querySchema.parse(req.query);

      const note = await this.noteService.searchAllByAuthorId(userId, query);

      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;

      const { id: noteId } = idSchema.parse(req.params);
      const updateNoteDto = updateNoteSchema.parse(req.body);

      const note = await this.noteService.update(noteId, userId, updateNoteDto);

      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  };

  delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;

      const { id: noteId } = idSchema.parse(req.params);

      const note = await this.noteService.delete(noteId, userId);

      res.status(204).json(note);
    } catch (error) {
      next(error);
    }
  };
}

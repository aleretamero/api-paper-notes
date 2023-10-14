import { NextFunction, Request, Response } from "express";
import { ReturnNoteDto } from "./dtos/ReturnNoteDto";
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

      const note = await this.noteService
        .create({ ...createNoteDto, author })
        .then((note) => new ReturnNoteDto(note));

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

      const notes = await this.noteService
        .findByAuthor(userId)
        .then((notes) => notes.map((note) => new ReturnNoteDto(note)));

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

      const note = await this.noteService
        .findById(noteId, userId)
        .then((note) => new ReturnNoteDto(note));

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

      const note = await this.noteService
        .searchByAuthor(userId, query)
        .then((notes) => notes.map((note) => new ReturnNoteDto(note)));

      res.status(200).json(note);
    } catch (error) {
      next(error);
    }
  };

  searchBodies = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const userId = req.userId!;

      const note = await this.noteService.searchBodiesByAuthor(userId);
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

      const note = await this.noteService
        .update(noteId, userId, updateNoteDto)
        .then((note) => new ReturnNoteDto(note));

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

      const note = await this.noteService
        .delete(noteId, userId)
        .then((note) => new ReturnNoteDto(note));

      res.status(204).json(note);
    } catch (error) {
      next(error);
    }
  };
}

import { NoteController } from "./NoteController";
import { NoteRepository } from "./NoteRepository";
import { NoteService } from "./NoteService";
import { INoteController } from "./interfaces/INoteController";
import { INoteRepository } from "./interfaces/INoteRepository";
import { INoteService } from "./interfaces/INoteService";

class NoteModule {
  private readonly noteRepository: INoteRepository;
  private readonly noteService: INoteService;
  public readonly noteController: INoteController;

  constructor() {
    this.noteRepository = new NoteRepository();
    this.noteService = new NoteService(this.noteRepository);
    this.noteController = new NoteController(this.noteService);
  }
}

const noteModule = new NoteModule();

export const noteController = noteModule.noteController;

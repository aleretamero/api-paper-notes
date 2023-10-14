import { NoteController } from "./NoteController";
import { NoteRepository } from "./NoteRepository";
import { NoteService } from "./NoteService";

class NoteModule {
  private readonly noteRepository: NoteRepository;
  private readonly noteService: NoteService;
  public readonly noteController: NoteController;

  constructor() {
    this.noteRepository = new NoteRepository();
    this.noteService = new NoteService(this.noteRepository);
    this.noteController = new NoteController(this.noteService);
  }
}

const noteModule = new NoteModule();

export const noteController = noteModule.noteController;

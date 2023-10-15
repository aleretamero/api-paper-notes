import mongoose from "mongoose";
import { NoteEntity } from "../../app/Note/entity/NoteEntity";
112916;

const noteSchema = new mongoose.Schema<NoteEntity>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  done: { type: Boolean, default: false },
  public: { type: Boolean, default: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}).index({ title: "text", body: "text" });

export const Note = mongoose.model<NoteEntity>("Note", noteSchema);

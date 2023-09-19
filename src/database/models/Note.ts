import mongoose from "mongoose";
import { NoteEntity } from "../../app/Note/entity/NoteEntity";

const noteSchema = new mongoose.Schema<NoteEntity>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}).index({ title: "text", body: "text" });

export const Note = mongoose.model<NoteEntity>("Note", noteSchema);

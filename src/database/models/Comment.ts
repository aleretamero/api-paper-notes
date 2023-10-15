import mongoose from "mongoose";
import { CommentEntity } from "../../app/Comment/entity/CommentEntity";

const commentSchema = new mongoose.Schema<CommentEntity>({
  body: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Note",
    required: true,
  },
});

export const Comment = mongoose.model<CommentEntity>("Comment", commentSchema);

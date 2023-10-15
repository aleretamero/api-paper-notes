import { model, Schema } from "mongoose";
import { UserEntity } from "../../app/User/entity/UserEntity";

const userSchema = new Schema<UserEntity>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const User = model<UserEntity>("User", userSchema);

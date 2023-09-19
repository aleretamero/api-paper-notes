import { Schema, z } from "zod";
import { CreateUserDto } from "../dtos/CreateUserDto";

export const createUserSchema: Schema<CreateUserDto> = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

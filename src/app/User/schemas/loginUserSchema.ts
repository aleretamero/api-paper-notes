import { Schema, z } from "zod";
import { LoginUserDto } from "../dtos/LoginUserDto";

export const loginUserSchema: Schema<LoginUserDto> = z.object({
  email: z.string().email(),
  password: z.string(),
});

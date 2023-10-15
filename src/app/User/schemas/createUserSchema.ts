import { Schema, z } from "zod";
import { CreateUserDto } from "../dtos/CreateUserDto";
import { password } from "../../../helpers/regex/password";

export const createUserSchema: Schema<CreateUserDto> = z
  .object({
    name: z.string().trim().min(3),
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(
        password,
        "Password must be at least 8 characters long with uppercase, lowercase, number, and symbol",
      ),
  })
  .strict();

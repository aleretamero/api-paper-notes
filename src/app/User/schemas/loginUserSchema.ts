import { Schema, z } from "zod";
import { LoginUserDto } from "../dtos/LoginUserDto";
import { password } from "../../../helpers/regex/password";

export const loginUserSchema: Schema<LoginUserDto> = z
  .object({
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

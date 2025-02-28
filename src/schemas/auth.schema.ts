import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(255)
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[A-Z]/, {
      message: "Contain at least one uppercase letter.",
    })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

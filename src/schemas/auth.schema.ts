import { z } from "zod";

z.setErrorMap((issue) => {
  return { message: issue.message || "" };
});

export const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 6 characters." })
      .max(50, { message: "Username must be at most 50 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters. " })
      .max(255, { message: "Password must be at mos 255 characters" })
      .trim(),
  })
  .superRefine((data, ctx) => {
    if (!/[a-zA-Z]/.test(data.password) && data.password.length >= 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "One letter required.",
      });
      return;
    }
    if (!/[0-9]/.test(data.password) && data.password.length >= 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "One number required.",
      });
      return;
    }
    if (!/[A-Z]/.test(data.password) && data.password.length >= 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "One uppercase letter required.",
      });
      return;
    }
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

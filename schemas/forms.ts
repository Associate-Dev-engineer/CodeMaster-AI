import { z } from "zod";

// Sign-in Form
export const signInFormSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .transform((val) => val.trim()) // safely trim before validation
    .refine((val) => val.length >= 5, {
      message: "Email is too short",
    }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" })
    .transform((val) => val.trim()),

  rememberMe: z.boolean().catch(false),
});

// Sign-in Form Type
export type SignInFormType = z.infer<typeof signInFormSchema>;
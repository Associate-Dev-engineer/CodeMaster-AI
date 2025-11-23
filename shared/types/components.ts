import { ReactNode } from "react";
import { z } from "zod";

// Button Types
const ActionButtonSchema = z.object({
  styles: z.string().optional(),
  variant: z
    .enum(["link", "default", "destructive", "outline", "secondary", "ghost"])
    .optional(),
  actionFn: z.function().optional(),
});

// Infer TypeScript type from Zod schema
export type ActionButtonProps = z.infer<typeof ActionButtonSchema> & {
  children: ReactNode; // add children separately
};

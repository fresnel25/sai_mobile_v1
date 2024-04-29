import * as z from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 6 characters"),
  phone: z.string().regex(/^\d+$/, "Phone number must be numeric"),
  gender: z.string().min(3),
  birthday: z.string().min(8),
  address: z.string().min(5),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 6 characters"),
})
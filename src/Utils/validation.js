import * as z from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 6 characters"),
  phone: z.string().min(8, "Phone number must be at least 11 characters"),
  gender: z.string().min(3),
  birthday: z.string().min(8, "Birthday must be at least 8 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 6 characters"),
})
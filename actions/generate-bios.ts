"use server";

import { formSchema } from "@/lib/schema";
import * as z from "zod";

export const generateBios = async (
  values: z.infer<typeof formSchema>
): Promise<{ message: string; bios?: string[] }> => {
  await new Promise((res) => setTimeout(res, 2000));
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success) return { message: "Something went wrong!" };
  return { message: "Bios generated.", bios: [] };
};

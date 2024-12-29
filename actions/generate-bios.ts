"use server";

import { grok } from "@/lib/grok";
import { generateObject } from "ai";
import { formSchema } from "@/lib/schema";
import * as z from "zod";
import { Bios } from "@/lib/types";

/**
 * Generates Twitter bios based on user inputs.
 * @param values - Input fields validated against `formSchema`.
 * @returns An object containing a message and optionally a list of bios.
 */
export const generateBios = async (
  values: z.infer<typeof formSchema>
): Promise<{ message: string; bios?: Bios[] }> => {
  const validatedFields = formSchema.safeParse(values);
  if (!validatedFields.success)
    return { message: "Validation failed: Invalid input fields!" };

  const { model, modelRandomness, userQuery, tone, type, emojies } =
    validatedFields.data;
  try {
    const { object } = await generateObject({
      model: grok(model),
      prompt: `Generate exactly 3 Twitter bio for the user query: "${userQuery}". 
- Tone: ${tone}. 
- Type: ${type}. 
- Include images/emojis: ${emojies}.`,
      maxTokens: 1024,
      temperature: modelRandomness ?? 0.6,
      schema: z.object({
        bio: z.array(
          z.object({
            id: z.string(),
            text: z.string(),
          })
        ),
      }),
    });
    return { message: "Bios generated successfully 🎉", bios: object.bio };
  } catch (err) {
    console.log(err);
    return { message: "Something went wrong in generating response 💥" };
  }
};

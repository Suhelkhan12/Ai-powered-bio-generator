"use server";

import { grok } from "@/lib/grok";
import { generateObject } from "ai";
import { formSchema } from "@/lib/schema";
import * as z from "zod";

type Bios = {
  id: string;
  text: string;
};

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
      prompt: `Generate a Twitter bio for the user query: "${userQuery}". 
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
    return { message: "Bios generated.", bios: object.bio };
  } catch (err) {
    console.log(err);
    return { message: "Something went wrong in generating response 💥" };
  }
};

import * as z from "zod";
import { BioTypes, BioTones } from "./types";

// form schema using zod
export const formSchema = z.object({
  model: z.string().min(1, "Model is required."),
  modelRandomness: z.coerce.number(
    z.number().min(0, "Randomness must be atleast 0.")
  ),
  userQuery: z
    .string()
    .min(50, "Your message should be atleast 50 characters long.")
    .max(500, "Your message should not exceed 500 character limit."),
  type: z.enum([BioTypes.Brand, BioTypes.Personal], {
    errorMap: () => ({ message: "Type is required." }),
  }),
  tone: z.enum(
    [
      BioTones.Casual,
      BioTones.Funny,
      BioTones.Passionate,
      BioTones.Professional,
      BioTones.Sarcastic,
      BioTones.Thoughtful,
    ],
    {
      errorMap: () => ({ message: "Tone is required." }),
    }
  ),
  emojies: z.boolean(),
});

"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  model: z.string().min(1, "Model is required."),
  modelRandomness: z.number().min(0, "Randomness must be atleast 0."),
  userQuery: z
    .string()
    .min(50, "Your query should be atleast 50 characters long.")
    .max(500, "Your query should not exceed 500 character limit."),
  type: z.enum(["personal", "brand"], {
    errorMap: () => ({ message: "Type is required." }),
  }),
  tone: z.enum(
    [
      "professional",
      "casual",
      "sarcastic",
      "funny",
      "passionate",
      "thoughtfull",
    ],
    {
      errorMap: () => ({ message: "Type is required." }),
    }
  ),
  emojies: z.boolean(),
});

const UserInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "llama3-8b-8192",
      modelRandomness: 1,
      userQuery: "",
      type: "personal",
      tone: "casual",
      emojies: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="bg-neutral-50 p-4 rounded-md border border-black/5 backdrop-blur-sm flex flex-col justify-start w-full gap-6">
            <legend className="text-xs">Model settings</legend>
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Generate bio 💬</Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;

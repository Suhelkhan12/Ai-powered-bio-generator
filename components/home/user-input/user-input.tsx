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
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { grokModels } from "@/lib/data";
import { Slider } from "@/components/ui/slider";
import { LuBadgeInfo } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";

// form schema using zod
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
      errorMap: () => ({ message: "Tone is required." }),
    }
  ),
  emojies: z.boolean(),
});

const UserInput = () => {
  // creating form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      modelRandomness: 1,
      userQuery: "",
      type: "personal",
      tone: "casual",
      emojies: false,
    },
  });

  // form submit action
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset className="bg-neutral-50 p-4 rounded-md border border-black/5 backdrop-blur-sm flex flex-col justify-start w-full gap-6 hover:shadow-md transition-all duration-300">
            <legend className="text-xs">Model settings</legend>
            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Model</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {grokModels.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex items-center gap-3">
                            <model.icon />
                            <p className="flex items-center gap-2">
                              {model.name}
                              <span className="text-black/50">
                                {model.grayText}
                              </span>
                            </p>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="modelRandomness"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FormLabel>Randomness</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <LuBadgeInfo className="size-4 flex text-blue-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-72 w-full">
                            <p>
                              Controls randomness: lowering results in less
                              random completions. As the temperature approaches
                              zero, the model will become deterministic and
                              repetitive.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="text-xs">{field.value}</span>
                  </div>
                  <Slider
                    onChange={field.onChange}
                    defaultValue={[field.value]}
                    max={2}
                    step={0.1}
                  />
                </FormItem>
              )}
            />
          </fieldset>
          <fieldset className="bg-neutral-50 p-4 rounded-md border border-black/5 backdrop-blur-sm flex flex-col justify-start w-full gap-6 mt-6 hover:shadow-md transition-all duration-300">
            <legend className="text-xs">User inputs</legend>
            <FormField
              control={form.control}
              name="userQuery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell me about you</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Elaborate..."
                      className="resize-none min-h-40"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="brand">Brand</SelectItem>
                    </SelectContent>
                  </Select>
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

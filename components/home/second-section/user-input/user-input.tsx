"use client";
import * as z from "zod";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/schema";
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
import { Switch } from "@/components/ui/switch";
import { BioTones, BioTypes } from "@/lib/types";
import { generateBios } from "@/actions/generate-bios";
import { cn } from "@/lib/utils";
import useBioContext from "@/hooks/useBioContext";
import { toast } from "sonner";

const UserInput = () => {
  const [isPending, startTransition] = useTransition();
  const { setIsFetching, setBios } = useBioContext();
  // creating form using react-hook-form
  const form = useForm<z.z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      modelRandomness: 1,
      userQuery: "",
      type: BioTypes.Personal,
      tone: BioTones.Professional,
      emojies: false,
    },
  });

  // form submit action
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsFetching(true);
    startTransition(async () => {
      const data = await generateBios(values);
      if (data.bios) {
        setBios(data.bios);
        toast.success(data.message);
      } else toast.warning("Something went wrong while creating bios 💥");
      setIsFetching(false);
    });
    form.reset();
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
                  <FormLabel htmlFor="model">Model</FormLabel>
                  <Select onValueChange={field.onChange} disabled={isPending}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select ai model" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {grokModels.map((model) => (
                        <SelectItem key={model.id} value={model.id}>
                          <div className="flex items-center gap-2">
                            <model.icon className={cn("size-4", model.color)} />
                            <p className="flex items-center gap-2 ">
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
                  <FormMessage className="text-xs" />
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
                      <FormLabel htmlFor="modelRandomness">
                        Randomness
                      </FormLabel>
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
                    disabled={isPending}
                  />
                  <FormMessage className="text-xs" />
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
                  <FormLabel htmlFor="userQuery">Tell me about you</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Elaborate..."
                      className="resize-none min-h-40"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel htmlFor="type">Bio type</FormLabel>
                    <Select onValueChange={field.onChange} disabled={isPending}>
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
              <FormField
                control={form.control}
                name="tone"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormLabel htmlFor="tone">Tone of bio</FormLabel>
                    <Select onValueChange={field.onChange} disabled={isPending}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="professional">
                          Professional
                        </SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="sarcastic">Sarcastic</SelectItem>
                        <SelectItem value="funny">Funny</SelectItem>
                        <SelectItem value="passionate">Passionate</SelectItem>
                        <SelectItem value="thoughtful">Thoughtfull</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="emojies"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel htmlFor="emojies">Include emojies</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="!my-0"
                      disabled={isPending}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              Generate bio 💬
            </Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;

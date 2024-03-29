"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Router } from "next/router";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import toast from "react-hot-toast";


const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is Required",
  }),
});

const CreateCoursePage = () => {
    const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
   try{
    const response = await axios.post("/api/course", values)
    router.push(`/teacher/course/${response.data.id}`)
   }catch{
    toast.error('Somthing wrong')
   }
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos; t worry, you can
          change this later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Web Development"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What will you tech in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
                <Link href={"/"}>
                    <Button variant={"ghost"} type="button">Cancel</Button>
                </Link>
                <Button type="submit" disabled={isSubmitting || !isValid}>
                    Continue
                </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCoursePage;

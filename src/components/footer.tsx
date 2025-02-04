"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transitions";
import Image from "next/image";
import { Loader2 } from "lucide-react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  fullName: z.string({
    required_error: "fullName is required",
  }),
  email: z
    .string({
      required_error: "email required",
    })
    .email(),
  message: z.string({
    required_error: "message is required",
  }),
});

const Footer = () => {

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => { }

  return (
    <motion.section className="relative pb-6" id="contact">

      <div className="p-4 md:p-8 md:px-16">
        <SectionHeading className="">
          <SlideIn className="text-white/40">Interested in talking,</SlideIn>{" "}
          <br /> <SlideIn>Contact me.</SlideIn>
        </SectionHeading>
        <div className="grid place-items-center md:pt-8 px-16">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-1/2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Full Name</FormLabel> */}
                    <FormControl>
                      <Transition className="w-full">
                        <Input placeholder="Your Name" {...field} />
                      </Transition>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Transition className="w-full">
                        <Input placeholder="Your Email" {...field} />
                      </Transition>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Init Price Unit</FormLabel> */}
                    <FormControl>
                      <Transition className="w-full">
                        <Textarea
                          placeholder="Message"
                          className="resize-none h-28"
                          {...field}
                        />
                      </Transition>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full">
                <Button
                  type="submit"
                  variant="outline"
                >
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <footer className="flex items-center justify-between md:px-16 px-2 py-4 text-sm">
        <Transition>
          <div className="text-sm">simp1e | {new Date().getFullYear()}</div>
        </Transition>
        <Transition>
          <div className="flex gap-3">

            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              width={24}
              height={24}
              src="/telegram.svg"
              alt="telegram"
              className="object-contain cursor-pointer"
            />

            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              width={24}
              height={24}
              src="/x.svg"
              alt="x"
              className="object-contain cursor-pointer"
            />
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              width={24}
              height={24}
              src="/github-icon.svg"
              alt="github"
              className="object-contain cursor-pointer"
            />
          </div>
        </Transition>
      </footer>
    </motion.section>
  );
};

export default Footer;

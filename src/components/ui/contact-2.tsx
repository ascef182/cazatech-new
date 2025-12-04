import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast"; // Assuming react-hot-toast is installed and configured

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Define the Zod schema for form validation
const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// Utility function to submit data to Formspree
async function submitToFormspree(endpoint: string, data: Record<string, any>) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Formspree submission failed");
  }

  return response.json();
}

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!FORMSPREE_ENDPOINT) {
      toast.error("Formspree endpoint is not configured.");
      return;
    }

    try {
      await submitToFormspree(FORMSPREE_ENDPOINT, data);
      toast.success("Message sent successfully!");
      reset(); // Reset form fields after successful submission
    } catch (error: any) {
      toast.error(error.message || "Failed to send message.");
    }
  };

  return (
    <section className="py-32 bg-neutral-950">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl text-white">
                {title}
              </h1>
              <p className="text-white/60">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left text-white">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc text-white/80">
                <li>
                  <span className="font-bold text-white">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold text-white">Email: </span>
                  <a href={`mailto:${email}`} className="underline hover:text-purple-400">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold text-white">Web: </span>
                  <a href={web.url} target="_blank" className="underline hover:text-purple-400">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-10"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-white">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                  {...register("firstname")}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{errors.firstname.message}</p>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-white">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                  {...register("lastname")}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{errors.lastname.message}</p>
                )}
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

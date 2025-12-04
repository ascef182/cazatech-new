import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname" className="text-white">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" className="bg-black/50 border-white/10 text-white placeholder:text-white/40" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname" className="text-white">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" className="bg-black/50 border-white/10 text-white placeholder:text-white/40" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input type="email" id="email" placeholder="Email" className="bg-black/50 border-white/10 text-white placeholder:text-white/40" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject" className="text-white">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" className="bg-black/50 border-white/10 text-white placeholder:text-white/40" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-white">Message</Label>
              <Textarea placeholder="Type your message here." id="message" className="bg-black/50 border-white/10 text-white placeholder:text-white/40" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};





"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(2, "Informe sua empresa"),
  objective: z.enum(["automacao", "site", "consultoria"], {
    errorMap: () => ({ message: "Selecione um objetivo" }),
  }),
  budget: z.string().optional(),
  message: z.string().min(10, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({ resolver: zodResolver(schema) });
  const formspreeFormId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const onSubmit = async (values: FormData) => {
    setIsSubmitting(true);
    try {
      if (formspreeFormId) {
        const resFs = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            company: values.company,
            objective: values.objective,
            budget: values.budget ?? "",
            message: values.message,
            _replyto: values.email,
            _subject: `Contato pelo site: ${values.name}`,
          }),
        });
        const dataFs = await resFs.json().catch(() => null as any);
        if (!resFs.ok || dataFs?.errors) {
          const errMsg =
            dataFs?.errors?.[0]?.message || dataFs?.message || "Falha no envio";
          throw new Error(errMsg);
        }
      } else {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (!res.ok || !data.ok)
          throw new Error(data.error || "Falha no envio");
      }

      toast.success(
        "Mensagem enviada com sucesso! Responderemos em até 24h úteis."
      );
      form.reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Erro inesperado");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Fale com a CazaTech
            </span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Qual seu próximo projeto?
          </p>
        </div>

        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-800 text-sm">
            📞 <strong>Resposta garantida em até 24h úteis</strong>
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                placeholder="Nome da sua empresa"
                {...form.register("company")}
              />
              {form.formState.errors.company && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.company.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="objective">Objetivo *</Label>
              <select
                id="objective"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...form.register("objective")}
              >
                <option value="">Selecione seu objetivo</option>
                <option value="automacao">Automação WhatsApp</option>
                <option value="site">Site/Landing Page</option>
                <option value="consultoria">Consultoria Digital</option>
              </select>
              {form.formState.errors.objective && (
                <p className="mt-1 text-sm text-red-600">
                  {form.formState.errors.objective.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="budget">Orçamento estimado (opcional)</Label>
            <select
              id="budget"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...form.register("budget")}
            >
              <option value="">Prefiro não informar</option>
              <option value="ate-5k">Até R$ 5.000</option>
              <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
              <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
              <option value="acima-30k">Acima de R$ 30.000</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Mensagem *</Label>
            <Textarea
              id="message"
              className="h-32"
              placeholder="Conte-nos mais sobre seu projeto, desafios atuais e objetivos..."
              {...form.register("message")}
            />
            {form.formState.errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white hover:bg-black/90 px-8 py-5"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Verificação assíncrona das variáveis de ambiente
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Configuração do EmailJS incompleta");
      toast.error("O formulário de contato não está disponível no momento");
    } else {
      setIsConfigured(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isConfigured) {
      toast.error("O serviço de email não está configurado corretamente");
      return;
    }

    setIsSubmitting(true);

    try {
      if (!formRef.current) throw new Error("Formulário indisponível");

      // Validação dos campos
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("Preencha todos os campos");
      }

      // Inicialização do EmailJS
      try {
        await emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
      } catch (initError: unknown) {
        const message =
          initError instanceof Error ? initError.message : "Erro desconhecido";
        throw new Error(`Falha ao inicializar: ${message}`);
      }

      // Parâmetros do template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      };

      // Envio do email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status !== 200) {
        throw new Error(`Status inesperado: ${result.status}`);
      }

      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro desconhecido ao enviar mensagem";

      console.error("Erro completo:", error);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isConfigured) {
    return (
      <section className="py-24">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Formulário de Contato
          </h1>
          <p className="text-xl text-red-600">
            O formulário não está disponível no momento devido a problemas de
            configuração.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="tag">
              <p className="text-xs font-medium uppercase">
                DISPONÍVEL PARA TRABALHOS
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            Vamos colocar seu projeto no ar!
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          id="contact-form"
          className="space-y-8"
        >
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>

            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 h-40"
                required
                disabled={isSubmitting}
                aria-required="true"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90 px-10 py-6 text-base uppercase font-medium disabled:opacity-75"
              disabled={isSubmitting}
              aria-label={
                isSubmitting ? "Enviando mensagem..." : "Enviar mensagem"
              }
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { submitToFormspree } from "@/lib/formspree";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  purpose: z.string().min(1, "Selecione o objetivo da consultoria"),
  message: z.string().optional(),
});

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      purpose: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitToFormspree({
        ...values,
        source: "consultoria-page",
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      });
      setIsSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Não foi possível enviar agora.";
      toast.error(message);
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md mx-auto p-8 bg-neutral-900/50 border border-emerald-500/30 rounded-2xl text-center backdrop-blur-sm"
      >
        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h3>
        <p className="text-neutral-400">
          Nossa equipe analisará seu perfil e entraremos em contato em breve para agendar sua consultoria.
        </p>
        <Button
          variant="outline"
          className="mt-8 border-white/10 text-white hover:bg-white/5"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar nova solicitação
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 md:p-8 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Agende sua Consultoria</h3>
        <p className="text-sm text-neutral-400">
          Preencha o formulário abaixo para entendermos melhor suas necessidades.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-300">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    className="bg-black/50 border-white/10 text-white placeholder:text-neutral-600 focus:border-purple-500/50 transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300">Email Corporativo</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="seu@email.com" 
                      {...field} 
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-600 focus:border-purple-500/50 transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-300">Empresa</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Nome da empresa" 
                      {...field} 
                      className="bg-black/50 border-white/10 text-white placeholder:text-neutral-600 focus:border-purple-500/50 transition-colors"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-300">Objetivo da Consultoria</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-purple-500/50">
                      <SelectValue placeholder="Selecione um objetivo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-neutral-900 border-white/10 text-white">
                    <SelectItem value="automacao">Automação de Processos (WhatsApp/N8N)</SelectItem>
                    <SelectItem value="saas">Desenvolvimento de SaaS/App</SelectItem>
                    <SelectItem value="site">Site Institucional / Landing Page</SelectItem>
                    <SelectItem value="marketing">Estratégia de Marketing Digital</SelectItem>
                    <SelectItem value="mentoria">Mentoria Técnica para Equipe</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-300">Mensagem (Opcional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Conte um pouco mais sobre seu desafio..." 
                    className="min-h-[100px] bg-black/50 border-white/10 text-white placeholder:text-neutral-600 focus:border-purple-500/50 transition-colors resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={form.formState.isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium py-6 shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.02]"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Solicitar Consultoria
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}





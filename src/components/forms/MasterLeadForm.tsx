"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { PatternFormat } from "react-number-format";
import { Loader2, CheckCircle2, Send, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { trackFormSubmission } from "@/components/analytics/GoogleAnalytics";
import { useI18n } from "@/app/ClientBody";

const minimalSchema = z.object({
  nome: z.string().min(2, "Nome muito curto"),
  whatsapp: z.string().min(10, "Número inválido"),
  interesse: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  empresa: z.string().optional(),
  segmento: z.string().optional(),
  mensagem: z.string().min(5, "Mensagem obrigatória"),
});

const fullSchema = minimalSchema.extend({
  email: z.string().email("E-mail inválido"),
  empresa: z
    .string()
    .min(2, "Nome da empresa obrigatório")
    .optional()
    .or(z.literal("")),
  segmento: z
    .string()
    .min(1, "Selecione um segmento")
    .optional()
    .or(z.literal("")),
  mensagem: z.string().min(5, "Mensagem obrigatória"),
});

type FullFormData = z.infer<typeof fullSchema>;

const segmentoOptions = [
  { value: "varejo", label: "Varejo" },
  { value: "servicos", label: "Serviços" },
  { value: "industria", label: "Indústria" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "saude", label: "Saúde" },
  { value: "educacao", label: "Educação" },
  { value: "outro", label: "Outro" },
];

const interesseOptions = [
  { value: "automacao", label: "Automação WhatsApp" },
  { value: "site", label: "Site / Landing Page" },
  { value: "sistema", label: "Sistema Web" },
  { value: "trafego", label: "Tráfego Pago" },
  { value: "outro", label: "Outro" },
];

interface MasterLeadFormProps {
  variant?: "minimal" | "full";
  source?: string;
  product?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
  dark?: boolean;
}

export function MasterLeadForm({
  variant = "minimal",
  source,
  product = "geral",
  title,
  description,
  buttonText,
  className,
  onSuccess,
  dark = true,
}: MasterLeadFormProps) {
  const { t } = useI18n();
  const translatedTitle = title ?? t('masterLeadForm.title');
  const translatedDescription = description ?? t('masterLeadForm.description');
  const translatedButtonText = buttonText ?? t('masterLeadForm.buttonText');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = variant === "minimal" ? minimalSchema : fullSchema;
  const form = useForm<FullFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      email: "",
      empresa: "",
      segmento: "",
      interesse: product !== "geral" ? product : "",
      mensagem: "",
    },
  });

  async function onSubmit(data: FullFormData) {
    setIsSubmitting(true);

    try {
      // Enviar para API de email e webhook
      const payload = {
        name: data.nome,
        email: data.email || "",
        phone: data.whatsapp,
        company: data.empresa || "",
        objective: data.interesse,
        message: data.mensagem || `Lead capturado via ${source}`,
        source,
        product,
        segmento: data.segmento || "",
      };

      await submitToFormspree({
        ...payload,
        formVariant: variant,
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      });

      trackFormSubmission(source || "master-lead-form");

      // Enviar para webhook (se configurado)
      fetch("/api/webhook/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        // silencioso em produção; erros de webhook não devem impactar o usuário
      });

      // Enviar para WhatsApp
      sendToWhatsApp(data);

      setIsSuccess(true);

      if (onSuccess) {
        onSuccess();
      }

      // Reset após 3 segundos
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Não foi possível enviar agora.";
      toast.error(`Erro: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl transition-all duration-200",
    dark
      ? "bg-neutral-800/50 border-neutral-700 text-white placeholder:text-neutral-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
      : "bg-white border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
  );

const sendToWhatsApp = (data: FullFormData) => {
  const phone = "5511999999999"; // Replace with actual number if available or config
  const text = `Novo Lead: ${data.nome} - ${data.whatsapp}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  console.log("Redirecting to WhatsApp", url);
  // window.open(url, "_blank"); // Uncomment if auto-redirect is desired
};

    return (
    <div
      className={cn(
        "w-full max-w-md mx-auto",
        dark ? "text-white" : "text-neutral-900",
        className
      )}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "Satoshi, 'Plus Jakarta Sans', sans-serif" }}
        >
          {translatedTitle}
        </h3>
        <p
          className={cn(
            "text-sm",
            dark ? "text-neutral-400" : "text-neutral-900"
          )}
        >
          {translatedDescription}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </motion.div>
            <h4 className="text-xl font-semibold mb-2">Mensagem Enviada!</h4>
            <p
              className={cn(
                "text-sm text-center",
                dark ? "text-neutral-400" : "text-neutral-600"
              )}
            >
              Você será redirecionado para o WhatsApp.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                {/* Nome */}
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={
                          dark ? "text-neutral-300" : "text-neutral-700"
                        }
                      >
                        Nome *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          className={inputClass}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* E-mail (agora em ambos os variantes) */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={
                          dark ? "text-neutral-300" : "text-neutral-700"
                        }
                      >
                        E-mail *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className={inputClass}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* WhatsApp */}
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={
                          dark ? "text-neutral-300" : "text-neutral-700"
                        }
                      >
                        WhatsApp *
                      </FormLabel>
                      <FormControl>
                        <PatternFormat
                          format="(##) #####-####"
                          mask="_"
                          customInput={Input}
                          placeholder="(00) 00000-0000"
                          className={inputClass}
                          value={field.value}
                          onValueChange={(values) => {
                            field.onChange(values.formattedValue);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campos adicionais para variant "full" */}
                {variant === "full" && (
                  <>
                    {/* Empresa */}
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              dark ? "text-neutral-300" : "text-neutral-700"
                            }
                          >
                            Empresa
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nome da sua empresa"
                              className={inputClass}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Segmento */}
                    <FormField
                      control={form.control}
                      name="segmento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              dark ? "text-neutral-300" : "text-neutral-700"
                            }
                          >
                            Segmento
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className={inputClass}>
                                <SelectValue placeholder="Selecione o segmento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {segmentoOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {/* Interesse */}
                {product === "geral" && (
                  <FormField
                    control={form.control}
                    name="interesse"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel
                          className={
                            dark ? "text-neutral-300" : "text-neutral-700"
                          }
                        >
                          O que você precisa? *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className={inputClass}>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {interesseOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Mensagem (agora em ambos os variantes) */}
                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={
                          dark ? "text-neutral-300" : "text-neutral-700"
                        }
                      >
                        Mensagem *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte um pouco sobre seu projeto..."
                          className={cn(
                            inputClass,
                            "min-h-[100px] resize-none"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-6 text-base font-semibold rounded-xl",
                    "bg-gradient-to-r from-purple-600 to-blue-600",
                    "hover:from-purple-700 hover:to-blue-700",
                    "transition-all duration-300",
                    "shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {translatedButtonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Privacy Notice */}
                <p
                  className={cn(
                    "text-xs text-center mt-4",
                    dark ? "text-neutral-500" : "text-neutral-400"
                  )}
                >
                  Ao enviar, você concorda com nossa{" "}
                  <a
                    href="/informacoes-legais/politica-de-privacidade"
                    className="underline hover:text-purple-400 transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MasterLeadForm;

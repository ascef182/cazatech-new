"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { trackFormSubmission } from "@/components/analytics/GoogleAnalytics";
import CalendlyButton from "./CalendlyButton";
import { useI18n } from "@/app/ClientBody";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  purpose: z.string().min(1, "Selecione o objetivo da consultoria"),
  message: z.string().optional(),
});

export default function ConsultationForm() {
  const { t } = useI18n();
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
      console.log('📝 Enviando consultoria:', values);
      await submitToFormspree({
        ...values,
        source: "consultoria-page",
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      });
      trackFormSubmission("consultoria-page");
      setIsSubmitted(true);
    } catch (error) {
      console.error('❌ Erro consultoria:', error);
      const message =
        error instanceof Error ? error.message : "Não foi possível enviar agora.";
      toast.error(`Erro ao enviar: ${message}`);
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
        <h3 className="text-2xl font-bold text-white mb-2">{t("consulting.form.successTitle")}</h3>
        <p className="text-neutral-400">
          {t("consulting.form.successMessage")}
        </p>
        <Button
          variant="outline"
          className="mt-8 border-white/10 text-white hover:bg-white/5"
          onClick={() => setIsSubmitted(false)}
        >
          {t("consulting.form.newRequest")}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 md:p-8 bg-neutral-900/50 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{t("consulting.form.title")}</h3>
        <p className="text-sm text-neutral-400">
          {t("consulting.form.subtitle")}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-300">{t("consulting.form.name")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("consulting.form.namePlaceholder")}
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
                  <FormLabel className="text-neutral-300">{t("consulting.form.email")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("consulting.form.emailPlaceholder")}
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
                  <FormLabel className="text-neutral-300">{t("consulting.form.company")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("consulting.form.companyPlaceholder")}
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
                <FormLabel className="text-neutral-300">{t("consulting.form.purpose")}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-black/50 border-white/10 text-white focus:border-purple-500/50">
                      <SelectValue placeholder={t("consulting.form.purposePlaceholder")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-neutral-900 border-white/10 text-white">
                    <SelectItem value="automacao">{t("consulting.form.purposes.automation")}</SelectItem>
                    <SelectItem value="saas">{t("consulting.form.purposes.saas")}</SelectItem>
                    <SelectItem value="site">{t("consulting.form.purposes.site")}</SelectItem>
                    <SelectItem value="marketing">{t("consulting.form.purposes.marketing")}</SelectItem>
                    <SelectItem value="mentoria">{t("consulting.form.purposes.mentoring")}</SelectItem>
                    <SelectItem value="outro">{t("consulting.form.purposes.other")}</SelectItem>
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
                <FormLabel className="text-neutral-300">{t("consulting.form.message")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("consulting.form.messagePlaceholder")}
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
                {t("consulting.form.sending")}
              </>
            ) : (
              <>
                {t("consulting.form.submit")}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          {/* Divider + Calendly Alternative */}
          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-neutral-900/50 text-neutral-500">
                {t("consulting.calendly.orSchedule")}
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <CalendlyButton
              text={t("consulting.calendly.button")}
              className="w-full justify-center"
            />
          </div>
        </form>
      </Form>
    </div>
  );
}





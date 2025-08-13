import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <article className="container py-12 md:py-20 prose prose-neutral dark:prose-invert max-w-3xl">
      <Link href="/blog" className="text-sm text-muted-foreground">
        ← Voltar
      </Link>
      <h1>Atendimento Automatizado no WhatsApp: Guia Completo</h1>
      <p>
        Como estruturar um funil de atendimento que qualifica leads e fecha
        vendas em escala. Neste guia você verá etapas, ferramentas e boas
        práticas.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=1080&auto=format&fit=crop"
        alt="WhatsApp Automation"
        width={1080}
        height={640}
        className="rounded-xl"
      />
      <h2>1. Captação</h2>
      <p>
        Estruture CTAs claros em website, anúncios e bio com parâmetros UTM para
        rastreio.
      </p>
      <h2>2. Qualificação</h2>
      <p>Perguntas objetivas para entender intenção, orçamento e prazo.</p>
      <h2>3. Triagem</h2>
      <p>Direcione automaticamente para vendas, suporte ou agendamento.</p>
      <h2>4. Agendamento</h2>
      <p>
        Integre com calendário para escolha de horários e lembretes automáticos.
      </p>
      <h2>5. Pós-atendimento</h2>
      <p>Envie checklists, pesquisas NPS e ofertas complementares.</p>
    </article>
  );
}

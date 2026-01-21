"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function BlogPost() {
  const post = {
    id: "site-para-dentista-consultorio-odontologico",
    title: "Site para Dentista: Como Atrair Mais Pacientes para Seu Consultório",
    excerpt:
      "Guia completo para criar um site odontológico que gera agendamentos. Estratégias da CazaTech para dentistas em SP, RJ e BH.",
    category: "Odontologia Digital",
    date: "21 Janeiro 2025",
    readTime: "13 min",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Equipe CazaTech",
      role: "Especialistas em Marketing para Saúde",
      avatar: "/images/cazatech-avatar.png",
    },
    tags: ["Odontologia", "Sites para Dentistas", "Marketing Odontológico", "Agendamento Online", "CazaTech"],
    content: `
      <article>
        <p class="text-lg leading-relaxed">O mercado odontológico brasileiro tem mais de <strong>370 mil dentistas</strong> a maior concentração do mundo. Em cidades como <strong>São Paulo, Rio de Janeiro e Belo Horizonte</strong>, a concorrência é ainda mais acirrada. Nesse cenário, ter um site profissional deixou de ser diferencial e se tornou requisito básico para sobreviver.</p>

        <p>A <strong>CazaTech</strong> já desenvolveu sites para dezenas de consultórios e clínicas odontológicas. Neste guia, compartilhamos as estratégias que realmente funcionam para transformar visitantes em pacientes sentados na sua cadeira.</p>

        <div class="bg-primary/10 p-6 rounded-xl border border-primary/20 my-8">
          <h3 class="text-lg font-semibold mb-4">O que você vai aprender:</h3>
          <ul class="space-y-2">
            <li><strong>1.</strong> Por que 81% dos pacientes pesquisam online antes de escolher um dentista</li>
            <li><strong>2.</strong> Os 8 elementos que todo site odontológico precisa ter</li>
            <li><strong>3.</strong> Como ranquear para "dentista perto de mim" no Google</li>
            <li><strong>4.</strong> Agendamento online: a funcionalidade que mais converte</li>
            <li><strong>5.</strong> Compliance: CFO e LGPD no marketing odontológico</li>
          </ul>
        </div>

        <h2>O Cenário do Marketing Odontológico no Brasil</h2>

        <p>Dados que todo dentista precisa conhecer:</p>

        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">81%</p>
            <p class="text-sm text-muted-foreground">dos pacientes pesquisam online antes de agendar</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">67%</p>
            <p class="text-sm text-muted-foreground">escolhem pelo Google Maps e avaliações</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">3.2x</p>
            <p class="text-sm text-muted-foreground">mais agendamentos com site otimizado</p>
          </div>
        </div>

        <p>Em <strong>São Paulo</strong>, a busca por "dentista zona sul" tem milhares de pesquisas mensais. Em <strong>Belo Horizonte</strong>, "implante dentário BH" é extremamente competitivo. No <strong>Rio de Janeiro</strong>, "clareamento dental Barra" movimenta um mercado milionário.</p>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
          <p><strong>Realidade:</strong> Se você não aparece na primeira página do Google quando alguém busca por tratamentos na sua região, esse paciente está indo para o concorrente que aparece.</p>
        </div>

        <h2>Os 8 Elementos Obrigatórios em um Site para Dentista</h2>

        <p>A CazaTech identificou os elementos com maior impacto na conversão de sites odontológicos:</p>

        <h3>1. Hero Section com Proposta de Valor Clara</h3>

        <p>O visitante precisa entender imediatamente: <strong>quais tratamentos você oferece, onde está localizado e qual seu diferencial</strong>.</p>

        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <p><strong>Exemplo ruim:</strong> "Bem-vindo ao nosso consultório"</p>
          <p><strong>Exemplo bom:</strong> "Implantes Dentários em São Paulo. Tecnologia 3D, sedação consciente e parcelamento em até 24x. Agende sua avaliação gratuita."</p>
        </div>

        <h3>2. Página de Tratamentos Detalhada</h3>

        <p>Cada procedimento merece uma página dedicada. Isso não é apenas informativo é <strong>estratégia de SEO</strong>:</p>

        <ul class="space-y-1 my-4">
          <li><strong>Implantes dentários</strong> página própria com indicações, processo, valores</li>
          <li><strong>Ortodontia/Invisalign</strong> comparativo com aparelho tradicional</li>
          <li><strong>Clareamento dental</strong> tipos, duração, cuidados</li>
          <li><strong>Facetas e lentes de contato</strong> materiais, durabilidade</li>
          <li><strong>Tratamento de canal</strong> desmistificando medos comuns</li>
        </ul>

        <h3>3. Galeria de Casos (Com Cuidado)</h3>

        <p>Fotos de antes e depois são poderosas, mas exigem atenção às regras do CFO:</p>

        <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg my-4">
          <p><strong>Atenção CFO:</strong> O Código de Ética Odontológica permite imagens de casos clínicos desde que:</p>
          <ul class="mt-2 space-y-1">
            <li>Tenham autorização por escrito do paciente</li>
            <li>Não sejam usadas de forma sensacionalista</li>
            <li>Não prometam resultados garantidos</li>
            <li>Incluam informações técnicas do procedimento</li>
          </ul>
        </div>

        <h3>4. Apresentação do Dentista e Equipe</h3>

        <p>Pacientes querem saber quem vai cuidar do seu sorriso:</p>

        <ul class="space-y-1 my-4">
          <li>Foto profissional (transmita confiança e acolhimento)</li>
          <li>CRO e especialidades registradas</li>
          <li>Formação acadêmica e cursos de atualização</li>
          <li>Anos de experiência e casos realizados</li>
          <li>Filosofia de atendimento</li>
        </ul>

        <h3>5. Depoimentos e Avaliações</h3>

        <p>Prova social é decisiva. Integre:</p>

        <ul class="space-y-1 my-4">
          <li>Avaliações do Google (widget automático)</li>
          <li>Depoimentos em vídeo de pacientes satisfeitos</li>
          <li>Notas de plataformas como Doctoralia</li>
        </ul>

        <h3>6. Botão de Agendamento Sempre Visível</h3>

        <p>O CTA principal deve estar:</p>

        <ul class="space-y-1 my-4">
          <li>No header (fixo durante scroll)</li>
          <li>Ao final de cada página de tratamento</li>
          <li>Em formato de botão flutuante no mobile</li>
          <li>Com opções: WhatsApp, telefone e agendamento online</li>
        </ul>

        <h3>7. Informações Práticas Completas</h3>

        <p>Fundamental para SEO local e experiência do usuário:</p>

        <ul class="space-y-1 my-4">
          <li>Endereço completo com mapa interativo</li>
          <li>Telefone e WhatsApp clicáveis</li>
          <li>Horários de funcionamento (inclusive emergências)</li>
          <li>Convênios e planos odontológicos aceitos</li>
          <li>Formas de pagamento e parcelamento</li>
          <li>Estacionamento e acessibilidade</li>
        </ul>

        <h3>8. Blog com Conteúdo Educativo</h3>

        <p>Artigos que atraem pacientes organicamente:</p>

        <ul class="space-y-1 my-4">
          <li>"Quanto custa um implante dentário em São Paulo?"</li>
          <li>"Invisalign vs. aparelho fixo: qual escolher?"</li>
          <li>"Clareamento dental: tipos e quanto dura o resultado"</li>
          <li>"Dor de dente: quando é emergência?"</li>
        </ul>

        <h2>SEO Local para Dentistas: Domine o Google da Sua Região</h2>

        <p>A maioria dos pacientes busca por "dentista + bairro" ou "tratamento + cidade". A <strong>CazaTech</strong> implementa estratégias específicas:</p>

        <h3>Google Meu Negócio: A Base de Tudo</h3>

        <div class="bg-primary/10 p-6 rounded-xl my-6 border border-primary/20">
          <h4 class="font-semibold mb-3">Checklist do Perfil Perfeito:</h4>
          <ul class="space-y-2">
            <li><strong>Fotos profissionais:</strong> fachada, recepção, consultório, equipamentos</li>
            <li><strong>Todos os tratamentos:</strong> cadastrados como serviços individuais</li>
            <li><strong>Posts semanais:</strong> dicas de saúde bucal, novidades, promoções permitidas</li>
            <li><strong>Respostas a avaliações:</strong> todas, especialmente as negativas (com elegância)</li>
            <li><strong>Perguntas frequentes:</strong> antecipe dúvidas comuns</li>
            <li><strong>Atributos:</strong> acessibilidade, estacionamento, Wi-Fi, etc.</li>
          </ul>
        </div>

        <h3>Palavras-chave Estratégicas por Cidade</h3>

        <table class="w-full my-6 border-collapse">
          <thead>
            <tr class="bg-accent/10">
              <th class="p-3 text-left border-b">Cidade</th>
              <th class="p-3 text-left border-b">Termos de Alta Conversão</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-semibold">São Paulo</td>
              <td class="p-3">dentista zona sul sp, implante dentário moema, invisalign jardins</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Rio de Janeiro</td>
              <td class="p-3">dentista barra da tijuca, clareamento dental leblon, ortodontista copacabana</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Belo Horizonte</td>
              <td class="p-3">dentista savassi, implante dentário bh, lente de contato dental funcionários</td>
            </tr>
          </tbody>
        </table>

        <h2>Agendamento Online: A Funcionalidade Que Mais Converte</h2>

        <p>Pacientes odontológicos preferem agendar fora do horário comercial. Um sistema de agendamento online aumenta conversões significativamente:</p>

        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-background p-4 rounded-lg border border-border">
            <h4 class="font-semibold mb-2">Funcionalidades Essenciais</h4>
            <ul class="text-sm space-y-1">
              <li>Visualização de horários disponíveis em tempo real</li>
              <li>Seleção de tipo de consulta/tratamento</li>
              <li>Escolha do profissional (se houver equipe)</li>
              <li>Confirmação instantânea por WhatsApp/SMS</li>
            </ul>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border">
            <h4 class="font-semibold mb-2">Benefícios Comprovados</h4>
            <ul class="text-sm space-y-1">
              <li>+58% de agendamentos fora do horário comercial</li>
              <li>-35% de no-show com lembretes automáticos</li>
              <li>Redução de ligações telefônicas repetitivas</li>
              <li>Dados organizados para remarketing</li>
            </ul>
          </div>
        </div>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-lg font-semibold mb-3">Secretária v3: Solução CazaTech para Consultórios</h3>
          <p>A CazaTech desenvolveu a <strong>Secretária v3</strong>, um sistema de atendimento com IA que vai além do agendamento:</p>
          <ul class="space-y-2 mt-4">
            <li><strong>Atendimento 24/7 no WhatsApp:</strong> responde dúvidas, qualifica pacientes, agenda consultas</li>
            <li><strong>Lembretes inteligentes:</strong> confirmação automática reduz faltas em até 40%</li>
            <li><strong>Recuperação de pacientes:</strong> follow-up automático para quem não retornou</li>
            <li><strong>Integração financeira:</strong> envio de orçamentos e links de pagamento</li>
          </ul>
        </div>

        <h2>Compliance: CFO e LGPD no Marketing Odontológico</h2>

        <h3>Regras do Conselho Federal de Odontologia (CFO)</h3>

        <p>O marketing odontológico tem regras específicas. A CazaTech conhece e respeita todas:</p>

        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <h4 class="font-semibold mb-2 text-green-600">Permitido:</h4>
          <ul class="space-y-1">
            <li>Divulgar especialidades registradas no CRO</li>
            <li>Informar preços e formas de pagamento</li>
            <li>Mostrar casos clínicos com autorização e contexto técnico</li>
            <li>Publicar conteúdo educativo sobre saúde bucal</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg my-4">
          <h4 class="font-semibold mb-2 text-red-600">Proibido:</h4>
          <ul class="space-y-1">
            <li>Garantir resultados de tratamentos</li>
            <li>Usar termos como "o melhor", "líder", "único"</li>
            <li>Anunciar especialidades não registradas</li>
            <li>Oferecer consultas gratuitas como isca (permitido avaliação)</li>
            <li>Divulgar preços de forma sensacionalista</li>
          </ul>
        </div>

        <h3>LGPD na Odontologia</h3>

        <p>Dados de pacientes são sensíveis. Sites devem ter:</p>

        <ul class="space-y-2 my-4">
          <li><strong>Política de privacidade:</strong> clara e acessível</li>
          <li><strong>Consentimento:</strong> checkbox em formulários de agendamento</li>
          <li><strong>Segurança:</strong> HTTPS, dados criptografados</li>
          <li><strong>Canal de exclusão:</strong> forma de solicitar remoção de dados</li>
        </ul>

        <h2>Quanto Custa um Site para Dentista?</h2>

        <p>A CazaTech oferece soluções para diferentes momentos do consultório:</p>

        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-background p-6 rounded-lg border border-border">
            <h4 class="font-bold text-lg mb-2">Consultório Inicial</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 6k - 12k</p>
            <p class="text-sm text-muted-foreground mb-4">Site profissional para quem está começando</p>
            <ul class="text-xs space-y-1">
              <li>5-7 páginas otimizadas</li>
              <li>Formulário de contato + WhatsApp</li>
              <li>Google Meu Negócio configurado</li>
              <li>Design responsivo premium</li>
            </ul>
          </div>
          <div class="bg-background p-6 rounded-lg border border-primary">
            <h4 class="font-bold text-lg mb-2">Consultório Crescimento</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 12k - 25k</p>
            <p class="text-sm text-muted-foreground mb-4">Site completo com agendamento e blog</p>
            <ul class="text-xs space-y-1">
              <li>10-15 páginas + blog</li>
              <li>Sistema de agendamento online</li>
              <li>SEO local avançado</li>
              <li>Integração com redes sociais</li>
            </ul>
          </div>
          <div class="bg-background p-6 rounded-lg border border-border">
            <h4 class="font-bold text-lg mb-2">Clínica Premium</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 25k - 50k</p>
            <p class="text-sm text-muted-foreground mb-4">Ecossistema digital completo</p>
            <ul class="text-xs space-y-1">
              <li>Site ilimitado + área do paciente</li>
              <li>Secretária v3 (IA no WhatsApp)</li>
              <li>Integração com software odontológico</li>
              <li>Dashboard de métricas</li>
            </ul>
          </div>
        </div>

        <h2>Case de Sucesso: Clínica Odontológica em Belo Horizonte</h2>

        <div class="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl my-6">
          <h3 class="font-semibold mb-4">Clínica Especializada em Implantes</h3>

          <p class="mb-4"><strong>Desafio:</strong> Site antigo, sem posicionamento no Google, agendamentos apenas por telefone, muitas faltas.</p>

          <p class="mb-4"><strong>Solução CazaTech:</strong></p>
          <ul class="space-y-1 mb-4">
            <li>Novo site com páginas dedicadas para cada tratamento</li>
            <li>SEO local focado em "implante dentário BH" e variações</li>
            <li>Secretária v3 para atendimento e agendamento via WhatsApp</li>
            <li>Integração com Google Calendar e sistema de lembretes</li>
          </ul>

          <p class="mb-2"><strong>Resultados em 4 meses:</strong></p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">1ª página</p>
              <p class="text-xs">Google para "implante dentário BH"</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">+180%</p>
              <p class="text-xs">Agendamentos mensais</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">-42%</p>
              <p class="text-xs">Taxa de no-show</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">+R$ 85k</p>
              <p class="text-xs">Receita mensal adicional</p>
            </div>
          </div>
        </div>

        <h2>Sites para Dentistas em São Paulo, Rio de Janeiro e Belo Horizonte</h2>

        <p>A <strong>CazaTech</strong> entende as particularidades do mercado odontológico em cada região:</p>

        <h3>São Paulo</h3>
        <p>Maior mercado e maior concorrência. SEO precisa ser cirúrgico: focar em bairros específicos (Moema, Jardins, Pinheiros) e especialidades de alto ticket (implantes, lentes). Sites precisam ser ultra-rápidos competindo por segundos de atenção.</p>

        <h3>Rio de Janeiro</h3>
        <p>Forte influência de estética. Tratamentos como clareamento, facetas e harmonização facial dominam as buscas. Sites devem equilibrar sofisticação visual com informação técnica.</p>

        <h3>Belo Horizonte</h3>
        <p>Mercado em crescimento digital. Dentistas que investem em presença online agora têm vantagem competitiva significativa. Menor saturação significa custo de aquisição mais baixo.</p>

        <h2>Próximos Passos: Transforme Seu Consultório</h2>

        <p>A CazaTech oferece um diagnóstico gratuito da presença digital do seu consultório:</p>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-xl font-bold mb-4">Diagnóstico Digital Gratuito para Dentistas</h3>
          <p class="mb-4">Em uma análise completa, nossos especialistas avaliam:</p>
          <ul class="space-y-2 mb-6">
            <li>Performance do site atual (se houver)</li>
            <li>Posicionamento no Google para termos relevantes</li>
            <li>Análise do seu Google Meu Negócio</li>
            <li>Comparativo com concorrentes da região</li>
            <li>Oportunidades de SEO local não exploradas</li>
            <li>Estimativa de investimento e retorno esperado</li>
          </ul>
          <p class="text-lg font-semibold">Receba um plano de ação personalizado sem compromisso.</p>
        </div>

        <hr class="my-8" />

        <p class="text-lg"><strong>A CazaTech</strong> é especialista em sites e marketing digital para dentistas e clínicas odontológicas. Atendemos consultórios em São Paulo, Rio de Janeiro, Belo Horizonte e todo o Brasil.</p>

        <p>Quer mais pacientes agendando pelo seu site? <strong>Fale com a CazaTech</strong> e descubra como dominar o Google da sua região.</p>
      </article>
    `,
  };

  return (
    <BlogArticle
      title={post.title}
      category={post.category}
      date={post.date}
      readTime={post.readTime}
      image={{ src: post.image, alt: post.title }}
      author={post.author}
      html={post.content}
    />
  );
}

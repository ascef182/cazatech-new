"use client";
import BlogArticle from "@/components/ui/blog-article";

export default function BlogPost() {
  const post = {
    id: "site-para-advogado-escritorio-advocacia",
    title: "Site para Advogado: Como Captar Clientes e Construir Autoridade Digital",
    excerpt:
      "Guia completo para criar um site jurídico que gera consultas. Estratégias da CazaTech para advogados e escritórios em SP, RJ e BH.",
    category: "Marketing Jurídico",
    date: "21 Janeiro 2025",
    readTime: "14 min",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Equipe CazaTech",
      role: "Especialistas em Marketing Jurídico",
      avatar: "/images/cazatech-avatar.png",
    },
    tags: ["Advocacia", "Sites Jurídicos", "Marketing para Advogados", "OAB", "CazaTech"],
    content: `
      <article>
        <p class="text-lg leading-relaxed">O Brasil tem mais de <strong>1,3 milhão de advogados</strong> o maior número do mundo. Em <strong>São Paulo, Rio de Janeiro e Belo Horizonte</strong>, a disputa por clientes é intensa. Nesse cenário, a presença digital deixou de ser opcional: advogados que não aparecem no Google estão invisíveis para uma geração que pesquisa tudo online antes de contratar.</p>

        <p>A <strong>CazaTech</strong> já desenvolveu sites para dezenas de escritórios de advocacia e advogados autônomos. Neste guia, revelamos as estratégias que funcionam para transformar visitantes em clientes agendando consultas.</p>

        <div class="bg-primary/10 p-6 rounded-xl border border-primary/20 my-8">
          <h3 class="text-lg font-semibold mb-4">O que você vai aprender:</h3>
          <ul class="space-y-2">
            <li><strong>1.</strong> Por que 76% dos clientes pesquisam advogados online antes de contratar</li>
            <li><strong>2.</strong> Os 9 elementos essenciais em um site jurídico profissional</li>
            <li><strong>3.</strong> SEO para advogados: como aparecer no Google da sua cidade</li>
            <li><strong>4.</strong> Marketing de conteúdo jurídico que atrai clientes qualificados</li>
            <li><strong>5.</strong> Compliance: Código de Ética da OAB no ambiente digital</li>
          </ul>
        </div>

        <h2>O Novo Comportamento do Cliente Jurídico</h2>

        <p>O perfil do cliente que busca advogado mudou drasticamente:</p>

        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">76%</p>
            <p class="text-sm text-muted-foreground">pesquisam online antes de contratar um advogado</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">68%</p>
            <p class="text-sm text-muted-foreground">leem artigos do site antes de fazer contato</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border text-center">
            <p class="text-3xl font-bold text-primary">54%</p>
            <p class="text-sm text-muted-foreground">preferem agendar consulta online ou via WhatsApp</p>
          </div>
        </div>

        <p>Em <strong>São Paulo</strong>, buscas como "advogado trabalhista SP" têm milhares de pesquisas mensais. Em <strong>Belo Horizonte</strong>, "advogado previdenciário BH" é extremamente competitivo. No <strong>Rio de Janeiro</strong>, "advogado criminalista RJ" movimenta um mercado de alto valor.</p>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
          <p><strong>Realidade:</strong> O cliente moderno pesquisa, compara, lê conteúdos e avaliações antes de escolher. Se você não tem presença digital forte, está perdendo casos para quem tem.</p>
        </div>

        <h2>Os 9 Elementos Essenciais em um Site para Advogado</h2>

        <p>A CazaTech identificou os elementos que mais impactam na conversão de sites jurídicos:</p>

        <h3>1. Proposta de Valor Clara e Específica</h3>

        <p>Evite generalismo. O visitante precisa entender imediatamente suas <strong>áreas de atuação, localização e diferencial</strong>.</p>

        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <p><strong>Exemplo ruim:</strong> "Escritório de Advocacia XYZ Soluções Jurídicas"</p>
          <p><strong>Exemplo bom:</strong> "Advocacia Trabalhista em São Paulo. 15 anos defendendo direitos de trabalhadores. Atendimento humanizado e honorários justos. Agende sua consulta."</p>
        </div>

        <h3>2. Áreas de Atuação Detalhadas</h3>

        <p>Cada área merece uma página dedicada. Isso é fundamental para SEO e para demonstrar expertise:</p>

        <ul class="space-y-1 my-4">
          <li><strong>Direito Trabalhista:</strong> rescisão, horas extras, assédio, acidentes</li>
          <li><strong>Direito de Família:</strong> divórcio, guarda, pensão, inventário</li>
          <li><strong>Direito Empresarial:</strong> contratos, societário, recuperação judicial</li>
          <li><strong>Direito do Consumidor:</strong> bancos, planos de saúde, compras online</li>
          <li><strong>Direito Previdenciário:</strong> aposentadoria, auxílio-doença, BPC/LOAS</li>
        </ul>

        <h3>3. Apresentação dos Advogados</h3>

        <p>Clientes querem saber quem vai representá-los. Inclua:</p>

        <ul class="space-y-1 my-4">
          <li>Foto profissional (transmita credibilidade e acessibilidade)</li>
          <li>Número da OAB e seccional</li>
          <li>Formação acadêmica e especializações</li>
          <li>Experiência e casos relevantes (sem identificar clientes)</li>
          <li>Artigos ou publicações de autoria</li>
        </ul>

        <h3>4. Cases e Resultados (Com Discrição)</h3>

        <p>Demonstre competência sem violar sigilo profissional:</p>

        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <p><strong>Forma correta:</strong> "Recuperamos R$ 2,3 milhões em verbas rescisórias para trabalhadores do setor bancário nos últimos 3 anos"</p>
          <p><strong>Forma incorreta:</strong> "Ganhamos causa contra o Banco X para o cliente João" (viola sigilo)</p>
        </div>

        <h3>5. Blog Jurídico com Conteúdo de Valor</h3>

        <p>O marketing de conteúdo é a estratégia mais eficaz e ética para advogados. Artigos que atraem clientes:</p>

        <ul class="space-y-1 my-4">
          <li>"Fui demitido: quais são meus direitos?"</li>
          <li>"Divórcio consensual: quanto tempo demora e quanto custa?"</li>
          <li>"Como dar entrada na aposentadoria por tempo de contribuição"</li>
          <li>"Meus direitos como consumidor em compras online"</li>
        </ul>

        <h3>6. FAQ Jurídico</h3>

        <p>Responda dúvidas frequentes. Isso melhora SEO e qualifica leads:</p>

        <ul class="space-y-1 my-4">
          <li>Quanto custa uma consulta?</li>
          <li>Vocês trabalham com contingência (honorários de êxito)?</li>
          <li>Quanto tempo demora um processo trabalhista?</li>
          <li>Posso resolver meu caso sem ir ao tribunal?</li>
        </ul>

        <h3>7. Depoimentos e Avaliações</h3>

        <p>Prova social é permitida e poderosa. Colete e exiba:</p>

        <ul class="space-y-1 my-4">
          <li>Avaliações do Google (sem identificar processos)</li>
          <li>Depoimentos escritos com autorização</li>
          <li>Notas em plataformas como Jusbrasil</li>
        </ul>

        <h3>8. Múltiplos Canais de Contato</h3>

        <p>Facilite o contato ao máximo:</p>

        <ul class="space-y-1 my-4">
          <li>Formulário de consulta (com campos para descrever o caso)</li>
          <li>WhatsApp com link direto (preferido por 54% dos clientes)</li>
          <li>Telefone clicável</li>
          <li>E-mail profissional</li>
          <li>Agendamento online de consultas</li>
        </ul>

        <h3>9. Informações de Localização</h3>

        <p>Fundamental para SEO local:</p>

        <ul class="space-y-1 my-4">
          <li>Endereço completo com mapa</li>
          <li>Horários de atendimento</li>
          <li>Informações sobre estacionamento</li>
          <li>Se atende online (videoconferência)</li>
        </ul>

        <h2>SEO para Advogados: Apareça no Google</h2>

        <p>A maioria dos clientes busca por "advogado + especialidade + cidade". A <strong>CazaTech</strong> implementa estratégias específicas de SEO jurídico:</p>

        <h3>Palavras-chave de Alta Conversão por Área</h3>

        <table class="w-full my-6 border-collapse">
          <thead>
            <tr class="bg-accent/10">
              <th class="p-3 text-left border-b">Área</th>
              <th class="p-3 text-left border-b">Termos de Busca</th>
              <th class="p-3 text-left border-b">Intenção</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="p-3 font-semibold">Trabalhista</td>
              <td class="p-3">advogado trabalhista sp, calcular rescisão, processo por horas extras</td>
              <td class="p-3">Alta conversão</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Família</td>
              <td class="p-3">advogado divórcio rj, quanto custa inventário, guarda compartilhada</td>
              <td class="p-3">Alta conversão</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Previdenciário</td>
              <td class="p-3">advogado inss bh, aposentadoria negada, auxílio-doença recusado</td>
              <td class="p-3">Muito alta</td>
            </tr>
            <tr class="border-b">
              <td class="p-3 font-semibold">Consumidor</td>
              <td class="p-3">advogado contra banco, processo plano de saúde, nome negativado indevido</td>
              <td class="p-3">Alta conversão</td>
            </tr>
          </tbody>
        </table>

        <h3>Google Meu Negócio para Advogados</h3>

        <div class="bg-primary/10 p-6 rounded-xl my-6 border border-primary/20">
          <h4 class="font-semibold mb-3">Configuração Otimizada:</h4>
          <ul class="space-y-2">
            <li><strong>Categoria principal:</strong> Advogado ou Escritório de Advocacia</li>
            <li><strong>Categorias secundárias:</strong> áreas específicas (Advogado Trabalhista, etc.)</li>
            <li><strong>Serviços:</strong> cada área de atuação como serviço individual</li>
            <li><strong>Fotos:</strong> escritório, sala de reunião, equipe, fachada</li>
            <li><strong>Posts semanais:</strong> artigos do blog, mudanças na legislação</li>
            <li><strong>Respostas a avaliações:</strong> todas, com profissionalismo</li>
          </ul>
        </div>

        <h2>Marketing de Conteúdo Jurídico</h2>

        <p>O conteúdo é a forma mais eficaz e ética de atrair clientes para advogados. A CazaTech desenvolve estratégias de conteúdo baseadas em:</p>

        <h3>Tipos de Conteúdo que Convertem</h3>

        <div class="grid md:grid-cols-2 gap-4 my-6">
          <div class="bg-background p-4 rounded-lg border border-border">
            <h4 class="font-semibold mb-2">Conteúdo Informativo</h4>
            <ul class="text-sm space-y-1">
              <li>"Quais são meus direitos se fui demitido?"</li>
              <li>"Passo a passo do divórcio consensual"</li>
              <li>"Como funciona o inventário extrajudicial"</li>
            </ul>
            <p class="text-xs text-muted-foreground mt-2">Atrai quem está pesquisando</p>
          </div>
          <div class="bg-background p-4 rounded-lg border border-border">
            <h4 class="font-semibold mb-2">Conteúdo de Decisão</h4>
            <ul class="text-sm space-y-1">
              <li>"Quanto custa um advogado trabalhista em SP?"</li>
              <li>"Vale a pena processar a empresa?"</li>
              <li>"Acordo ou processo: o que é melhor?"</li>
            </ul>
            <p class="text-xs text-muted-foreground mt-2">Atrai quem está pronto para contratar</p>
          </div>
        </div>

        <h3>Frequência e Consistência</h3>

        <p>Recomendação CazaTech para advogados:</p>

        <ul class="space-y-2 my-4">
          <li><strong>Mínimo:</strong> 2 artigos por mês no blog</li>
          <li><strong>Ideal:</strong> 1 artigo por semana + posts em redes sociais</li>
          <li><strong>Avançado:</strong> Newsletter semanal + vídeos curtos</li>
        </ul>

        <h2>Compliance: Código de Ética da OAB</h2>

        <p>O marketing jurídico tem regras específicas que a CazaTech conhece profundamente:</p>

        <div class="bg-accent/10 p-4 rounded-lg my-4">
          <h4 class="font-semibold mb-2 text-green-600">Permitido:</h4>
          <ul class="space-y-1">
            <li>Divulgar áreas de atuação e especializações</li>
            <li>Publicar artigos educativos e informativos</li>
            <li>Ter presença em redes sociais com conteúdo profissional</li>
            <li>Exibir depoimentos de clientes (com autorização)</li>
            <li>Informar sobre honorários de forma discreta</li>
            <li>Patrocinar eventos jurídicos e acadêmicos</li>
          </ul>
        </div>

        <div class="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg my-4">
          <h4 class="font-semibold mb-2 text-red-600">Proibido:</h4>
          <ul class="space-y-1">
            <li>Captação ativa de clientes (ambulance chasing)</li>
            <li>Garantir resultados em processos</li>
            <li>Usar termos como "o melhor advogado", "líder em"</li>
            <li>Divulgar valores de causas ganhas de forma sensacionalista</li>
            <li>Violar sigilo profissional em cases</li>
            <li>Fazer propaganda em rádio/TV (com algumas exceções)</li>
            <li>Oferecer consultas gratuitas como marketing</li>
          </ul>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg my-6">
          <p><strong>Importante:</strong> A linha entre marketing permitido e captação indevida pode ser tênue. A CazaTech desenvolve estratégias que maximizam resultados dentro dos limites éticos da OAB.</p>
        </div>

        <h2>Quanto Custa um Site para Advogado?</h2>

        <p>A CazaTech oferece soluções para diferentes perfis:</p>

        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="bg-background p-6 rounded-lg border border-border">
            <h4 class="font-bold text-lg mb-2">Advogado Autônomo</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 5k - 10k</p>
            <p class="text-sm text-muted-foreground mb-4">Site profissional para começar</p>
            <ul class="text-xs space-y-1">
              <li>5-7 páginas otimizadas</li>
              <li>Blog integrado</li>
              <li>Formulário de contato + WhatsApp</li>
              <li>Google Meu Negócio configurado</li>
            </ul>
          </div>
          <div class="bg-background p-6 rounded-lg border border-primary">
            <h4 class="font-bold text-lg mb-2">Escritório Boutique</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 10k - 25k</p>
            <p class="text-sm text-muted-foreground mb-4">Site completo com blog robusto</p>
            <ul class="text-xs space-y-1">
              <li>10-20 páginas + blog ativo</li>
              <li>Área de artigos/publicações</li>
              <li>SEO avançado por área</li>
              <li>Integração com redes sociais</li>
            </ul>
          </div>
          <div class="bg-background p-6 rounded-lg border border-border">
            <h4 class="font-bold text-lg mb-2">Escritório Full Service</h4>
            <p class="text-2xl font-bold text-primary mb-2">R$ 25k - 60k</p>
            <p class="text-sm text-muted-foreground mb-4">Ecossistema digital completo</p>
            <ul class="text-xs space-y-1">
              <li>Site ilimitado + área do cliente</li>
              <li>Sistema de agendamento de consultas</li>
              <li>Automação de follow-up</li>
              <li>Dashboard de métricas e leads</li>
            </ul>
          </div>
        </div>

        <h2>Case de Sucesso: Escritório Trabalhista em São Paulo</h2>

        <div class="bg-green-50 dark:bg-green-900/10 p-6 rounded-xl my-6">
          <h3 class="font-semibold mb-4">Escritório Especializado em Direito do Trabalho</h3>

          <p class="mb-4"><strong>Desafio:</strong> Escritório com 10 anos de mercado, mas sem presença digital. Dependia exclusivamente de indicações e tinha dificuldade em crescer.</p>

          <p class="mb-4"><strong>Solução CazaTech:</strong></p>
          <ul class="space-y-1 mb-4">
            <li>Novo site com páginas específicas para cada tipo de causa trabalhista</li>
            <li>Blog com 30 artigos respondendo dúvidas comuns de trabalhadores</li>
            <li>SEO focado em "advogado trabalhista zona sul sp" e variações</li>
            <li>Sistema de agendamento de consultas via WhatsApp</li>
          </ul>

          <p class="mb-2"><strong>Resultados em 6 meses:</strong></p>
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">Top 3</p>
              <p class="text-xs">Google para "advogado trabalhista SP"</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">+320%</p>
              <p class="text-xs">Consultas agendadas/mês</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">45%</p>
              <p class="text-xs">Conversão de consulta em contrato</p>
            </div>
            <div class="bg-background p-3 rounded-lg text-center">
              <p class="text-xl font-bold text-primary">+R$ 180k</p>
              <p class="text-xs">Faturamento mensal adicional</p>
            </div>
          </div>
        </div>

        <h2>Sites para Advogados em São Paulo, Rio de Janeiro e Belo Horizonte</h2>

        <p>A <strong>CazaTech</strong> entende as particularidades do mercado jurídico em cada região:</p>

        <h3>São Paulo</h3>
        <p>Maior mercado jurídico do país. Concorrência extrema exige especialização clara e SEO agressivo. Foco em bairros (Paulista, Pinheiros, Itaim) e nichos específicos. Sites precisam transmitir sofisticação para competir com grandes bancas.</p>

        <h3>Rio de Janeiro</h3>
        <p>Mercado tradicional com forte peso de reputação. Marketing de conteúdo funciona bem para construir autoridade. Áreas de consumidor e família são muito buscadas. Zona Sul e Barra concentram público de maior poder aquisitivo.</p>

        <h3>Belo Horizonte</h3>
        <p>Mercado em amadurecimento digital. Advogados que investem em presença online agora têm vantagem significativa. Direito previdenciário e trabalhista dominam as buscas. Custo de aquisição de cliente ainda é favorável.</p>

        <h2>Automação de Atendimento para Advogados</h2>

        <p>A <strong>CazaTech</strong> oferece soluções de automação específicas para escritórios:</p>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-lg font-semibold mb-3">Assistente Jurídico Virtual</h3>
          <p class="mb-4">Sistema de atendimento via WhatsApp que:</p>
          <ul class="space-y-2">
            <li><strong>Qualifica leads:</strong> perguntas iniciais para entender o caso</li>
            <li><strong>Agenda consultas:</strong> sincronizado com sua agenda</li>
            <li><strong>Envia lembretes:</strong> reduz faltas em consultas</li>
            <li><strong>Coleta documentos:</strong> solicita informações antes da reunião</li>
            <li><strong>Responde dúvidas comuns:</strong> 24/7, sem você precisar intervir</li>
          </ul>
          <p class="mt-4 text-sm text-muted-foreground">Tudo dentro dos limites éticos da OAB informativo, não captação.</p>
        </div>

        <h2>Próximos Passos: Transforme Seu Escritório</h2>

        <p>A CazaTech oferece um diagnóstico gratuito da presença digital do seu escritório:</p>

        <div class="bg-primary/10 p-6 rounded-xl my-8 border border-primary/20">
          <h3 class="text-xl font-bold mb-4">Diagnóstico Digital Gratuito para Advogados</h3>
          <p class="mb-4">Em uma análise completa, nossos especialistas avaliam:</p>
          <ul class="space-y-2 mb-6">
            <li>Performance do site atual (se houver)</li>
            <li>Posicionamento no Google para termos da sua área</li>
            <li>Análise do Google Meu Negócio</li>
            <li>Oportunidades de conteúdo não exploradas</li>
            <li>Comparativo com concorrentes da sua região</li>
            <li>Estimativa de investimento e retorno esperado</li>
          </ul>
          <p class="text-lg font-semibold">Receba um plano de ação personalizado sem compromisso.</p>
        </div>

        <hr class="my-8" />

        <p class="text-lg"><strong>A CazaTech</strong> é especialista em sites e marketing digital para advogados e escritórios de advocacia. Atendemos profissionais em São Paulo, Rio de Janeiro, Belo Horizonte e todo o Brasil.</p>

        <p>Quer mais clientes encontrando seu escritório no Google? <strong>Fale com a CazaTech</strong> e descubra como construir autoridade digital de forma ética e eficaz.</p>
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

export const metadata = {
  title: "FAQ/Perguntas Frequentes - CazaTech",
};

export default function FAQPage() {
  const questions = [
    {
      question: "Como posso cancelar meu serviço?",
      answer:
        "O cancelamento pode ser solicitado através do painel do cliente ou por e-mail com 30 dias de antecedência.",
    },
    {
      question: "Quais métodos de pagamento são aceitos?",
      answer: "Aceitamos cartões de crédito, PIX e boleto bancário.",
    },
    {
      question: "Há garantia nos serviços prestados?",
      answer:
        "Oferecemos garantia de 30 dias para correção de problemas em nossos serviços.",
    },
    {
      question: "Como entro em contato com o suporte?",
      answer:
        "Nosso suporte está disponível via e-mail support@caza-tech.com.",
    },
  ];

  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Perguntas Frequentes
      </h2>

      <div className="space-y-6">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              {item.question}
            </h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 border-t border-gray-200 pt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Contato Oficial</h3>
        <ul className="text-gray-700">
          <li>
            <strong>E-mail:</strong> <a href="mailto:support@caza-tech.com">support@caza-tech.com</a>
          </li>
          <li>
            <strong>Telefone/WhatsApp:</strong> +55 11 93620-5799
          </li>
          <li>
            <strong>Site:</strong> <a href="https://www.caza-tech.com" target="_blank" rel="noopener noreferrer">www.caza-tech.com</a>
          </li>
        </ul>
      </section>
    </article>
  );
}

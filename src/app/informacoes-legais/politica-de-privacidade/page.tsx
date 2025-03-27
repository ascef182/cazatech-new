export const metadata = {
  title: "Política de Privacidade - CazaTech",
};

export default function PrivacyPolicy() {
  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Política de Privacidade
      </h2>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          1. Informações Gerais
        </h3>
        <p className="text-gray-600 mb-4">
          A CazaTech valoriza a privacidade de seus usuários. Esta política
          descreve como coletamos, usamos e protegemos suas informações
          pessoais.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          2. Dados Coletados
        </h3>
        <p className="text-gray-600 mb-4">
          Podemos coletar informações como nome, e-mail, telefone e dados de
          navegação quando você interage com nosso site ou serviços.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          3. Uso dos Dados
        </h3>
        <p className="text-gray-600 mb-4">
          Utilizamos seus dados para fornecer nossos serviços, melhorar sua
          experiência e enviar comunicações relevantes.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          4. Alterações nesta Política
        </h3>
        <p className="text-gray-600">
          Reservamos o direito de modificar esta política a qualquer momento.
          Alterações significativas serão comunicadas aos usuários.
        </p>
      </section>
    </article>
  );
}

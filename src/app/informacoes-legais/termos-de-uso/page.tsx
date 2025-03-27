export const metadata = {
  title: "Termos de Uso - CazaTech",
};

export default function TermsOfService() {
  return (
    <article className="prose max-w-none">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Termos de Uso
      </h2>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          1. Aceitação dos Termos
        </h3>
        <p className="text-gray-600 mb-4">
          Ao acessar e usar os serviços da CazaTech, você concorda com estes
          Termos de Uso.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          2. Uso Adequado
        </h3>
        <p className="text-gray-600 mb-4">
          Você concorda em não utilizar nossos serviços para atividades ilegais
          ou que violem direitos de terceiros.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          3. Propriedade Intelectual
        </h3>
        <p className="text-gray-600 mb-4">
          Todo o conteúdo e software fornecido pela CazaTech são protegidos por
          leis de propriedade intelectual.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-medium text-gray-700 mb-3">
          4. Limitação de Responsabilidade
        </h3>
        <p className="text-gray-600">
          A CazaTech não será responsável por danos indiretos, incidentais ou
          consequenciais decorrentes do uso de nossos serviços.
        </p>
      </section>
    </article>
  );
}

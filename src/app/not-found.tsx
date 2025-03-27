import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
      <div className="container text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link
          href="/"
          className="inline-flex bg-black text-white py-3 px-6 rounded hover:bg-black/90 transition-colors font-medium"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}

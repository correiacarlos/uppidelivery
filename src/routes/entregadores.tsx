import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/entregadores")({
  head: () => ({
    meta: [
      { title: "Para entregadores – UPPI" },
      { name: "description", content: "Ganhe por entrega, com horários flexíveis e atuando na sua própria cidade. Cadastre-se na UPPI." },
      { property: "og:title", content: "Para entregadores – UPPI" },
      { property: "og:description", content: "Trabalhe perto de casa, no seu ritmo." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Seja um entregador UPPI</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Faça parte da rede que move o comércio da sua cidade.
        </p>

        <div className="mt-10 rounded-3xl bg-primary p-10 text-primary-foreground" style={{ boxShadow: "var(--shadow-soft)" }}>
          <ul className="space-y-4 text-lg">
            <li>✓ Ganhos por entrega realizada</li>
            <li>✓ Horários flexíveis – você escolhe quando rodar</li>
            <li>✓ Atuação na sua própria cidade</li>
          </ul>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:brightness-95"
          >
            Quero me cadastrar
          </Link>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { HandCoins, Unlock, Zap, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/vantagens")({
  head: () => ({
    meta: [
      { title: "Vantagens para lojistas – UPPI" },
      { name: "description", content: "Taxas justas, sem exclusividade, pagamento rápido e suporte local. Conheça as vantagens da UPPI para o seu estabelecimento." },
      { property: "og:title", content: "Vantagens para lojistas – UPPI" },
      { property: "og:description", content: "Uma parceria construída com transparência para o comércio local." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = [
    { icon: HandCoins, title: "Taxas justas", desc: "Condições pensadas para o comércio local prosperar." },
    { icon: Unlock, title: "Sem exclusividade", desc: "Sua loja, suas regras. Você não fica preso a uma só plataforma." },
    { icon: Zap, title: "Pagamento rápido", desc: "Receba pelas vendas com agilidade e clareza." },
    { icon: HeartHandshake, title: "Suporte local", desc: "Gente da sua região, próxima e disponível." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Vantagens para lojistas</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Mais que um app, uma parceria com quem faz o comércio acontecer.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <v.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-xl font-bold">{v.title}</h2>
              <p className="mt-1 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/login-estabelecimento"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            Quero cadastrar meu estabelecimento
          </Link>
        </div>
      </div>
    </section>
  );
}

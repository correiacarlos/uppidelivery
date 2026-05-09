import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Uppi Delivery" },
      { name: "description", content: "Conheça a história, missão e valores do Uppi Delivery." },
      { property: "og:title", content: "Sobre o Uppi Delivery" },
      { property: "og:description", content: "Conheça a história, missão e valores do Uppi Delivery." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Sobre o Uppi Delivery</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          O Uppi Delivery é uma plataforma que conecta estabelecimentos, entregadores e
          consumidores em uma experiência simples, rápida e confiável. Nossa missão é
          impulsionar o comércio local e oferecer oportunidades reais de crescimento
          para parceiros e entregadores.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-xl font-black">Nossa Missão</h2>
            <p className="mt-2 text-muted-foreground">
              Facilitar o dia a dia das pessoas, conectando consumidores aos melhores
              estabelecimentos da sua região com agilidade e qualidade.
            </p>
          </div>
          <div className="rounded-3xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-xl font-black">Nossos Valores</h2>
            <p className="mt-2 text-muted-foreground">
              Transparência, parceria, inovação e compromisso com a comunidade que
              construímos junto a lojistas e entregadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

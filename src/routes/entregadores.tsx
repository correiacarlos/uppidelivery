import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  UserPlus,
  ListChecks,
  CalendarDays,
  ShieldCheck,
  Wallet,
  HeartHandshake,
  FileBadge,
  Award,
} from "lucide-react";
import courierHero from "@/assets/courier-hero.jpg";
import courierEarnings from "@/assets/courier-earnings.jpg";
import courierFlexible from "@/assets/courier-flexible.jpg";
import courierOl from "@/assets/courier-ol.jpg";

export const Route = createFileRoute("/entregadores")({
  head: () => ({
    meta: [
      { title: "Seja entregador UPPI – Ganhe dinheiro semanalmente" },
      {
        name: "description",
        content:
          "Cadastre-se como entregador UPPI. Ganhos por entrega, horários flexíveis e atuação na sua cidade.",
      },
      { property: "og:title", content: "Seja entregador UPPI" },
      {
        property: "og:description",
        content: "Ganhe dinheiro semanalmente fazendo entregas com o Uppi.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero />
      <Vantagens />
      <CentralEntregador />
      <OperadorLogistico />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[oklch(0.18_0.02_155)] text-white">
      {/* Imagem de fundo no lado direito */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-0 w-full md:w-3/5 lg:w-1/2"
        style={{
          backgroundImage: `url(${courierHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      />
      {/* Gradiente para fundir a foto com o fundo escuro */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.18 0.02 155) 0%, oklch(0.18 0.02 155) 35%, oklch(0.18 0.02 155 / 0.85) 50%, oklch(0.18 0.02 155 / 0.2) 70%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 -z-0 bg-black/30 md:hidden" />

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 sm:py-24 md:min-h-[640px]">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Que tal entregar
            <br />
            com a UPPI?
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/85 sm:text-xl">
            Ganhe do seu jeito, quando e onde quiser.
          </p>
          <Link
            to="/seja-entregador"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition hover:bg-primary-light"
          >
            Vem ser UPPI
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Vantagens() {
  const cards = [
    {
      image: courierEarnings,
      alt: "Entregador UPPI sorrindo segurando sacola de entrega",
      title: "Ganhe mais a cada pedido!",
      desc: "Transforme seu tempo em dinheiro: quanto mais você entrega, mais você ganha. Simples assim.",
      bullets: [
        "Taxas competitivas",
        "Ganhos turbinados nos horários de pico",
        "Convide sua rede e ganhe incentivos por indicação",
      ],
      reverse: false,
    },
    {
      image: courierFlexible,
      alt: "Dois entregadores UPPI trocando uma sacola laranja",
      title: "Online à qualquer hora!",
      desc: "Controle total: entregue a qualquer hora, em qualquer dia — a escolha é sua! Perfeito para estudantes, pais, freelancers ou qualquer pessoa que queira mais flexibilidade.",
      bullets: [
        "No seu ritmo — você decide quando ficar online",
        "Sem horas mínimas, sem pressão",
        "Cadastro fácil — comece sem experiência",
      ],
      reverse: true,
    },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
          Vantagens de entregar com a UPPI
        </h2>

        <div className="mt-12 space-y-8">
          {cards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-3xl bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="grid items-stretch gap-0 md:grid-cols-2">
                <div
                  className={`relative min-h-[240px] md:min-h-[320px] ${
                    c.reverse ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.alt}
                    width={800}
                    height={640}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className={`p-6 sm:p-8 md:p-10 ${c.reverse ? "md:order-1" : ""}`}>
                  <h3 className="font-display text-2xl font-black text-foreground sm:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{c.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CentralEntregador() {
  const items = [
    { icon: UserPlus, label: "Cadastro de entregador" },
    { icon: ListChecks, label: "Atribuição de pedidos" },
    { icon: CalendarDays, label: "Rotina diária do entregador" },
    { icon: FileBadge, label: "Código de conduta" },
    { icon: Wallet, label: "Ganhos do entregador" },
    { icon: ShieldCheck, label: "Segurança e proteção" },
    { icon: HeartHandshake, label: "Seguro para entregadores" },
    { icon: Award, label: "Incentivos para entregadores OL" },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
          Central do entregador / Perguntas frequentes
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {items.map((it) => (
            <button
              key={it.label}
              type="button"
              className="group flex flex-col items-center justify-center rounded-2xl bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-lg sm:p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </span>
              <span className="mt-3 text-xs font-semibold text-foreground sm:text-sm">
                {it.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperadorLogistico() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <article
          className="overflow-hidden rounded-3xl bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="grid items-stretch gap-0 md:grid-cols-2">
            <div className="relative min-h-[260px] md:min-h-[340px]">
              <img
                src={courierOl}
                alt="Operador logístico UPPI trabalhando no computador"
                width={800}
                height={640}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="font-display text-2xl font-black text-foreground sm:text-3xl">
                Você é Operador Logístico (OL)?
              </h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Sua empresa de entregas possui frota própria? Seja um parceiro UPPI e conte com
                benefícios exclusivos. Clique no botão abaixo, preencha seus dados e entraremos em
                contato em breve.
              </p>
              <Link
                to="/contato"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-light"
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

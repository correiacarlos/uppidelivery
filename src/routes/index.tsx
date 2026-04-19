import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, Store, Bike, HandCoins, Unlock, Zap, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-delivery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPPI – Delivery local que fortalece sua cidade" },
      {
        name: "description",
        content:
          "O delivery que conecta clientes, lojistas e entregadores da própria cidade. Mais vendas para o comércio local.",
      },
      { property: "og:title", content: "UPPI – Delivery local" },
      {
        property: "og:description",
        content: "Mais vendas para os lojistas. Mais oportunidades para a cidade.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-4xl leading-tight font-black sm:text-5xl md:text-6xl">
              O delivery que fortalece o comércio local.
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              Mais vendas para os lojistas. Mais oportunidades para a cidade.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg transition hover:brightness-95"
              >
                Cadastrar estabelecimento
              </Link>
              <Link
                to="/entregadores"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Quero ser entregador
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Entregador UPPI em frente a uma loja local"
              width={1280}
              height={1024}
              className="relative w-full rounded-3xl bg-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">Como funciona</h2>
            <p className="mt-3 text-muted-foreground">
              Simples para o cliente, o lojista e o entregador.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { icon: ShoppingBag, title: "1. Cliente faz o pedido", desc: "Pelo app, em poucos toques." },
              { icon: Store, title: "2. Estabelecimento prepara", desc: "O lojista recebe e prepara o pedido." },
              { icon: Bike, title: "3. Entregador entrega", desc: "Um entregador da cidade leva até a porta." },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border bg-card p-8 text-center transition hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section
        className="py-20"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black sm:text-4xl">Vantagens para lojistas</h2>
            <p className="mt-3 text-muted-foreground">
              Uma parceria construída com transparência.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HandCoins, title: "Taxas justas", desc: "Condições pensadas para o comércio local." },
              { icon: Unlock, title: "Sem exclusividade", desc: "Você decide onde também quer estar." },
              { icon: Zap, title: "Pagamento rápido", desc: "Receba sem complicação." },
              { icon: HeartHandshake, title: "Suporte local", desc: "Gente da sua região para te ajudar." },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:bg-primary-dark"
            >
              Quero cadastrar meu estabelecimento
            </Link>
          </div>
        </div>
      </section>

      {/* Entregadores */}
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground" style={{ boxShadow: "var(--shadow-soft)" }}>
            <h2 className="text-3xl font-black sm:text-4xl">Para entregadores</h2>
            <ul className="mt-6 space-y-3 text-base opacity-95">
              <li>• Ganhos por entrega realizada</li>
              <li>• Horários flexíveis, você escolhe quando rodar</li>
              <li>• Atue na sua própria cidade</li>
            </ul>
            <Link
              to="/entregadores"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:brightness-95"
            >
              Quero me cadastrar
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Trabalhe perto de casa</h3>
            <p className="mt-3 text-muted-foreground">
              A UPPI valoriza quem faz a cidade acontecer. Aqui o entregador é parte
              da rede, com regras claras e suporte direto.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Quer saber mais?</h2>
          <p className="mt-3 text-muted-foreground">Fale com a gente.</p>
        </div>
        <form
          className="mt-10 space-y-4 rounded-3xl bg-card p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Recebemos sua mensagem! Em breve entraremos em contato.");
          }}
        >
          <div>
            <label className="text-sm font-semibold">Nome</label>
            <input
              required
              className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Telefone ou WhatsApp</label>
            <input
              required
              className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Mensagem</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ShoppingBag, Package, Bike, Smartphone, Apple, DollarSign, Calendar, MapPin, Send } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import courierStreet from "@/assets/courier-street.jpg";
import deliveryHandover from "@/assets/delivery-handover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UPPI – Delivery local que fortalece sua cidade" },
      {
        name: "description",
        content:
          "Encontre os melhores estabelecimentos delivery da sua cidade. UPPI conecta clientes, lojistas e entregadores locais.",
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
      <Hero />
      <CitySearch />
      <HowItWorks />
      <ForCouriers />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl leading-[1.05] font-black text-foreground sm:text-5xl md:text-6xl">
            O delivery que fortalece o comércio local.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Mais vendas para os lojistas. Mais oportunidades para a cidade.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:bg-primary-dark"
            >
              Cadastrar estabelecimento <Send className="h-4 w-4" />
            </Link>
            <Link
              to="/entregadores"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary/10"
            >
              Quero ser entregador
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroPhone}
            alt="Aplicativo UPPI no celular"
            width={1024}
            height={896}
            className="relative w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function CitySearch() {
  const [city, setCity] = useState("");
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
          Encontre os melhores estabelecimentos Delivery da sua Cidade
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Digite o nome da sua cidade e descubra todos os estabelecimentos disponíveis
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Em breve: estabelecimentos em ${city || "sua cidade"}.`);
          }}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-full bg-card p-2 sm:flex-row"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 rounded-full bg-transparent px-5 py-3 text-sm outline-none"
            placeholder="Digite o nome da cidade..."
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            <Search className="h-4 w-4" /> Ver Estabelecimentos
          </button>
        </form>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: ShoppingBag, title: "Escolha a sua Cidade", desc: "Selecione sua cidade e endereço de entrega" },
    { icon: Package, title: "Cliente faz o pedido", desc: "O cliente escolhe o estabelecimento e faz seu pedido de forma rápida e fácil." },
    { icon: Bike, title: "Pedido pronto", desc: "O estabelecimento entrega na sua porta ou você pode retirar no local" },
  ];
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Como funciona</h2>
          <p className="mt-2 text-sm opacity-90">Simples, rápido e eficiente</p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-md">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-md rounded-3xl border-2 border-white/70 p-6 text-center">
          <p className="font-bold">Baixe nosso App, é grátis!</p>
          <div className="mt-4 flex items-center justify-center gap-8">
            <a href="#" aria-label="Google Play" className="opacity-95 transition hover:opacity-100">
              <Smartphone className="h-9 w-9" />
            </a>
            <a href="#" aria-label="App Store" className="opacity-95 transition hover:opacity-100">
              <Apple className="h-9 w-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForCouriers() {
  const items = [
    { icon: DollarSign, title: "Ganhos por entrega", desc: "Receba de forma justa por cada entrega realizada" },
    { icon: Calendar, title: "Horários flexíveis", desc: "Trabalhe nos horários que melhor se encaixam na sua rotina" },
    { icon: MapPin, title: "Atuação local", desc: "Trabalhe na sua própria cidade, perto de casa" },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <img
            src={courierStreet}
            alt="Entregador UPPI ao lado da moto em rua local"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">Para entregadores</h2>
          <p className="mt-3 text-muted-foreground">
            Faça parte da nossa equipe e tenha a liberdade de trabalhar do seu jeito.
          </p>
          <ul className="mt-7 space-y-5">
            {items.map((it) => (
              <li key={it.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            Quero me cadastrar <Send className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Quer saber mais? Fale com a gente.</h2>
          <p className="mt-3 text-muted-foreground">Estamos aqui para ajudar você</p>
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
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Telefone ou WhatsApp</label>
            <input
              required
              className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="(11) 98765-4321"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Mensagem</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              placeholder="Como podemos ajudar você?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            Enviar mensagem <Send className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-10 overflow-hidden rounded-3xl">
          <img
            src={deliveryHandover}
            alt="Entregador entregando pedido"
            width={1280}
            height={640}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

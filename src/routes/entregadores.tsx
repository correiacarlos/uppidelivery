import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { DollarSign, Clock, Check, Car, Bike, ArrowRight } from "lucide-react";
import courierBg from "@/assets/courier-bg.jpg";
import phoneApps from "@/assets/hero-phone.jpg";
import courierHero from "@/assets/courier-hero.jpg";

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
      <CadastroSection />
      <Benefits />
      <HowToStart />
      <Requirements />
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
          <a
            href="#cadastro"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition hover:bg-primary-light"
          >
            Vem ser UPPI
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CadastroSection() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    senha: "",
    confirmar: "",
    veiculo: false,
    aceito: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.aceito) {
      alert("Você precisa aceitar os termos e condições.");
      return;
    }
    if (form.senha !== form.confirmar) {
      alert("As senhas não conferem.");
      return;
    }
    alert("Cadastro enviado! Em breve entraremos em contato.");
  };

  return (
    <section id="cadastro" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-foreground sm:text-4xl">
            Cadastre-se agora
          </h2>
          <p className="mt-3 text-muted-foreground">
            Preencha seus dados e comece a fazer entregas com o UPPI.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 w-full max-w-md space-y-4 rounded-3xl bg-card p-6 sm:p-8"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <Field
            label="Nome Completo"
            placeholder="Seu nome completo"
            value={form.nome}
            onChange={(v) => setForm({ ...form, nome: v })}
            required
          />
          <Field
            label="Telefone"
            placeholder="(00) 00000-0000"
            value={form.telefone}
            onChange={(v) => setForm({ ...form, telefone: v })}
            required
          />
          <Field
            label="E-mail"
            type="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            required
          />
          <Field
            label="Cidade"
            placeholder="Sua cidade"
            value={form.cidade}
            onChange={(v) => setForm({ ...form, cidade: v })}
            required
          />
          <Field
            label="Senha"
            type="password"
            placeholder="Mínimo 6 caracteres"
            value={form.senha}
            onChange={(v) => setForm({ ...form, senha: v })}
            required
            minLength={6}
          />
          <Field
            label="Confirmar Senha"
            type="password"
            placeholder="Digite a senha novamente"
            value={form.confirmar}
            onChange={(v) => setForm({ ...form, confirmar: v })}
            required
            minLength={6}
          />

          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={form.veiculo}
              onChange={(e) => setForm({ ...form, veiculo: e.target.checked })}
              className="h-4 w-4 rounded border-input accent-primary"
            />
            Possuo veículo próprio
          </label>

          <label className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={form.aceito}
              onChange={(e) => setForm({ ...form, aceito: e.target.checked })}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-primary"
            />
            <span>
              Ao marcar esta caixa, você concorda com os{" "}
              <a href="#" className="font-semibold text-primary underline">
                termos e condições
              </a>{" "}
              e nossa política de uso de dados. Você também concorda em receber chamadas ou
              mensagens SMS.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:bg-primary-dark"
          >
            Cadastre-se
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  minLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

function Benefits() {
  const items = [
    {
      icon: DollarSign,
      title: "Ganhos",
      desc: "Ganhe dinheiro por cada entrega realizada. Quanto mais você trabalha, mais você ganha.",
    },
    {
      icon: Clock,
      title: "Flexibilidade",
      desc: "Escolha seus próprios horários. Trabalhe quando e quanto quiser, do seu jeito.",
    },
    {
      icon: Check,
      title: "Cadastro fácil",
      desc: "Processo de cadastro rápido e simples. Comece a trabalhar em poucos passos.",
    },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-black text-primary sm:text-3xl md:text-4xl">
          Por que fazer entregas com o Uppi?
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-foreground">{it.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToStart() {
  const steps = [
    {
      n: "01",
      title: "Cadastre-se em 3 passos",
      desc: "Preencha o formulário acima com seus dados pessoais e informações do veículo.",
    },
    {
      n: "02",
      title: "Baixe o aplicativo",
      desc: "Após a aprovação do cadastro, baixe o app Uppi Entregador e faça login.",
    },
    {
      n: "03",
      title: "Faça suas primeiras entregas",
      desc: "Aceite pedidos, realize entregas e comece a ganhar dinheiro imediatamente.",
    },
  ];
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${courierBg})`,
          filter: "blur(8px)",
          transform: "scale(1.1)",
          opacity: 0.2,
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/70" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-black text-primary sm:text-3xl md:text-4xl">
          Como começar a fazer entregas?
        </h2>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {s.n}
                </span>
                <div className="text-foreground">
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="mt-1 text-sm">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex justify-center">
            <img
              src={phoneApps}
              alt="App Uppi Entregador"
              width={400}
              height={300}
              loading="lazy"
              className="w-2/3 max-w-xs rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Requirements() {
  const groups = [
    {
      icon: Car,
      title: "CARRO",
      items: ["CNH categoria B válida", "Smartphone Android/iOS", "Maior de 18 anos", "Documento do veículo"],
    },
    {
      icon: Bike,
      title: "MOTO",
      items: ["CNH categoria A válida", "Smartphone Android/iOS", "Maior de 18 anos", "Documento do veículo"],
    },
  ];
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
          O que você precisa para começar?
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex justify-center text-primary">
                <g.icon className="h-10 w-10" />
              </div>
              <h3 className="mt-3 text-center font-black text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

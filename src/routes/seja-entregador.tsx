import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import courierBg from "@/assets/courier-bg.jpg";
import courierEarnings from "@/assets/courier-earnings.jpg";
import courierFlexible from "@/assets/courier-flexible.jpg";

export const Route = createFileRoute("/seja-entregador")({
  head: () => ({
    meta: [
      { title: "Seja UPPI – Cadastro de entregadores" },
      {
        name: "description",
        content:
          "Cadastre-se para ser entregador UPPI. Confira os requisitos e comece o seu cadastro.",
      },
      { property: "og:title", content: "Seja UPPI – Cadastro de entregadores" },
      {
        property: "og:description",
        content: "Comece agora a entregar com a UPPI. Veja os requisitos e cadastre-se.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${courierBg})`,
            filter: "blur(8px) brightness(0.55)",
            transform: "scale(1.1)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.05 155 / 0.85) 0%, oklch(0.18 0.02 155 / 0.92) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-6">
          <Link
            to="/entregadores"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-8 md:pt-8">
          <RequirementsCard />
          <StartCard />
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-black text-foreground sm:text-5xl">
            Vantagens de entregar com a UPPI
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <AdvantageCard
              image={courierEarnings}
              title="Ganhe mais a cada pedido!"
              items={[
                "Transforme seu tempo em dinheiro: quanto mais você entrega, mais você ganha. Simples assim.",
                "Taxas competitivas",
                "Ganhos turbinados nos horários de pico",
                "Convide sua rede e curta incentivos por indicação",
              ]}
            />
            <AdvantageCard
              image={courierFlexible}
              title="Online à qualquer hora!"
              items={[
                "Controle total: entregue a qualquer hora, em qualquer dia – a escolha é sua! Perfeito para estudantes, pais, freelancers ou qualquer pessoa que queira mais flexibilidade.",
                "No seu ritmo — você decide quando ficar online",
                "Sem horas mínimas, sem pressão",
                "Cadastro fácil — comece sem experiência",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function AdvantageCard({
  image,
  title,
  items,
}: {
  image: string;
  title: string;
  items: string[];
}) {
  return (
    <article className="overflow-hidden">
      <div className="overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="h-64 w-full object-cover sm:h-72" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-black text-foreground sm:text-3xl">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RequirementsCard() {
  const items = [
    { n: 1, title: "Ter 18 anos ou mais", sub: null as string[] | null },
    {
      n: 2,
      title: "Documento de identificação válido",
      sub: [
        "Entregadores de moto: CNH (Categoria A)",
        "Entregadores de carro: CNH (Categoria B)",
        "Entregadores de bicicleta: RG/RNE",
      ],
    },
    {
      n: 3,
      title:
        "Conta bancária (conta corrente ou poupança) e CPF (Cadastro de Pessoas Físicas) em seu nome",
      sub: null,
    },
    {
      n: 4,
      title:
        "Smartphone com iOS 13/Android 5.0 ou superior, com câmeras frontal e traseira funcionando corretamente",
      sub: null,
    },
  ];

  return (
    <article
      className="rounded-3xl bg-card p-6 text-foreground sm:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h1 className="font-display text-2xl font-black sm:text-3xl">
        O que você precisa para entregar com a gente
      </h1>

      <ol className="mt-6 space-y-5">
        {items.map((it) => (
          <li key={it.n} className="flex gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {it.n}
            </span>
            <div className="pt-0.5">
              <p className="font-bold text-foreground">{it.title}</p>
              {it.sub && (
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {it.sub.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

function StartCard() {
  const navigate = useNavigate();
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!estado || !cidade) {
      alert("Selecione seu estado e cidade.");
      return;
    }
    if (!nome.trim() || !sobrenome.trim()) {
      alert("Preencha nome e sobrenome.");
      return;
    }
    navigate({
      to: "/cadastro-entregador",
      search: {
        estado,
        cidade,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
      },
    });
  }

  return (
    <article
      className="rounded-3xl bg-card p-6 text-foreground sm:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h2 className="font-display text-2xl font-black sm:text-3xl">Comece seu cadastro</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Selecione sua localização e nos diga seu nome para continuar.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <LocationPicker
          estado={estado}
          cidade={cidade}
          onChange={(e, c) => {
            setEstado(e);
            setCidade(c);
          }}
        />

        <Field
          label="Nome"
          placeholder="Seu nome"
          value={nome}
          onChange={setNome}
          required
        />
        <Field
          label="Sobrenome"
          placeholder="Seu sobrenome"
          value={sobrenome}
          onChange={setSobrenome}
          required
        />

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:bg-primary-dark"
        >
          Continuar
        </button>
      </form>
    </article>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}

const LOCATIONS: Record<string, string[]> = {
  "Minas Gerais": ["Cambuí", "Córrego do Bom Jesus", "Camanducaia", "Senador Amaral"],
};

function LocationPicker({
  estado,
  cidade,
  onChange,
}: {
  estado: string;
  cidade: string;
  onChange: (estado: string, cidade: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [hoverEstado, setHoverEstado] = useState<string | null>(estado || null);
  const ref = useRef<HTMLDivElement>(null);

  const estados = Object.keys(LOCATIONS);
  const cidades = hoverEstado ? LOCATIONS[hoverEstado] ?? [] : [];
  const display = estado && cidade ? `${cidade} - ${estado}` : "Selecionar";

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <label className="text-sm font-semibold">
        Localização <span className="text-primary">*</span>
      </label>
      <button
        type="button"
        onClick={() => {
          setHoverEstado(estado || null);
          setOpen((v) => !v);
        }}
        className="mt-1 flex w-full items-center justify-between rounded-full border border-input bg-background px-4 py-2.5 text-left text-sm outline-none transition focus:border-primary"
      >
        <span className={estado && cidade ? "text-foreground" : "text-muted-foreground"}>
          {display}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-20 mt-2 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {/* Coluna Estados */}
          <ul className="max-h-64 overflow-y-auto border-r border-border py-1">
            {estados.map((uf) => {
              const isActive = hoverEstado === uf;
              return (
                <li key={uf}>
                  <button
                    type="button"
                    onMouseEnter={() => setHoverEstado(uf)}
                    onClick={() => setHoverEstado(uf)}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition hover:bg-muted ${
                      isActive ? "font-bold text-primary" : "text-foreground"
                    }`}
                  >
                    <span>{uf}</span>
                    <ChevronRight className="h-4 w-4 opacity-60" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Coluna Cidades */}
          <ul className="max-h-64 overflow-y-auto py-1">
            {cidades.length === 0 && (
              <li className="px-4 py-2.5 text-sm text-muted-foreground">
                Selecione um estado
              </li>
            )}
            {cidades.map((c) => {
              const isSel = estado === hoverEstado && cidade === c;
              return (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => {
                      if (hoverEstado) {
                        onChange(hoverEstado, c);
                        setOpen(false);
                      }
                    }}
                    className={`flex w-full items-center px-4 py-2.5 text-sm transition hover:bg-muted ${
                      isSel ? "font-bold text-primary" : "text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import courierBg from "@/assets/courier-bg.jpg";
import uppiLogo from "@/assets/uppi-logo.png";

export const Route = createFileRoute("/seja-entregador")({
  head: () => ({
    meta: [
      { title: "Seja UPPI – Cadastro de entregadores" },
      {
        name: "description",
        content:
          "Cadastre-se para ser entregador UPPI. Confira os requisitos e preencha seus dados para começar.",
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
    <main className="relative min-h-screen overflow-hidden bg-[oklch(0.18_0.02_155)] text-white">
      {/* Imagem de fundo desfocada */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${courierBg})`,
          filter: "blur(10px) brightness(0.5)",
          transform: "scale(1.1)",
          opacity: 0.45,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.22 0.05 155 / 0.85) 0%, oklch(0.18 0.02 155 / 0.95) 100%)",
        }}
      />

      {/* Topo com logo */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2" aria-label="UPPI início">
          <img src={uppiLogo} alt="UPPI" className="h-auto w-[140px] object-contain" />
        </Link>
        <Link
          to="/entregadores"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      </header>

      {/* Conteúdo principal */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 pt-6 md:grid-cols-2 md:gap-8 md:pt-10">
        <RequirementsCard />
        <CadastroCard />
      </section>
    </main>
  );
}

function RequirementsCard() {
  const items = [
    {
      n: 1,
      title: "Ter 18 anos ou mais",
      sub: null as string[] | null,
    },
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

function CadastroCard() {
  const [form, setForm] = useState({
    veiculo: "",
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    telefone: "",
    estado: "",
    cidade: "",
    aceito: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.veiculo) {
      alert("Selecione o tipo de veículo.");
      return;
    }
    if (!form.aceito) {
      alert("Você precisa aceitar os termos e condições.");
      return;
    }
    if (!form.estado || !form.cidade) {
      alert("Selecione seu estado e cidade.");
      return;
    }
    alert("Cadastro enviado! Em breve entraremos em contato.");
  };

  return (
    <article
      className="rounded-3xl bg-card p-6 text-foreground sm:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h2 className="font-display text-2xl font-black sm:text-3xl">Cadastre-se</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha seus dados para começar a fazer entregas com a UPPI.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-semibold">
            Selecionar veículo <span className="text-primary">*</span>
          </label>
          <select
            value={form.veiculo}
            onChange={(e) => setForm({ ...form, veiculo: e.target.value })}
            required
            className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
          >
            <option value="">Selecionar</option>
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
            <option value="bicicleta">Bicicleta</option>
          </select>
        </div>

        <Field
          label="Nome completo"
          placeholder="Nome completo"
          value={form.nome}
          onChange={(v) => setForm({ ...form, nome: v })}
          required
        />
        <Field
          label="Sobrenome"
          placeholder="Sobrenome"
          value={form.sobrenome}
          onChange={(v) => setForm({ ...form, sobrenome: v })}
          required
        />
        <Field
          label="CPF"
          placeholder="000.000.000-00"
          value={form.cpf}
          onChange={(v) => setForm({ ...form, cpf: v })}
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
          label="Telefone"
          placeholder="(00) 00000-0000"
          value={form.telefone}
          onChange={(v) => setForm({ ...form, telefone: v })}
          required
        />
        <LocationPicker
          estado={form.estado}
          cidade={form.cidade}
          onChange={(estado, cidade) => setForm({ ...form, estado, cidade })}
        />

        <label className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={form.aceito}
            onChange={(e) => setForm({ ...form, aceito: e.target.checked })}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-primary"
          />
          <span>
            Concordo com os{" "}
            <a href="#" className="font-semibold text-primary underline">
              termos e condições
            </a>{" "}
            e com a política de uso de dados da UPPI.
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:bg-primary-dark"
        >
          Cadastre-se
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
        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
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
  const [step, setStep] = useState<"estado" | "cidade">("estado");
  const [selectedEstado, setSelectedEstado] = useState<string | null>(estado || null);
  const estados = Object.keys(LOCATIONS);
  const cidades = selectedEstado ? LOCATIONS[selectedEstado] ?? [] : [];
  const display = estado && cidade ? `${cidade} - ${estado}` : "Selecionar";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function handleOpen() {
    setSelectedEstado(estado || null);
    setStep(estado ? "cidade" : "estado");
    setOpen((v) => !v);
  }

  return (
    <div className="relative" ref={ref}>
      <label className="text-sm font-semibold">
        Localização <span className="text-primary">*</span>
      </label>
      <button
        type="button"
        onClick={handleOpen}
        className="mt-1 flex w-full items-center justify-between rounded-full border border-input bg-background px-4 py-2.5 text-left text-sm outline-none transition focus:border-primary"
      >
        <span className={estado && cidade ? "text-foreground" : "text-muted-foreground"}>
          {display}
        </span>
        <ChevronRight
          className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-90" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {/* Cabeçalho com passos */}
          <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5 text-xs font-semibold text-muted-foreground">
            {step === "cidade" && (
              <button
                type="button"
                onClick={() => setStep("estado")}
                className="mr-1 inline-flex items-center gap-1 text-primary hover:underline"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Voltar
              </button>
            )}
            <span>
              {step === "estado"
                ? "Selecione o Estado (UF)"
                : `Cidades em ${selectedEstado}`}
            </span>
          </div>

          <ul className="max-h-64 overflow-y-auto py-1">
            {step === "estado" &&
              estados.map((uf) => {
                const isSel = estado === uf;
                return (
                  <li key={uf}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedEstado(uf);
                        setStep("cidade");
                      }}
                      className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition hover:bg-muted ${
                        isSel ? "font-bold text-primary" : "text-foreground"
                      }`}
                    >
                      <span>{uf}</span>
                      <ChevronRight className="h-4 w-4 opacity-60" />
                    </button>
                  </li>
                );
              })}

            {step === "cidade" &&
              cidades.map((c) => {
                const isSel = estado === selectedEstado && cidade === c;
                return (
                  <li key={c}>
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedEstado) {
                          onChange(selectedEstado, c);
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

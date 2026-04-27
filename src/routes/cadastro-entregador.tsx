import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import courierBg from "@/assets/courier-bg.jpg";

type SearchParams = {
  estado?: string;
  cidade?: string;
  nome?: string;
  sobrenome?: string;
};

export const Route = createFileRoute("/cadastro-entregador")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    estado: typeof search.estado === "string" ? search.estado : undefined,
    cidade: typeof search.cidade === "string" ? search.cidade : undefined,
    nome: typeof search.nome === "string" ? search.nome : undefined,
    sobrenome: typeof search.sobrenome === "string" ? search.sobrenome : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Cadastro de entregador – UPPI" },
      {
        name: "description",
        content:
          "Finalize seu cadastro como entregador UPPI: documentos, contato e dados do veículo.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const search = Route.useSearch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: search.nome ?? "",
    sobrenome: search.sobrenome ?? "",
    estado: search.estado ?? "",
    cidade: search.cidade ?? "",
    veiculo: "",
    cpf: "",
    email: "",
    telefone: "",
    documento: "",
    placa: "",
    aceito: false,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.veiculo) return alert("Selecione o tipo de veículo.");
    if (!form.aceito) return alert("Você precisa aceitar os termos e condições.");
    alert("Cadastro enviado! Em breve entraremos em contato.");
  }

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

        <div className="relative mx-auto max-w-3xl px-6 pt-6">
          <button
            type="button"
            onClick={() => navigate({ to: "/seja-entregador" })}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
        </div>

        <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-6 md:pt-8">
          <article
            className="rounded-3xl bg-card p-6 text-foreground sm:p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h1 className="font-display text-2xl font-black sm:text-3xl">
              Olá{form.nome ? `, ${form.nome}` : ""}! Vamos finalizar seu cadastro
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {form.cidade && form.estado
                ? `Cidade: ${form.cidade} - ${form.estado}`
                : "Preencha seus dados para começar a fazer entregas com a UPPI."}
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Nome"
                value={form.nome}
                onChange={(v) => update("nome", v)}
                required
              />
              <Field
                label="Sobrenome"
                value={form.sobrenome}
                onChange={(v) => update("sobrenome", v)}
                required
              />

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold">
                  Selecionar veículo <span className="text-primary">*</span>
                </label>
                <select
                  value={form.veiculo}
                  onChange={(e) => update("veiculo", e.target.value)}
                  required
                  className="mt-1 w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary"
                >
                  <option value="">Selecionar</option>
                  <option value="moto">Moto</option>
                  <option value="carro">Carro</option>
                  <option value="bicicleta">Bicicleta</option>
                </select>
              </div>

              <Field
                label="CPF"
                placeholder="000.000.000-00"
                value={form.cpf}
                onChange={(v) => update("cpf", v)}
                required
              />
              <Field
                label="Telefone"
                placeholder="(00) 00000-0000"
                value={form.telefone}
                onChange={(v) => update("telefone", v)}
                required
              />

              <Field
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={(v) => update("email", v)}
                required
                className="sm:col-span-2"
              />

              <Field
                label="Documento (CNH ou RG)"
                placeholder="Número do documento"
                value={form.documento}
                onChange={(v) => update("documento", v)}
                required
              />
              <Field
                label="Placa do veículo"
                placeholder="Opcional para bicicleta"
                value={form.placa}
                onChange={(v) => update("placa", v)}
              />

              <Field
                label="Estado"
                value={form.estado}
                onChange={(v) => update("estado", v)}
                required
              />
              <Field
                label="Cidade"
                value={form.cidade}
                onChange={(v) => update("cidade", v)}
                required
              />

              <label className="flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.aceito}
                  onChange={(e) => update("aceito", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-input accent-primary"
                />
                <span>
                  Concordo com os{" "}
                  <Link to="/contato" className="font-semibold text-primary underline">
                    termos e condições
                  </Link>{" "}
                  e com a política de uso de dados da UPPI.
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition hover:bg-primary-dark sm:col-span-2"
              >
                Enviar cadastro
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
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

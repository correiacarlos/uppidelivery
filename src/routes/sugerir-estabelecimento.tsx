import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/sugerir-estabelecimento")({
  head: () => ({
    meta: [
      { title: "Sugerir Estabelecimento – UPPI" },
      {
        name: "description",
        content:
          "Tem algum estabelecimento que você adora e gostaria de ver no Uppi Delivery? Sugira agora.",
      },
      { property: "og:title", content: "Sugerir Estabelecimento – UPPI" },
      {
        property: "og:description",
        content: "Sugira um estabelecimento para o Uppi Delivery.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [responsavel, setResponsavel] = useState(false);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-center text-4xl font-black text-primary sm:text-5xl">
          Sugerir Estabelecimento
        </h1>
        <p className="mt-6 text-center text-muted-foreground">
          Tem algum estabelecimento que você adora e que gostaria de ver no Uppi Delivery?
        </p>
        <p className="mt-2 text-center text-muted-foreground">
          Conte-nos mais: preencha o formulário abaixo e torça para que em breve ele apareça aqui! :D
        </p>

        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Sugestão enviada com sucesso!");
          }}
        >
          <input
            required
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <input
            required
            type="text"
            placeholder="Nome do estabelecimento"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <select
            required
            defaultValue=""
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground outline-none transition focus:border-primary"
          >
            <option value="" disabled>
              Selecione a cidade
            </option>
            <option value="sao-paulo">São Paulo</option>
            <option value="rio-de-janeiro">Rio de Janeiro</option>
            <option value="belo-horizonte">Belo Horizonte</option>
            <option value="curitiba">Curitiba</option>
            <option value="porto-alegre">Porto Alegre</option>
          </select>
          <input
            required
            type="text"
            placeholder="Endereço do estabelecimento"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <input
            required
            type="tel"
            placeholder="Telefone do estabelecimento"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />
          <textarea
            rows={4}
            placeholder="Alguma observação? (opcional)"
            className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
          />

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={responsavel}
              onChange={(e) => setResponsavel(e.target.checked)}
              className="h-4 w-4 rounded border-border accent-primary"
            />
            Sou responsável pelo estabelecimento
          </label>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-md transition hover:bg-primary-dark"
            >
              Enviar sugestão
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
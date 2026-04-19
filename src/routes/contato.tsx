import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato – UPPI" },
      { name: "description", content: "Quer saber mais sobre a UPPI? Fale com a gente. Atendemos lojistas e entregadores interessados em fazer parte da rede." },
      { property: "og:title", content: "Contato – UPPI" },
      { property: "og:description", content: "Fale com a equipe UPPI." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Fale com a gente</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Quer saber mais? Deixe seus dados e nosso time entra em contato.
        </p>
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
            <input required className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Seu nome" />
          </div>
          <div>
            <label className="text-sm font-semibold">Telefone ou WhatsApp</label>
            <input required className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="(00) 00000-0000" />
          </div>
          <div>
            <label className="text-sm font-semibold">Mensagem</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Como podemos ajudar?" />
          </div>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-dark">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

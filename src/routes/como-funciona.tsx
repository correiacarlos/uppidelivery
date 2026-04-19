import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Store, Bike } from "lucide-react";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como funciona – UPPI" },
      { name: "description", content: "Veja como o delivery UPPI conecta clientes, lojistas e entregadores em três passos simples." },
      { property: "og:title", content: "Como funciona – UPPI" },
      { property: "og:description", content: "Três passos simples para um delivery que fortalece o comércio local." },
    ],
  }),
  component: Page,
});

function Page() {
  const steps = [
    { icon: ShoppingBag, title: "O cliente faz o pedido", desc: "De forma rápida e intuitiva, direto pelo app UPPI." },
    { icon: Store, title: "O estabelecimento prepara", desc: "O lojista recebe a notificação e prepara com cuidado." },
    { icon: Bike, title: "O entregador entrega", desc: "Um entregador local realiza a entrega em pouco tempo." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Como funciona</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Um fluxo simples, pensado para funcionar na realidade da sua cidade.
        </p>
        <div className="mt-12 space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 rounded-3xl border bg-card p-6" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-1 text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

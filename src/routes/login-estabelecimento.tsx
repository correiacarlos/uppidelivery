import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import foodBg from "@/assets/food-background.jpg";

export const Route = createFileRoute("/login-estabelecimento")({
  head: () => ({
    meta: [
      { title: "Entre ou cadastre-se – UPPI" },
      {
        name: "description",
        content:
          "Acesse sua conta UPPI ou cadastre seu estabelecimento na plataforma de delivery local.",
      },
      { property: "og:title", content: "Entre ou cadastre-se – UPPI" },
      {
        property: "og:description",
        content: "Acesse a plataforma UPPI Delivery.",
      },
    ],
  }),
  component: LoginEstabelecimento,
});

function LoginEstabelecimento() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit = isEmailValid && accepted;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    navigate({ to: "/cadastrar-estabelecimento", search: {} });
  };

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${foodBg})` }}
    >
      <main className="relative z-10 flex items-end justify-center px-4 pb-12 pt-32 sm:justify-start sm:px-20 sm:pb-20 sm:pt-64">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
          <h1 className="text-2xl font-semibold text-foreground">
            Cadastre-se
          </h1>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-md transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-primary"
            >
              Continuar
            </button>
            <button
              type="button"
              onClick={() => isEmailValid && setAccepted((v) => !v)}
              disabled={!isEmailValid}
              className="flex w-full items-start gap-2 text-left text-xs text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span
                className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition ${
                  accepted
                    ? "bg-primary text-primary-foreground"
                    : "border border-muted-foreground/40 bg-transparent text-transparent"
                }`}
              >
                ✓
              </span>
              <span>
                Ao continuar, você concorda com nossa{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </a>
                .
              </span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

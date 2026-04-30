import { createFileRoute, Link } from "@tanstack/react-router";
import burgerImg from "@/assets/burger-card.png";
import basketImg from "@/assets/basket-card.png";

export const Route = createFileRoute("/vantagens")({
  head: () => ({
    meta: [
      { title: "Cadastre sua loja – UPPI" },
      { name: "description", content: "Cadastre sua loja na UPPI. Tem UPPI para todo tipo de negócio: restaurantes e multicategorias." },
      { property: "og:title", content: "Cadastre sua loja – UPPI" },
      { property: "og:description", content: "Tem UPPI para todo tipo de negócio, inclusive o seu." },
    ],
  }),
  component: Page,
});

function Page() {
  const cards = [
    { title: "Restaurantes", img: burgerImg, alt: "Hambúrguer" },
    { title: "Multicategorias", img: basketImg, alt: "Cesta de mercado" },
  ];
  return (
    <section className="bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-3xl font-black text-foreground sm:text-5xl">
          Cadastre sua loja e comece a vender no UPPI
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Tem UPPI para todo tipo de negócio, inclusive o seu
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="relative overflow-visible rounded-2xl bg-primary px-6 pb-6 pt-8 text-left shadow-lg"
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={768}
                height={768}
                className="pointer-events-none absolute -top-10 right-2 h-40 w-40 object-contain sm:-top-14 sm:right-4 sm:h-52 sm:w-52"
              />
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                {c.title}
              </h2>
              <div className="mt-20 sm:mt-24">
                <Link
                  to="/login-estabelecimento"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-primary transition hover:bg-white/90"
                >
                  Cadastrar agora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

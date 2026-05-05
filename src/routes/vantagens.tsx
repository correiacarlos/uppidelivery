import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import burgerImg from "@/assets/burger-card.png";
import basketImg from "@/assets/basket-card.png";
import floatBurger from "@/assets/floating-burger-ingredients.png";
import floatPetshop from "@/assets/floating-petshop.png";
import floatPapelaria from "@/assets/floating-papelaria.png";
import floatFarmacia from "@/assets/floating-farmacia.png";
import floatPresentes from "@/assets/floating-presentes.png";

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
  const [hovered, setHovered] = useState<"rest" | "multi" | null>(null);

  const cards = [
    {
      key: "rest" as const,
      title: "Restaurantes",
      img: burgerImg,
      alt: "Hambúrguer",
      arts: [
        { src: floatBurger, pos: "left-top" },
        { src: floatBurger, pos: "left-bottom" },
        { src: floatBurger, pos: "right-top" },
        { src: floatBurger, pos: "right-bottom" },
      ],
    },
    {
      key: "multi" as const,
      title: "Multicategorias",
      img: basketImg,
      alt: "Cesta de mercado",
      arts: [
        { src: floatPetshop, pos: "left-top" },
        { src: floatFarmacia, pos: "left-bottom" },
        { src: floatPapelaria, pos: "right-top" },
        { src: floatPresentes, pos: "right-bottom" },
      ],
    },
  ];

  // label exibido -> valor enviado como categoria pré-selecionada no cadastro
  const restaurantesCats: { label: string; value: string }[] = [
    { label: "Brasileira", value: "Restaurante" },
    { label: "Doces e bolos", value: "Doceria" },
    { label: "Lanches", value: "Lanchonete" },
    { label: "Açaí", value: "Açaí" },
    { label: "Marmita", value: "Restaurante" },
    { label: "Pizzarias", value: "Pizzaria" },
    { label: "Salgados", value: "Lanchonete" },
    { label: "Saudável", value: "Restaurante" },
    { label: "Sorvetes", value: "Doceria" },
    { label: "Japonesa", value: "Sushi" },
  ];
  const multiCats: { label: string; value: string }[] = [
    { label: "Mercado", value: "Mercado" },
    { label: "Farmácia", value: "Farmácia" },
    { label: "Bebidas", value: "Bebidas" },
    { label: "Pet Shop", value: "Pet Shop" },
    { label: "Padaria", value: "Padaria" },
    { label: "Açougue", value: "Açougue" },
    { label: "Conveniência", value: "Mercado" },
    { label: "Floricultura", value: "Arte & Decoração" },
    { label: "Papelaria", value: "Papelaria" },
    { label: "Presentes", value: "Arte & Decoração" },
  ];
  const activeCats = hovered === "multi" ? multiCats : restaurantesCats;

  return (
    <section className="overflow-hidden bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-3xl font-black text-foreground sm:text-5xl">
          Cadastre sua loja e comece a vender no UPPI
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Tem UPPI para todo tipo de negócio, inclusive o seu
        </p>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2">
          {cards.map((c) => {
            const isHovered = hovered === c.key;
            const showArts = isHovered;
            return (
              <div
                key={c.key}
                onMouseEnter={() => setHovered(c.key)}
                onMouseLeave={() => setHovered(null)}
                className={`relative overflow-visible rounded-2xl bg-primary px-6 pb-6 pt-8 text-left shadow-lg transition-all duration-300 ${
                  isHovered
                    ? "scale-[1.03] shadow-2xl ring-4 ring-primary/30"
                    : hovered
                      ? "opacity-50 brightness-75"
                      : ""
                }`}
              >
                {/* Floating arts: themed clusters around each card on hover */}
                {c.arts.map((art, i) => {
                  const isLeft = art.pos.startsWith("left");
                  const positionClass =
                    art.pos === "left-top"
                      ? "-left-20 top-2"
                      : art.pos === "left-bottom"
                        ? "-left-20 bottom-2"
                        : art.pos === "right-top"
                          ? "-right-20 top-2"
                          : art.pos === "right-bottom"
                            ? "-right-20 bottom-2"
                            : "-right-24 top-1/2 -translate-y-1/2";
                  return (
                    <img
                      key={i}
                      src={art.src}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      width={512}
                      height={512}
                      className={`pointer-events-none absolute ${positionClass} hidden h-36 w-36 object-contain transition-all duration-500 sm:block ${
                        showArts
                          ? "translate-x-0 opacity-100"
                          : isLeft
                            ? "translate-x-8 opacity-0"
                            : "-translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: showArts ? `${i * 80}ms` : "0ms" }}
                    />
                  );
                })}

                {/* Main card image */}
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  width={768}
                  height={768}
                  className={`pointer-events-none absolute -top-10 right-2 h-40 w-40 object-contain transition-transform duration-300 sm:-top-14 sm:right-4 sm:h-52 sm:w-52 ${
                    isHovered ? "-rotate-3 scale-110" : ""
                  }`}
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
            );
          })}
        </div>

        {/* Suggestions / segments — only visible on hover */}
        <div
          className={`mt-20 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!hovered}
        >
          <p className="text-base text-muted-foreground sm:text-lg">
            Ideal para qualquer tamanho e segmento
          </p>
          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-5">
            {activeCats.map((cat) => (
              <Link
                key={cat.label}
                to="/cadastrar-estabelecimento"
                search={{ categoria: cat.value }}
                className="flex items-center justify-center rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary/20"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF, FaGooglePlay, FaApple } from "react-icons/fa";
import uppiFooterLogo from "@/assets/uppi-footer-logo.png";

export function Footer() {
  const cols = [
    {
      title: "Institucional",
      links: [
        { label: "Sobre o Uppi Delivery", to: "/sobre" },
        { label: "Perguntas Frequentes", to: "/perguntas-frequentes" },
        { label: "Contato", to: "/contato" },
        { label: "Termos e Condições", to: "/" },
      ],
    },
    {
      title: "Participe",
      links: [
        { label: "Cadastre seu Estabelecimento", to: "/vantagens" },
        { label: "Sugerir estabelecimento", to: "/contato" },
        { label: "Licenciado Uppi Delivery", to: "/contato" },
        { label: "API Desenvolvedor", to: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-5">
        <div className="md:col-span-1">
          <Link to="/" aria-label="UPPI início" className="inline-flex">
            <img src={uppiFooterLogo} alt="UPPI" className="h-auto w-[112px] rounded-2xl object-contain" />
          </Link>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-black">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-90">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition hover:opacity-100 hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-black">Redes Sociais</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black">Aplicativos</h3>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Google Play"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
            >
              <FaGooglePlay className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="App Store"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25"
            >
              <FaApple className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-xs opacity-90">
          © {new Date().getFullYear()} Uppi Delivery. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

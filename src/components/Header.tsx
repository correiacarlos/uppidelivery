import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import uppiLogo from "@/assets/uppi-logo.png";

const links = [
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/vantagens", label: "Estabelecimentos" },
  { to: "/entregadores", label: "Entregadores" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-[10px]">
        <Link to="/" className="flex items-center gap-2" aria-label="UPPI início">
          <img src={uppiLogo} alt="UPPI" className="h-[86px] w-[86px] -my-5 rounded-md object-cover" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold opacity-90 transition hover:opacity-100"
              activeProps={{ className: "opacity-100 underline underline-offset-8" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contato"
            className="hidden items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-bold text-brand-orange-foreground shadow-md transition hover:brightness-95 md:inline-flex"
          >
            <LogIn className="h-4 w-4" /> Entrar
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-sm font-bold text-brand-orange-foreground"
          >
            <LogIn className="h-4 w-4" /> Entrar
          </Link>
        </nav>
      )}
    </header>
  );
}

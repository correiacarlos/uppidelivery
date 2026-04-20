import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/vantagens", label: "Estabelecimentos" },
  { to: "/entregadores", label: "Entregadores" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
            U
          </span>
          UPPI
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.slice(1).map((l) => (
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

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-3 md:hidden">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

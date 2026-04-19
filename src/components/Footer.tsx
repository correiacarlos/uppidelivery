export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="font-semibold">UPPI – Plataforma de delivery local</p>
        <p>© {new Date().getFullYear()} UPPI. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

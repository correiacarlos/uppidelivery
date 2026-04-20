import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, Clock, CreditCard } from "lucide-react";

export const Route = createFileRoute("/cadastrar-estabelecimento")({
  head: () => ({
    meta: [
      { title: "Cadastrar Estabelecimento – UPPI" },
      {
        name: "description",
        content:
          "Cadastre seu estabelecimento na UPPI e comece a vender mais com delivery local, taxas justas e suporte próximo.",
      },
      { property: "og:title", content: "Cadastrar Estabelecimento – UPPI" },
      {
        property: "og:description",
        content: "Adicione seu negócio à plataforma UPPI Delivery.",
      },
    ],
  }),
  component: CadastrarEstabelecimento,
});

const SEGMENTOS = [
  "Restaurante",
  "Lanchonete",
  "Pizzaria",
  "Hamburgueria",
  "Açaí",
  "Sushi",
  "Mercado",
  "Padaria",
  "Açougue",
  "Farmácia",
  "Pet Shop",
  "Bebidas",
  "Doceria",
  "Cafeteria",
  "Água e Gás",
  "Papelaria",
  "Arte & Decoração",
] as const;

const DIAS = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
] as const;

const PAGAMENTOS = [
  "Dinheiro",
  "Cartão de Crédito",
  "Cartão de Débito",
  "PIX",
  "Vale Refeição",
  "Vale Alimentação",
  "Pagamento Online",
] as const;

type DiaState = { aberto: boolean; abre: string; fecha: string };

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}>
      {children}
    </section>
  );
}

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-foreground">
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 ${props.className ?? ""}`}
    />
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
        checked ? "bg-primary" : "bg-muted"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function Chip({
  active,
  onClick,
  children,
  disabled,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border bg-background text-foreground hover:border-primary/40"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {children}
    </button>
  );
}

function CadastrarEstabelecimento() {
  const navigate = useNavigate();
  const [segmentos, setSegmentos] = useState<string[]>([]);
  const [horarios, setHorarios] = useState<Record<string, DiaState>>(() =>
    Object.fromEntries(DIAS.map((d) => [d, { aberto: false, abre: "", fecha: "" }])),
  );
  const [pagDelivery, setPagDelivery] = useState<string[]>([]);
  const [pagRetirada, setPagRetirada] = useState<string[]>([]);

  const toggleSegmento = (s: string) => {
    setSegmentos((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : prev.length < 3 ? [...prev, s] : prev,
    );
  };

  const togglePag = (
    s: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setList(list.includes(s) ? list.filter((x) => x !== s) : [...list, s]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cadastro enviado! Entraremos em contato em breve.");
    navigate({ to: "/" });
  };

  return (
    <div className="bg-secondary/40 py-8">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 flex items-center gap-3">
          <Link
            to="/"
            aria-label="Voltar"
            className="flex h-9 w-9 items-center justify-center rounded-full text-primary transition hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-black text-foreground sm:text-3xl">
            Cadastrar Estabelecimento
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Card>
            <h2 className="text-base font-bold text-foreground">
              Quer cadastrar o seu estabelecimento no Uppi?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Neste formulário, você adiciona suas informações e agiliza o processo de adesão no
              Uppi Delivery. Basta seguir as perguntas a seguir, tudo bem simples e explicadinho.
              Qualquer dúvida, entraremos em contato com você!
            </p>
          </Card>

          <Card>
            <h2 className="mb-4 text-lg font-bold text-foreground">Informações Básicas</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="nomeFantasia">Nome Fantasia da Empresa *</Label>
                <Input id="nomeFantasia" required />
              </div>
              <div>
                <Label htmlFor="razaoSocial">Razão Social *</Label>
                <Input id="razaoSocial" required />
              </div>
              <div>
                <Label htmlFor="responsavel">Nome do Responsável *</Label>
                <Input id="responsavel" required />
              </div>
              <div>
                <Label htmlFor="cnpj">CNPJ/CPF *</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" required />
              </div>
            </div>

            <div className="mt-5">
              <Label>Seguimentos (escolha até 3) *</Label>
              <div className="flex flex-wrap gap-2">
                {SEGMENTOS.map((s) => {
                  const active = segmentos.includes(s);
                  return (
                    <Chip
                      key={s}
                      active={active}
                      onClick={() => toggleSegmento(s)}
                      disabled={!active && segmentos.length >= 3}
                    >
                      {s}
                    </Chip>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {segmentos.length}/3 selecionados
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
              <MapPin className="h-5 w-5 text-primary" /> Endereço
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 sm:max-w-[16rem]">
                <Label htmlFor="cep">CEP *</Label>
                <Input id="cep" placeholder="00000-000" required />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="rua">Rua *</Label>
                <Input id="rua" required />
              </div>
              <div>
                <Label htmlFor="numero">Número *</Label>
                <Input id="numero" required />
              </div>
              <div>
                <Label htmlFor="complemento">Complemento</Label>
                <Input id="complemento" />
              </div>
              <div>
                <Label htmlFor="bairro">Bairro *</Label>
                <Input id="bairro" required />
              </div>
              <div>
                <Label htmlFor="cidade">Cidade *</Label>
                <Input id="cidade" required />
              </div>
              <div className="sm:max-w-[10rem]">
                <Label htmlFor="estado">Estado *</Label>
                <Input id="estado" placeholder="MG" maxLength={2} required />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-lg font-bold text-foreground">Contato</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="telefone">Telefone de Contato *</Label>
                <Input id="telefone" placeholder="(00) 0000-0000" required />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input id="whatsapp" placeholder="(00) 00000-0000" required />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="contato@estabelecimento.com" required />
              </div>
              <div>
                <Label htmlFor="senha">Senha *</Label>
                <Input id="senha" type="password" placeholder="Mínimo 6 caracteres" required />
              </div>
              <div>
                <Label htmlFor="senha2">Confirmar Senha *</Label>
                <Input id="senha2" type="password" placeholder="Digite a senha novamente" required />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-foreground">
              <Clock className="h-5 w-5 text-primary" /> Horários de funcionamento
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Selecione os horários de funcionamento do seu estabelecimento. Caso não funcione em
              algum dia, desmarque a opção.
            </p>
            <div className="space-y-3">
              {DIAS.map((dia) => {
                const state = horarios[dia];
                return (
                  <div key={dia} className="flex flex-wrap items-center gap-3">
                    <div className="flex w-40 items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{dia}</span>
                      <Toggle
                        checked={state.aberto}
                        onChange={(v) =>
                          setHorarios((h) => ({ ...h, [dia]: { ...h[dia], aberto: v } }))
                        }
                      />
                    </div>
                    <input
                      type="time"
                      disabled={!state.aberto}
                      value={state.abre}
                      onChange={(e) =>
                        setHorarios((h) => ({ ...h, [dia]: { ...h[dia], abre: e.target.value } }))
                      }
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm disabled:opacity-50"
                    />
                    <span className="text-muted-foreground">-</span>
                    <input
                      type="time"
                      disabled={!state.aberto}
                      value={state.fecha}
                      onChange={(e) =>
                        setHorarios((h) => ({ ...h, [dia]: { ...h[dia], fecha: e.target.value } }))
                      }
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm disabled:opacity-50"
                    />
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 text-lg font-bold text-foreground">Prazos e Taxas</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="prazoEntrega">Prazo médio para Entrega (min) *</Label>
                <Input id="prazoEntrega" type="number" placeholder="30" required />
              </div>
              <div>
                <Label htmlFor="prazoRetirada">Prazo médio para Retirada (min) *</Label>
                <Input id="prazoRetirada" type="number" placeholder="15" required />
              </div>
              <div>
                <Label htmlFor="taxa">Taxa de Entrega (R$) *</Label>
                <Input id="taxa" type="number" step="0.01" placeholder="5.00" required />
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
              <CreditCard className="h-5 w-5 text-primary" /> Formas de Pagamento
            </h2>

            <div className="mb-5">
              <Label>Para Delivery *</Label>
              <div className="flex flex-wrap gap-2">
                {PAGAMENTOS.map((p) => (
                  <Chip
                    key={p}
                    active={pagDelivery.includes(p)}
                    onClick={() => togglePag(p, pagDelivery, setPagDelivery)}
                  >
                    {p}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <Label>Para Retirada *</Label>
              <div className="flex flex-wrap gap-2">
                {PAGAMENTOS.map((p) => (
                  <Chip
                    key={p}
                    active={pagRetirada.includes(p)}
                    onClick={() => togglePag(p, pagRetirada, setPagRetirada)}
                  >
                    {p}
                  </Chip>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 text-lg font-bold text-foreground">Observações</h2>
            <textarea
              rows={4}
              placeholder="Informações adicionais sobre seu estabelecimento..."
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </Card>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-bold text-foreground transition hover:bg-muted"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:bg-primary-dark"
            >
              Enviar Cadastro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

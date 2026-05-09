import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/perguntas-frequentes")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes – Uppi Delivery" },
      { name: "description", content: "Tire suas dúvidas sobre o Uppi Delivery: pedidos, entregas, cadastro de estabelecimentos e entregadores." },
      { property: "og:title", content: "Perguntas Frequentes – Uppi Delivery" },
      { property: "og:description", content: "Tire suas dúvidas sobre o Uppi Delivery." },
    ],
  }),
  component: Page,
});

const faqs = [
  {
    q: "O que é o Uppi Delivery?",
    a: "O Uppi Delivery é uma plataforma que conecta consumidores, estabelecimentos e entregadores, oferecendo uma experiência de pedido e entrega simples e rápida.",
  },
  {
    q: "Como faço para cadastrar meu estabelecimento?",
    a: "Acesse a página de Vantagens, escolha a categoria do seu negócio e clique em Cadastrar agora para preencher o formulário de cadastro.",
  },
  {
    q: "Como posso ser um entregador parceiro?",
    a: "Vá até a página Seja Entregador e siga o passo a passo para fazer o seu cadastro como entregador parceiro do Uppi Delivery.",
  },
  {
    q: "Quais são as taxas cobradas dos estabelecimentos?",
    a: "As condições comerciais variam conforme a categoria e o plano contratado. Entre em contato com a nossa equipe para receber uma proposta personalizada.",
  },
  {
    q: "Em quais regiões o Uppi Delivery atua?",
    a: "Estamos em constante expansão. Consulte nosso atendimento para verificar a disponibilidade na sua região.",
  },
  {
    q: "Como entro em contato com o suporte?",
    a: "Você pode falar com a gente pela página de Contato, preenchendo o formulário com seus dados e a sua dúvida.",
  },
];

function Page() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-black sm:text-5xl">Perguntas Frequentes</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Reunimos as principais dúvidas sobre o Uppi Delivery. Se não encontrar
          a resposta que procura, fale com a nossa equipe.
        </p>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-bold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

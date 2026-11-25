import { createFileRoute, Link } from "@tanstack/react-router";

import { WaIcon } from "@/components/WaIcon";
import { ProjectAdvisor } from "@/components/ProjectAdvisor";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { WA_HOME, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções — PixelUp | Desenvolvimento Web" },
      {
        name: "description",
        content:
          "Sites institucionais, landing pages, cardápios digitais, catálogos virtuais e desenvolvimento personalizado. Conheça as soluções da PixelUp.",
      },
      { property: "og:title", content: "Soluções PixelUp — Seu negócio. Um novo nível digital." },
      {
        property: "og:description",
        content:
          "Entenda o que a PixelUp faz, o que está incluso em cada projeto e como trabalhamos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Solucoes,
});

type Solucao = {
  n: string;
  titulo: string;
  resumo: string;
  paraQuem: string;
  inclui: string[];
};

const SOLUCOES: Solucao[] = [
  {
    n: "01",
    titulo: "Sites institucionais",
    resumo:
      "Apresente sua empresa, história e serviços de maneira profissional. É a vitrine oficial do seu negócio na internet: quem procura por você encontra um site organizado, bonito e confiável.",
    paraQuem: "Empresas, escritórios, clínicas, prestadores de serviço e profissionais que precisam passar credibilidade.",
    inclui: [
      "Páginas de apresentação, sobre, serviços e contato",
      "Textos e fotos organizados para valorizar a marca",
      "Endereço próprio (domínio) e orientação de contratação",
      "Preparado para aparecer bem no Google",
    ],
  },
  {
    n: "02",
    titulo: "Landing pages",
    resumo:
      "Uma página única e direta ao ponto, feita para destacar um serviço, uma promoção ou uma campanha. O visitante chega, entende a oferta e fala com você pelo WhatsApp em poucos segundos.",
    paraQuem: "Quem vai divulgar um produto, evento ou promoção e quer converter anúncios e redes sociais em contatos.",
    inclui: [
      "Página única com foco em uma única oferta",
      "Chamadas para ação que levam direto ao WhatsApp",
      "Carregamento rápido e visual pensado para celulares",
      "Pronta para receber tráfego de anúncios e redes sociais",
    ],
  },
  {
    n: "03",
    titulo: "Cardápios digitais",
    resumo:
      "Seu cardápio na tela do cliente, sem impressão e sem aplicativo caro. O cliente vê os itens, escolhe e pede pelo WhatsApp — e você atualiza preços e itens quando quiser.",
    paraQuem: "Lanchonetes, restaurantes, pizzarias, docerias, cafeterias e qualquer negócio que venda alimentos.",
    inclui: [
      "Cardápio organizado por categorias com fotos e preços",
      "Pedido enviado direto para o seu WhatsApp",
      "Atualização de itens e preços sem precisar reimprimir",
      "Versão para celular, tablet e computador",
    ],
  },
  {
    n: "04",
    titulo: "Catálogos virtuais",
    resumo:
      "Mostre seus produtos com fotos, descrição e preço em um catálogo que o cliente abre a qualquer hora. Ele escolhe o que quer e envia o pedido pelo WhatsApp com um toque.",
    paraQuem: "Lojas, moda, cosméticos, artesanato, peças, materiais e quem vende por catálogo ou entrega.",
    inclui: [
      "Produtos com fotos, descrições e valores",
      "Busca e filtros por categoria",
      "Pedido ou orçamento enviado pelo WhatsApp",
      "Fácil de adicionar, trocar e retirar produtos",
    ],
  },
  {
    n: "05",
    titulo: "Desenvolvimento personalizado",
    resumo:
      "Quando nenhuma solução pronta atende, a gente constrói sob medida: um sistema simples para organizar a rotina, uma agenda online, formulários internos ou um painel do seu jeito.",
    paraQuem: "Negócios com uma necessidade específica que não cabe em um site comum.",
    inclui: [
      "Entendimento da rotina e do problema antes de codar",
      "Sistema, agenda, formulário ou painel feito para o seu caso",
      "Tela simples para quem vai usar todo dia",
      "Ajustes e acompanhamento depois da entrega",
    ],
  },
];

const INCLUSO = [
  ["Design profissional", "Visual moderno que combina com a sua marca."],
  ["Feito para celular", "A maioria dos clientes chega pelo celular — o site precisa funcionar bem lá."],
  ["Integração com WhatsApp", "Botões e formulários que levam a conversa direto para você."],
  ["Orientação de domínio e hospedagem", "Ajudamos a escolher e contratar o endereço do seu site."],
  ["Entrega com explicação", "Mostramos como atualizar o conteúdo sem depender de ninguém."],
  ["Suporte depois da entrega", "Ajustes e dúvidas fazem parte do trabalho."],
];

const SOBRE = [
  [
    "Quem somos",
    "A PixelUp é um estúdio independente de desenvolvimento web, dedicado à criação de experiências digitais modernas, funcionais e personalizadas. Somos um time pequeno, o que significa conversa direta: você fala com quem faz o site.",
  ],
  [
    "O que buscamos",
    "Ajudar empresas, comércios e profissionais a fortalecerem sua presença digital por meio de sites que valorizam suas marcas e aproximam seus negócios de novos clientes.",
  ],
  [
    "Nossa missão",
    "Tornar a tecnologia mais acessível aos negócios locais, oferecendo soluções digitais que contribuam para sua apresentação, organização e crescimento.",
  ],
];

const PASSOS = [
  ["Conversa", "Você conta o que o negócio faz, para quem vende e o que precisa resolver."],
  ["Proposta", "Apresentamos a solução indicada, o que está incluso e o valor, sem letras miúdas."],
  ["Criação", "Montamos o layout, os textos e as páginas, com a sua marca como referência."],
  ["Revisão", "Você vê, comenta e ajusta até ficar do jeito que imaginou."],
  ["Publicação", "O site vai ao ar no endereço definitivo e você aprende a mexer nele."],
];

function Solucoes() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full blob blob-a" />
      <div className="pointer-events-none fixed -right-32 top-1/2 h-[28rem] w-[28rem] rounded-full blob blob-b" />

      <header className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
        <Link to="/" className="font-display text-xl font-bold tracking-widest">
          PIXEL<span className="text-gradient">UP</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/" className="px-3 py-2 text-muted-foreground transition hover:text-foreground">
            Início
          </Link>
          <a
            href={WA_HOME}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary/50 px-4 py-2 transition hover:bg-primary hover:text-primary-foreground"
          >
            Fale conosco
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-4xl px-6 pb-20 pt-14 text-center md:pt-24">
          <p className="fade-up text-xs uppercase tracking-[0.3em] text-muted-foreground">
            O que fazemos
          </p>
          <h1 className="fade-up mt-6 font-display text-4xl font-bold leading-tight md:text-6xl" style={{ animationDelay: ".1s" }}>
            Nossas <span className="text-gradient animate-gradient">soluções</span>
          </h1>
          <p className="fade-up mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg" style={{ animationDelay: ".2s" }}>
            Cada negócio tem um jeito de vender e de se apresentar. Escolha abaixo o que faz sentido
            para o seu — ou fale com a gente para descobrir juntos.
          </p>
          <Button asChild variant="outline" className="mt-6 h-auto whitespace-normal py-3"><a href="#meu-projeto"><Sparkles /> Descobrir meu site ideal</a></Button>
        </section>

        <ProjectAdvisor />

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {SOLUCOES.map((s, i) => {
              const last = i === SOLUCOES.length - 1 && SOLUCOES.length % 2 === 1;
              return (
                <article
                  key={s.titulo}
                  className={`card-glow fade-up flex h-full flex-col rounded-2xl p-7${last ? " lg:col-span-2" : ""}`}
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div className={last ? "grid gap-6 lg:grid-cols-2 lg:gap-10" : "contents"}>
                    <div>
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-2xl font-bold text-primary">{s.n}</span>
                        <h2 className="font-display text-2xl font-bold">{s.titulo}</h2>
                      </div>
                      <p className="mt-4 text-muted-foreground">{s.resumo}</p>
                      <p className="mt-4 text-sm">
                        <span className="font-semibold text-foreground">Indicado para: </span>
                        <span className="text-muted-foreground">{s.paraQuem}</span>
                      </p>
                    </div>
                    <div className={last ? "flex flex-col" : "mt-5 flex flex-col"}>
                      <ul className="grid gap-2 border-t border-border pt-5 text-sm">
                        {s.inclui.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-sm bg-primary pulse-dot" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waLink(`Olá! Quero saber mais sobre ${s.titulo} com a PixelUp.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-glow mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                      >
                        <WaIcon className="h-4 w-4" /> Quero esse serviço
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            O que está <span className="text-gradient">incluso</span> em todo projeto
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Não importa a solução escolhida: todo site entregue pela PixelUp vem com estes cuidados.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUSO.map(([t, d]) => (
              <div key={t} className="card-glow rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Sobre a PixelUp
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
            Um estúdio local, <span className="text-gradient">perto de você</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SOBRE.map(([t, d]) => (
              <div key={t} className="card-glow rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-primary">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Como <span className="text-gradient">trabalhamos</span>
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {PASSOS.map(([t, d], i) => (
              <li key={t} className="card-glow rounded-2xl p-5">
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="cta-box rounded-3xl p-10 text-center md:p-16">
            <p className="font-display text-sm tracking-widest">PIXELUP</p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
              Vamos construir sua presença digital?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
              Conte para a gente o que o seu negócio faz. Em uma conversa rápida indicamos a
              solução certa e o que ela envolve.
            </p>
            <a
              href={WA_HOME}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 font-semibold text-background transition hover:scale-105"
            >
              <WaIcon className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelUp · Seu negócio. Um novo nível digital. ·{" "}
        <Link to="/" className="text-primary hover:underline">
          Voltar ao início
        </Link>
      </footer>

      <a
        href={WA_HOME}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="wa-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full"
      >
        <WaIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

import { WaIcon } from "@/components/WaIcon";
import { ProjectAdvisor } from "@/components/ProjectAdvisor";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { WA_HOME } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PixelUp — Desenvolvimento Web | Presença Digital" },
      { name: "description", content: "Sites institucionais, landing pages, cardápios e catálogos digitais para o seu negócio." },
      { property: "og:title", content: "PixelUp — Seu negócio. Um novo nível digital." },
      { property: "og:description", content: "Estúdio independente de desenvolvimento web para negócios locais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solucoes = [
  ["Sites institucionais", "Apresente sua empresa, história e serviços de maneira profissional."],
  ["Landing pages", "Destaque seus serviços e facilite o contato com potenciais clientes."],
  ["Cardápios digitais", "Apresente seus produtos de forma organizada e acessível."],
  ["Catálogos virtuais", "Exiba seus produtos e facilite os pedidos pelo WhatsApp."],
  ["Desenvolvimento personalizado", "Soluções digitais de acordo com as necessidades de cada negócio."],
];
const motivos = [
  "Atendimento personalizado",
  "Design moderno e profissional",
  "Sites adaptados para dispositivos móveis",
  "Integração com ferramentas de comunicação",
  "Soluções pensadas para a realidade de cada empresa",
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg" />
      <div className="pointer-events-none fixed -left-32 top-10 h-96 w-96 rounded-full blob blob-a" />
      <div className="pointer-events-none fixed -right-32 top-1/2 h-[28rem] w-[28rem] rounded-full blob blob-b" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-xl font-bold tracking-widest">PIXEL<span className="text-gradient">UP</span></span>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/solucoes" className="px-2 py-2 text-muted-foreground transition hover:text-foreground">Soluções</Link>
          <a href={WA_HOME} target="_blank" rel="noreferrer" className="rounded-full border border-primary/50 px-4 py-2 transition hover:bg-primary hover:text-primary-foreground">Fale conosco</a>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center md:pt-28">
          <p className="fade-up text-xs uppercase tracking-[0.3em] text-muted-foreground">Desenvolvimento Web | Presença Digital</p>
          <h1 className="fade-up mt-6 font-display text-5xl font-bold leading-tight md:text-7xl" style={{ animationDelay: ".1s" }}>
            Seu negócio.<br /><span className="text-gradient animate-gradient">Um novo nível digital.</span>
          </h1>
          <p className="fade-up mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg" style={{ animationDelay: ".2s" }}>
            A PixelUp é um estúdio independente de desenvolvimento web dedicado à criação de experiências digitais modernas, funcionais e personalizadas.
          </p>
          <div className="fade-up mt-10 flex flex-wrap justify-center gap-4" style={{ animationDelay: ".3s" }}>
            <a href={WA_HOME} target="_blank" rel="noreferrer" className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-primary-foreground">
              <WaIcon className="h-5 w-5" /> Quero meu site
            </a>
            <Link to="/solucoes" className="rounded-full border border-border px-7 py-4 font-semibold transition hover:border-primary">Ver soluções</Link>
            <Button asChild variant="ghost" className="h-auto whitespace-normal px-7 py-4"><a href="#meu-projeto"><Sparkles /> Descobrir meu site ideal</a></Button>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <p className="text-lg text-muted-foreground md:text-xl">
            Nosso objetivo é ajudar empresas, comércios e profissionais a fortalecerem sua presença digital por meio de sites que <span className="text-foreground">valorizam suas marcas</span> e aproximam seus negócios de novos clientes.
          </p>
        </section>

        <section id="solucoes" className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Nossas <span className="text-gradient">soluções</span></h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solucoes.map(([t, d], i) => (
              <div key={t} className="card-glow flex flex-col rounded-2xl p-6">
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <Link to="/solucoes" className="mt-4 text-sm font-semibold text-primary hover:underline">Saiba mais →</Link>
              </div>
            ))}
          </div>
        </section>

        <ProjectAdvisor />

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Por que escolher a <span className="text-gradient">PixelUp?</span></h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {motivos.map((m) => (
              <li key={m} className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur">
                <span className="h-3 w-3 shrink-0 rounded-sm bg-primary pulse-dot" />{m}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Nossa <span className="text-gradient">missão</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Tornar a tecnologia mais acessível aos negócios locais, oferecendo soluções digitais que contribuam para sua apresentação, organização e crescimento.</p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="cta-box rounded-3xl p-10 text-center md:p-16">
            <p className="font-display text-sm tracking-widest">PIXELUP</p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Vamos construir sua presença digital?</h2>
            <a href={WA_HOME} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 font-semibold text-background transition hover:scale-105">
              <WaIcon className="h-5 w-5" /> Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelUp · Seu negócio. Um novo nível digital.
      </footer>

      <a href={WA_HOME} target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp" className="wa-float fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full">
        <WaIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

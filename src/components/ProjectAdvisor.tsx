import { useRef, useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Copy, LoaderCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { WaIcon } from "@/components/WaIcon";
import { briefSchema, projectMessage, type ProjectBrief, type Recommendation } from "@/lib/recommendation";
import { recommendProject } from "@/lib/recommendation.functions";
import { WA_HOME, waLink } from "@/lib/whatsapp";

export function ProjectAdvisor() {
  const generate = useServerFn(recommendProject);
  const [business, setBusiness] = useState("");
  const [needs, setNeeds] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<{ brief: ProjectBrief; recommendation: Recommendation } | null>(null);
  const inFlight = useRef(false);
  const outputRef = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const parsed = briefSchema.safeParse({ business, needs });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Revise os campos."); return; }
    inFlight.current = true;
    setBusy(true); setError(""); setCopied(false); setResult(null);
    try {
      const response = await generate({ data: parsed.data });
      if (response.ok) {
        setResult({ brief: parsed.data, recommendation: response.recommendation });
        requestAnimationFrame(() => outputRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
      } else { setError(response.error); }
    } catch { setError("Não foi possível conectar à IA. Seus textos foram mantidos; tente novamente ou fale com a PixelUp."); }
    finally { inFlight.current = false; setBusy(false); }
  }

  async function copy() {
    if (!result) return;
    try { await navigator.clipboard.writeText(projectMessage(result.brief, result.recommendation)); setCopied(true); }
    catch { setError("Não foi possível copiar. Você ainda pode enviar seu resumo pelo WhatsApp."); }
  }

  return (
    <section id="meu-projeto" className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-24">
      <div className="flex items-center gap-2 text-sm font-medium text-primary"><Sparkles className="h-4 w-4" aria-hidden="true" /> Seu projeto, um novo nível</div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-snug md:text-4xl">Qual site combina com <span className="text-gradient">seu negócio?</span></h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.85fr]">
        <form onSubmit={submit} className="space-y-6" aria-busy={busy}>
          <div>
            <label htmlFor="advisor-business" className="mb-3 block font-semibold">Conte sobre seu negócio</label>
            <Textarea id="advisor-business" value={business} onChange={(event) => { setBusiness(event.target.value); setCopied(false); }} required minLength={20} maxLength={2000} disabled={busy} rows={5} placeholder="Ex.: Tenho uma pizzaria em Montes Claros, atendo famílias e faço entregas no bairro." className="min-h-32 resize-y bg-card/70 text-base" aria-describedby="advisor-privacy" />
          </div>
          <div>
            <label htmlFor="advisor-needs" className="mb-3 block font-semibold">Como você imagina seu site?</label>
            <Textarea id="advisor-needs" value={needs} onChange={(event) => { setNeeds(event.target.value); setCopied(false); }} required minLength={20} maxLength={2000} disabled={busy} rows={5} placeholder="Ex.: Quero mostrar sabores, fotos e preços, e receber pedidos pelo WhatsApp. Precisa ficar ótimo no celular." className="min-h-32 resize-y bg-card/70 text-base" aria-describedby="advisor-privacy" />
          </div>
          <p id="advisor-privacy" className="text-xs leading-relaxed text-muted-foreground">Seu texto será enviado à IA para análise. Não inclua senhas, documentos ou informações confidenciais.</p>
          <Button type="submit" size="lg" disabled={busy} className="h-auto min-h-12 w-full whitespace-normal py-3 sm:w-auto">
            {busy ? <LoaderCircle className="motion-safe:animate-spin" /> : <Sparkles />}
            {busy ? "Analisando seu projeto…" : result ? "Gerar nova recomendação" : "Gerar minha recomendação"}
          </Button>
          {busy && <p role="status" className="text-sm text-muted-foreground">Encontrando a solução para o seu negócio…</p>}
          {error && <div role="alert" className="space-y-3 border-l-2 border-destructive pl-4 text-sm"><p>{error}</p><Button asChild variant="link" className="h-auto p-0"><a href={WA_HOME} target="_blank" rel="noreferrer"><WaIcon /> Falar com a PixelUp</a></Button></div>}
        </form>
        <div ref={outputRef} className="scroll-mt-8 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0" aria-live="polite">
          {result ? <div className="space-y-6 break-words">
            <div><p className="text-xs font-semibold uppercase text-primary">Solução recomendada</p><h3 className="mt-2 text-2xl font-bold">{result.recommendation.solution}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{result.recommendation.reason}</p></div>
            <div><h4 className="font-semibold">Resumo do seu projeto</h4><p className="mt-2 leading-relaxed text-muted-foreground">{result.recommendation.summary}</p></div>
            <div><h4 className="font-semibold">Recursos sugeridos</h4><ul className="mt-3 space-y-2">{result.recommendation.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul></div>
            <div><h4 className="font-semibold">Para alinhar com a PixelUp</h4><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">{result.recommendation.questions.map((question) => <li key={question}>{question}</li>)}</ul></div>
            <p className="text-xs text-muted-foreground">Sugestão gerada por IA, sujeita à avaliação da PixelUp. Não é um orçamento; escopo, valores e prazos serão confirmados em conversa.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-auto min-h-11 whitespace-normal py-3"><a href={waLink(projectMessage(result.brief, result.recommendation))} target="_blank" rel="noreferrer"><WaIcon /> Enviar projeto pelo WhatsApp</a></Button>
              <Button type="button" variant="outline" onClick={copy} className="min-h-11">{copied ? <Check /> : <Copy />}{copied ? "Copiado" : "Copiar resumo"}</Button>
            </div>
          </div> : <div className="space-y-5 py-4 text-muted-foreground"><Sparkles className="h-9 w-9 text-primary" aria-hidden="true" /><h3 className="text-xl font-semibold text-foreground">O próximo passo do seu negócio</h3><div className="space-y-4 text-sm"><p className="border-b border-border pb-4">Uma solução alinhada ao seu objetivo</p><p className="border-b border-border pb-4">Um resumo com as prioridades do projeto</p><p>Uma conversa mais direta com a PixelUp</p></div></div>}
        </div>
      </div>
    </section>
  );
}
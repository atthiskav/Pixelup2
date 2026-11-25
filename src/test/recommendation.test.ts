import { describe, expect, it } from "vitest";
import { briefSchema, projectMessage, recommendationSchema } from "@/lib/recommendation";
import { waLink } from "@/lib/whatsapp";

describe("Project recommendation", () => {
  it("requires a description of both the business and the needed site", () => {
    expect(briefSchema.safeParse({ business: "", needs: "Quero um cardápio digital para receber pedidos." }).success).toBe(false);
    expect(briefSchema.safeParse({ business: "Tenho uma pizzaria com entrega no bairro.", needs: "" }).success).toBe(false);
    expect(briefSchema.safeParse({ business: "Tenho uma pizzaria com entrega no bairro.", needs: "Quero um cardápio digital para receber pedidos." }).success).toBe(true);
  });
  it("rejects solutions outside the PixelUp catalog", () => {
    expect(recommendationSchema.safeParse({ solution: "Serviço inexistente", reason: "Motivo", summary: "Resumo", features: ["a", "b", "c"], questions: ["Qual público?"] }).success).toBe(false);
  });
  it("includes the personalized solution and project summary in the WhatsApp message", () => {
    const brief = { business: "Pizzaria com entrega no bairro", needs: "Cardápio com pedidos pelo WhatsApp" };
    const result = { solution: "Cardápios digitais" as const, reason: "Organiza os sabores da pizzaria", summary: "Cardápio de pizzas com fotos e preços", features: ["Fotos", "Preços", "Pedidos"], questions: ["Quais sabores?"] };
    const link = new URL(waLink(projectMessage(brief, result)));
    expect(link.searchParams.get("text")).toContain("Solução sugerida pela IA: Cardápios digitais");
    expect(link.searchParams.get("text")).toContain("Resumo do projeto: Cardápio de pizzas com fotos e preços");
    expect(link.searchParams.get("text")).toContain(brief.business);
  });
});
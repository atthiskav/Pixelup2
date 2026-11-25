import { z } from "zod";

export const solutionNames = ["Sites institucionais", "Landing pages", "Cardápios digitais", "Catálogos virtuais", "Desenvolvimento personalizado"] as const;

export const briefSchema = z.object({
  business: z.string().trim().min(20, "Conte um pouco mais sobre seu negócio (mínimo de 20 caracteres).").max(2000),
  needs: z.string().trim().min(20, "Descreva o site que precisa (mínimo de 20 caracteres).").max(2000),
});

export const recommendationSchema = z.object({
  solution: z.enum(solutionNames),
  reason: z.string().min(1).max(1500),
  summary: z.string().min(1).max(2000),
  features: z.array(z.string().min(1).max(250)).min(3).max(6),
  questions: z.array(z.string().min(1).max(250)).min(1).max(3),
});

export type ProjectBrief = z.infer<typeof briefSchema>;
export type Recommendation = z.infer<typeof recommendationSchema>;

export function projectMessage(brief: ProjectBrief, result: Recommendation) {
  return `Olá, PixelUp! Quero conversar sobre meu projeto.\n\nMeu negócio: ${brief.business}\n\nO que preciso: ${brief.needs}\n\nSolução sugerida pela IA: ${result.solution}\nPor que: ${result.reason}\n\nResumo do projeto: ${result.summary}\n\nRecursos sugeridos:\n${result.features.map((item) => `• ${item}`).join("\n")}\n\nPontos a confirmar:\n${result.questions.map((item) => `• ${item}`).join("\n")}`;
}
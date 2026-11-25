export const WHATSAPP = "5538998688323";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export const WA_HOME = waLink("Olá! Quero um site com a PixelUp.");

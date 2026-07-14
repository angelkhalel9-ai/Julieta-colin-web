import { content } from "@/lib/content";

export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? content.contact.whatsappMessage);
  return `https://wa.me/${content.contact.whatsappNumber}?text=${message}`;
}

export function formatWhatsAppDisplay(): string {
  const digits = content.contact.whatsappNumber;
  const countryCode = digits.slice(0, 2);
  const areaCode = digits.slice(2, 5);
  const rest = digits.slice(5);
  return `+${countryCode} ${areaCode} ${rest.slice(0, 3)} ${rest.slice(3)}`;
}

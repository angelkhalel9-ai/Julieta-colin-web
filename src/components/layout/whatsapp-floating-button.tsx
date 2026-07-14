"use client";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="#contacto"
      aria-label="Ir al formulario de contacto"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}

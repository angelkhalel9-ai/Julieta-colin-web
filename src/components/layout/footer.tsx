import { content } from "@/lib/content";
import { formatWhatsAppDisplay } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-heading text-base font-semibold text-foreground">
              {content.doctor.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{content.doctor.title}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Ubicación</p>
            <p className="mt-1 text-sm text-muted-foreground">{content.location.address}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Contacto</p>
            <p className="mt-1 text-sm text-muted-foreground">{formatWhatsAppDisplay()}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Registro COFEPRIS: {content.doctor.cofeprisRegistration}
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          Built with Claude Web Builder by{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Tododeia
          </a>
        </div>
      </div>
    </footer>
  );
}

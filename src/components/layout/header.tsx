import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { content } from "@/lib/content";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#doctora", label: "Sobre la Doctora" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={32}
            height={28}
            className="h-7 w-auto"
          />
          <span className="font-heading text-lg font-semibold text-foreground">
            {content.doctor.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          render={<a href="#contacto" />}
          nativeButton={false}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Agendar cita</span>
          <span className="sm:hidden">Agendar</span>
        </Button>
      </div>
    </header>
  );
}

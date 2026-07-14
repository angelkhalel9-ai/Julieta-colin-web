"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { content } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ContactForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hola, soy ${name}.`,
      service ? `Me interesa: ${service}.` : "",
      details ? `Detalles: ${details}` : "",
    ].filter(Boolean);

    window.open(getWhatsAppLink(lines.join(" ")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contacto" className="bg-secondary/40 py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-2xl px-5 md:px-8"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Cuéntanos qué necesitas
          </h2>
          <p className="mt-4 text-muted-foreground">
            Llena estos datos y te escribimos directo por WhatsApp — así llegamos
            más rápido al punto.
          </p>
        </motion.div>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="¿Cómo te llamas?"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">¿Qué servicio necesitas?</Label>
            <Select value={service} onValueChange={(value) => setService(value ?? "")}>
              <SelectTrigger id="service" className="w-full">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                {content.services.map((s) => (
                  <SelectItem key={s.name} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
                <SelectItem value="No estoy segura/o, quiero orientación">
                  No estoy segura/o, quiero orientación
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Cuéntanos un poco más (opcional)</Label>
            <Textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Síntomas, fechas que te acomoden, dudas puntuales..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar por WhatsApp
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}

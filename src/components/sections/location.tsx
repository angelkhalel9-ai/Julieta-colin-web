"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Location() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    content.location.mapQuery,
  )}&z=15&output=embed`;

  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold text-foreground md:text-4xl"
          >
            Ubicación
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Consultorio en Ensenada, Baja California. Escribe por WhatsApp para
            confirmar el mejor horario para tu cita.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground">Dirección</p>
              <p className="mt-1 text-muted-foreground">{content.location.address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Horario</p>
              <p className="mt-1 text-muted-foreground">{content.location.hours}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-square w-full overflow-hidden rounded-3xl border border-border/60 md:aspect-[4/5]"
        >
          <iframe
            src={mapSrc}
            title="Ubicación del consultorio"
            loading="lazy"
            className="h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section className="bg-primary">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-24"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold text-primary-foreground md:text-4xl"
        >
          Cuanto antes lo atiendas, con más calma se resuelve.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-primary-foreground/80"
        >
          Escríbele directo a la Dra. {content.doctor.name.replace("Dra. ", "")} por
          WhatsApp y agenda tu cita en Ensenada.
        </motion.p>
      </motion.div>
    </section>
  );
}

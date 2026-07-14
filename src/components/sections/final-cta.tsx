"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { content } from "@/lib/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
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
          Entre más pronto lo revises, más simple suele ser resolverlo.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-primary-foreground/80"
        >
          Escríbele directo a la Dra. {content.doctor.name.replace("Dra. ", "")} por
          WhatsApp y agenda tu cita en Ensenada.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Button
            render={<a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-8 bg-background text-primary transition-transform hover:scale-[1.03] hover:bg-background/90"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Agendar cita por WhatsApp
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

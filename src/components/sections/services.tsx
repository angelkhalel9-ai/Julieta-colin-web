"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { content } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-2xl"
      >
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Servicios</h2>
        <p className="mt-4 text-muted-foreground">
          Del diagnóstico al tratamiento, con la tecnología para resolverlo en un
          mismo lugar — sin rebotarte de especialista en especialista.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {content.services.map((service, index) => (
          <motion.div key={service.name} variants={fadeUp} whileHover={{ y: -6 }}>
            <Card className="h-full border-border/60 bg-card py-8 shadow-none transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader className="px-8">
                <span className="font-heading text-3xl text-primary/40">
                  0{index + 1}
                </span>
                <CardTitle className="mt-4 text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="px-8">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

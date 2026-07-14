"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { content } from "@/lib/content";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { CredentialsCarousel } from "@/components/credentials-carousel";

export function AboutDoctor() {
  return (
    <section id="doctora" className="bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <CredentialsCarousel images={content.doctor.credentialImages} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="order-1 flex flex-col justify-center md:order-2"
        >
          <motion.div variants={fadeUp}>
            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
              Sobre la Doctora
            </Badge>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-semibold text-foreground md:text-4xl"
          >
            {content.doctor.name}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-lg text-primary">
            {content.doctor.title}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-muted-foreground">
            {content.doctor.bio}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Separator className="my-8" />
          </motion.div>

          <motion.dl variants={staggerContainer} className="grid gap-5 sm:grid-cols-2">
            {content.doctor.education.map((entry) => (
              <motion.div key={entry.degree} variants={fadeUp}>
                <dt className="text-sm font-medium text-foreground">{entry.degree}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {entry.school}
                  {entry.year ? ` (${entry.year})` : ""}
                </dd>
              </motion.div>
            ))}
            <motion.div variants={fadeUp}>
              <dt className="text-sm font-medium text-foreground">Experiencia</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                Más de {content.doctor.experienceYears} años de trayectoria médica
              </dd>
            </motion.div>
            <motion.div variants={fadeUp}>
              <dt className="text-sm font-medium text-foreground">Certificaciones</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {content.doctor.certifications.join(" · ")}
              </dd>
            </motion.div>
          </motion.dl>

          <motion.p variants={fadeUp} className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {content.doctor.additionalProcedures}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 text-xs text-muted-foreground/80">
            Cédula Profesional {content.doctor.cedulaProfesional} · Cédula de Especialidad{" "}
            {content.doctor.cedulaEspecialidad} · Registro COFEPRIS{" "}
            {content.doctor.cofeprisRegistration}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

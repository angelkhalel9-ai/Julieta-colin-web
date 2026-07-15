"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { LogoVideoBlock } from "@/components/logo-video-block";

const headline = [
  { text: "Tu" },
  { text: "salud" },
  { text: "digestiva," },
  { text: "en" },
  { text: "manos" },
  { text: "con" },
  { text: "más", highlight: true },
  { text: "de", highlight: true },
  { text: "15", highlight: true },
  { text: "años", highlight: true },
  { text: "de", highlight: true },
  { text: "experiencia.", highlight: true },
];

const word: typeof fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ebebeb]">
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#ebebeb]">
        <Image
          src="/videos/logo-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <LogoVideoBlock className="absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#ebebeb]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.h1
            variants={staggerContainer}
            className="mt-6 flex flex-wrap text-4xl leading-[1.1] font-semibold text-foreground md:text-6xl"
          >
            {headline.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-[0.28em] inline-block ${w.highlight ? "text-primary" : ""}`}
              >
                {w.text}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-muted-foreground">
            La Dra. Julieta Colín Garnica atiende consultas y realiza endoscopías y
            colonoscopías, con un enfoque claro: entender qué te pasa antes de decidir
            qué hacer.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <Button
              render={<a href="#servicios" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="transition-transform hover:scale-[1.03]"
            >
              Ver servicios
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-primary/10">
            <Image
              src="/images/hero.jpg"
              alt={`${content.doctor.name}, gastroenteróloga, realizando un procedimiento de endoscopia`}
              fill
              priority
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover object-[75%_30%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

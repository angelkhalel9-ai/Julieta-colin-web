"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="overflow-hidden py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-6xl px-5 md:px-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Lo que dicen sus pacientes
            </h2>
            <p className="mt-3 text-muted-foreground">
              {content.reviews.totalReviews}+ opiniones verificadas en{" "}
              <a
                href={content.reviews.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2"
              >
                Doctoralia
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:w-24" />

        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-8">
          {content.reviews.items.map((review) => (
            <div
              key={review.name}
              className="flex w-[280px] shrink-0 snap-start flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-sm md:w-[320px] md:p-7"
            >
              <Quote className="h-6 w-6 text-primary/40" />
              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-sm font-medium text-foreground">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

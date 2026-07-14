"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CredentialImage } from "@/types/content";

export function CredentialsCarousel({ images }: { images: CredentialImage[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + images.length) % images.length);
  };

  return (
    <div>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-border/60 bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-contain p-6"
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Credencial anterior"
          className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-transform hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente credencial"
          className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-transform hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{current.label}</p>
        <div className="flex shrink-0 gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver credencial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-primary" : "w-1.5 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

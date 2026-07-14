"use client";

import { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "intro-splash-shown";
const MAX_DURATION_MS = 3200;

export function IntroSplash() {
  const [visible, setVisible] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => setVisible(false), MAX_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background"
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setVisible(false)}
            className="h-44 w-44 object-contain md:h-64 md:w-64"
          >
            <source src="/videos/logo-animado.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

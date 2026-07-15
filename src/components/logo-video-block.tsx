"use client";

import { useEffect, useRef } from "react";

const FREEZE_FRACTION = 0.65;

export function LogoVideoBlock({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Some mobile browsers ignore the JSX `muted` attribute on first paint
    // and silently block autoplay unless the property is also set imperatively.
    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    // Fallback: if autoplay was still blocked, start on the first tap/scroll.
    const retryOnInteraction = () => {
      if (video.paused) tryPlay();
      events.forEach((event) => document.removeEventListener(event, retryOnInteraction));
    };
    const events = ["touchstart", "click", "scroll"] as const;
    events.forEach((event) =>
      document.addEventListener(event, retryOnInteraction, { once: true, passive: true }),
    );

    return () => {
      events.forEach((event) => document.removeEventListener(event, retryOnInteraction));
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      controlsList="nodownload noplaybackrate nofullscreen"
      aria-hidden="true"
      className={className}
      onTimeUpdate={(e) => {
        const video = e.currentTarget;
        if (video.currentTime >= video.duration * FREEZE_FRACTION) {
          video.pause();
        }
      }}
    >
      <source src="/videos/logo-animado.mp4" type="video/mp4" />
    </video>
  );
}

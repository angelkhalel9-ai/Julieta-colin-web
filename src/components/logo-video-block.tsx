"use client";

const FREEZE_FRACTION = 0.65;

export function LogoVideoBlock({ className }: { className?: string }) {
  return (
    <video
      autoPlay
      muted
      playsInline
      preload="auto"
      poster="/videos/logo-poster.jpg"
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

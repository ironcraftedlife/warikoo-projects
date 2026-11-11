"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoVideo({ background = false }: { background?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const reconcile = useRef<() => void>(() => {});
  const userPaused = useRef(false);
  const manualPlay = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    function update() {
      if (!element) return;
      const shouldPlay = visible && !document.hidden && !userPaused.current && (!motion.matches || manualPlay.current);
      if (shouldPlay) {
        // Defer the MP4 request until playback is appropriate. Reduced-motion
        // visitors see only the poster unless they explicitly choose Play.
        if (!element.hasAttribute("src")) element.src = "/videos/wprojects-preview.mp4";
        void element.play().catch(() => setPlaying(false));
      } else {
        element.pause();
      }
    }
    reconcile.current = update;
    function motionChanged() { manualPlay.current = false; update(); }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { rootMargin: "100px 0px" });
    observer.observe(element);
    motion.addEventListener("change", motionChanged);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", motionChanged);
      document.removeEventListener("visibilitychange", update);
      reconcile.current = () => {};
      element.pause();
    };
  }, []);

  return (
    <div data-demo-video className={background ? "absolute inset-0" : "min-w-0"}>
      <div className={background ? "absolute inset-0 overflow-hidden" : "aspect-video w-full overflow-hidden"}>
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="none"
          poster="/videos/wprojects-preview-poster.jpg"
          aria-label="Temporary design preview showing transport infrastructure, engineering personnel, architecture and construction. This footage does not depict WProjects projects."
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setUnavailable(true)}
          className={background ? "h-full w-full object-cover object-center" : "h-full w-full object-contain"}
        />
      </div>
      <div className={background ? "site-container absolute inset-x-0 bottom-3 z-20 flex justify-end" : "mt-1 flex justify-end"}>
        <button
          type="button"
          disabled={unavailable}
          onClick={() => {
            userPaused.current = playing;
            manualPlay.current = !playing;
            reconcile.current();
          }}
          aria-label={playing ? "Pause preview video" : "Play preview video"}
          className={background ? "inline-flex min-h-11 items-center border border-white/40 bg-dark/50 px-3 text-xs font-medium text-white hover:bg-dark/80 disabled:cursor-default" : "nav-link inline-flex min-h-11 items-center text-xs font-medium text-muted disabled:cursor-default"}
        >
          {unavailable ? "Video unavailable" : playing ? "Pause video" : "Play video"}
        </button>
      </div>
    </div>
  );
}

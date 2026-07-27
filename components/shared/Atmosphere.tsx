"use client";

import { useEffect, useRef } from "react";

const Atmosphere = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      progressRef.current?.style.setProperty("--scroll-progress", `${progress}`);
    };

    const updatePointer = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glowRef.current?.style.setProperty("--pointer-x", `${event.clientX}px`);
        glowRef.current?.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div ref={progressRef} className="site-scroll-progress" />
      <div ref={glowRef} className="site-pointer-glow" />
      <div className="site-aurora site-aurora-one" />
      <div className="site-aurora site-aurora-two" />
      <div className="site-noise" />
    </div>
  );
};

export default Atmosphere;

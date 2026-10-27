"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/content/site.config";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowEndDevice = (navigator.hardwareConcurrency ?? 4) <= 2;

    const updateMotionPreference = () => {
      setMotionAllowed(!reducedMotion.matches && !lowEndDevice);
    };

    updateMotionPreference();
    reducedMotion.addEventListener("change", updateMotionPreference);

    return () => reducedMotion.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden="true">
      <Image
        src={siteConfig.hero.posterPath}
        alt=""
        fill
        priority
        sizes="(max-width: 640px) 100vw, 520px"
        className="object-cover"
      />
      {motionAllowed && inView ? <HeroScene modelPath={siteConfig.hero.modelPath} /> : null}
    </div>
  );
}

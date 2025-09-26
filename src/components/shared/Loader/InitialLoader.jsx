"use client";

import { useEffect, useState } from "react";
import LogoLoader from "./LogoLoader";

export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    let fadeTimer;
    let fallbackTimer;
    let finished = false;

    const finishLoading = () => {
      if (finished) return;
      finished = true;
      setIsVisible(false);
      fadeTimer = window.setTimeout(() => setShouldRender(false), 520);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      fallbackTimer = window.setTimeout(finishLoading, 3500);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <LogoLoader />
    </div>
  );
}

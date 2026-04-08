"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}

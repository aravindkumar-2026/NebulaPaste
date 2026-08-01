"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[140px]"
      style={{
        left: position.x - 210,
        top: position.y - 210,
      }}
    />
  );
}
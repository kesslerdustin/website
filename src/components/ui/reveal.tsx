"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 20,
  threshold = 0.1,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "10px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Define the initial and animated styles based on direction
  let initialStyles = {};
  switch (direction) {
    case "up":
      initialStyles = { transform: `translateY(${distance}px)` };
      break;
    case "down":
      initialStyles = { transform: `translateY(-${distance}px)` };
      break;
    case "left":
      initialStyles = { transform: `translateX(${distance}px)` };
      break;
    case "right":
      initialStyles = { transform: `translateX(-${distance}px)` };
      break;
    case "none":
      initialStyles = { opacity: 0 };
      break;
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : undefined,
        transition: `opacity 0.6s ease-out, transform 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)`,
        transitionDelay: `${delay}s`,
        ...(!isVisible ? initialStyles : {}),
      }}
    >
      {children}
    </div>
  );
} 
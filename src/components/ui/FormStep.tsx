"use client";

import { useEffect, useRef } from "react";

import { Container } from "./Container";

interface FormStepProps {
  isActive: boolean;
  direction: "left" | "right";
  children: React.ReactNode;
}

export function FormStep({ isActive, direction, children }: FormStepProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && isActive) {
      const inputs = contentRef.current.querySelectorAll("input, select, textarea");
      if (inputs.length > 0) {
        (inputs[0] as HTMLElement).focus();
      }
    }
  }, [isActive]);

  return (
    <div
      role="tabpanel"
      aria-hidden={!isActive}
      className={`form-section absolute top-0 w-full transition-transform duration-300 ease-in-out ${
        isActive
          ? "relative translate-x-0"
          : direction === "left"
            ? "-translate-x-full"
            : "translate-x-full"
      }`}
      style={{
        display: isActive ? "block" : "none",
      }}
    >
      <Container glass className="mx-auto max-w-4xl">
        <div ref={contentRef} className="relative py-6">
          {children}
        </div>
      </Container>
    </div>
  );
}

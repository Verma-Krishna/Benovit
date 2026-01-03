"use client";
import { useEffect } from "react";

export default function SuppressHydrationWarnings() {
  useEffect(() => {
    const origError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("hydration") &&
        args[0].includes("didn't match")
      ) {
        return; // ignore hydration mismatch warnings
      }
      origError(...args);
    };
  }, []);
  return null;
}

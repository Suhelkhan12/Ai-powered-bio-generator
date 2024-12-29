"use client";
import { BioContext } from "@/context/bio/bio-context";
import { useContext } from "react";

const useBioContext = () => {
  const ctx = useContext(BioContext);
  if (!ctx) throw new Error("useBioContext must be used within a BioProvider");
  return ctx;
};

export default useBioContext;

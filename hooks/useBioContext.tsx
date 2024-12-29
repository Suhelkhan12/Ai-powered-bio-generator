"use client";
import { BioContext } from "@/context/bio/bio-context";
import { useContext } from "react";

const useBioContext = () => useContext(BioContext);

export default useBioContext;

"use client";
import { createContext } from "react";
import { BioContextProps } from "@/lib/types";

// creating BioContext
export const BioContext = createContext<BioContextProps>({} as BioContextProps);

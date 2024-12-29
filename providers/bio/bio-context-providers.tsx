"use client";
import { BioContext } from "@/context/bio/bio-context";
import { Bios } from "@/lib/types";
import { FC, useState } from "react";

type BioProviderProps = {
  children: React.ReactNode;
};

const BioContextProvider: FC<BioProviderProps> = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [bios, setBios] = useState<Bios[]>([]);

  return (
    <BioContext.Provider value={{ isFetching, setIsFetching, bios, setBios }}>
      {children}
    </BioContext.Provider>
  );
};

export default BioContextProvider;

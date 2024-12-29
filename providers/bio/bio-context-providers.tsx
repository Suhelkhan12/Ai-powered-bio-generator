import { BioContext } from "@/context/bio/bio-context";
import { BioContextProps, Bios } from "@/lib/types";
import { FC, useState } from "react";

const BioContextProvider: FC<BioContextProps> = ({ children }) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [bios, setBios] = useState<Bios[]>([]);

  return (
    <BioContext.Provider value={{ isFetching, setIsFetching, bios, setBios }}>
      {children}
    </BioContext.Provider>
  );
};

export default BioContextProvider;

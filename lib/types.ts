export enum BioTypes {
  Personal = "personal",
  Brand = "brand",
}

export enum BioTones {
  Professional = "professional",
  Casual = "casual",
  Sarcastic = "sarcastic",
  Funny = "funny",
  Passionate = "passionate",
  Thoughtful = "thoughtful",
}

export type Bios = {
  id: string;
  text: string;
};

export type BioContextProps = {
  isFetching: boolean;
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>;
  bios: Bios[];
  setBios: React.Dispatch<React.SetStateAction<Bios[]>>;
};

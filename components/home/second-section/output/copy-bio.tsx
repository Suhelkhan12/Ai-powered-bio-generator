"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CopyBio = ({ bio }: { bio: string }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(bio)
      .then(() => toast.success("Bio coopied to clipboard 🎉"));
  };
  return (
    <div className="flex w-full justify-end">
      <Button onClick={handleCopy} className=" rounded-t-none">
        Copy
      </Button>
    </div>
  );
};

export default CopyBio;

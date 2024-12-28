import { Loader } from "lucide-react";

const OutputLoader = () => {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <Loader className="animate-spin size-4 text-sm" />
      <span>Generating bios</span>
    </div>
  );
};

export default OutputLoader;

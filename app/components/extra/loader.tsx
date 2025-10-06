import { Loader2Icon } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full py-10 bg-background">
      <div className=" flex items-center flex-col gap-3">
        <Loader2Icon className="animate-spin" size={26} />
        <p>Loading</p>
      </div>
    </div>
  );
}

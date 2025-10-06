import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full py-10 bg-background">
      <div className=" flex items-center flex-col gap-3">
        <SearchX size={30} className="text-gray-300" />
        <p>Not found</p>
      </div>
    </div>
  );
}

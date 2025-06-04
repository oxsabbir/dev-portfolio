"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import Button from "../ui/button";
import { useState } from "react";

export default function CopyButton({ copyData }: { copyData: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyhandler = function () {
    if (!isCopied) {
      setIsCopied(true);
      window.navigator.clipboard.writeText(copyData);
    } else {
      setIsCopied(false);
    }
  };

  return (
    <Button
      onClick={copyhandler}
      size="sm"
      variant="secondery"
      className="!rounded-full !p-2 group hover:border-secondery"
    >
      {isCopied ? (
        <ClipboardCheck className="w-5 h-5" />
      ) : (
        <Clipboard className="w-5 h-5" />
      )}
    </Button>
  );
}

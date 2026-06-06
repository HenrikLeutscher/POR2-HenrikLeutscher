import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

export function CopyLinkButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 4000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy project link"
      className="rounded-lg border border-gray-600 px-5 py-3 text-center font-semibold text-gray-100 transition hover:bg-gray-800"
    >
      {isCopied ? (
        <span className="flex items-center font-bold">
          <ClipboardCheck className="mr-2" />
          Link copied!
        </span>
      ) : (
        <span className="flex items-center">
          <Clipboard className="mr-2" />
          Share Project
        </span>
      )}
    </button>
  );
}

"use client";

import { Download } from "lucide-react";

type DownloadButtonProps = {
  title: string;
  language: string;
  content: string;
};

export default function DownloadButton({
  title,
  language,
  content,
}: DownloadButtonProps) {
  function getExtension(lang: string) {
    switch (lang.toLowerCase()) {
      case "javascript":
        return "js";
      case "typescript":
        return "ts";
      case "python":
        return "py";
      case "java":
        return "java";
      case "cpp":
        return "cpp";
      case "c":
        return "c";
      case "html":
        return "html";
      case "css":
        return "css";
      case "json":
        return "json";
      default:
        return "txt";
    }
  }

  function downloadPaste() {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title || "paste"}.${getExtension(language)}`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={downloadPaste}
      className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
    >
      <Download className="mr-2 inline h-4 w-4" />
      Download
    </button>
  );
}
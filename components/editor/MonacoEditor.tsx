"use client";

import Editor from "@monaco-editor/react";

type MonacoEditorProps = {
  language: string;
  code: string;
  onChange: (value: string) => void;
};

export default function MonacoEditor({
  language,
  code,
  onChange,
}: MonacoEditorProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

      {/* Editor Header */}

      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-zinc-500">
          {language}
        </span>

      </div>

      {/* Monaco */}

      <Editor
        height="650px"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(value) => onChange(value || "")}
        options={{
          minimap: {
            enabled: false,
          },

          fontSize: 16,

          automaticLayout: true,

          wordWrap: "on",

          scrollBeyondLastLine: false,

          padding: {
            top: 20,
            bottom: 20,
          },

          smoothScrolling: true,

          cursorBlinking: "smooth",

          cursorSmoothCaretAnimation: "on",

          roundedSelection: true,
        }}
      />

    </div>
  );
}
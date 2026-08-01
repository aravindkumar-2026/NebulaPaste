"use client";

import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const snippets = [
  {
    language: "javascript",
    file: "app.js",
    code: `function greet(name) {
  return \`Hello \${name}\`;
}

console.log(greet("NebulaPaste"));`,
  },

  {
    language: "python",
    file: "main.py",
    code: `def greet(name):
    return f"Hello {name}"

print(greet("NebulaPaste"))`,
  },

  {
    language: "java",
    file: "Main.java",
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello NebulaPaste");
    }
}`,
  },

  {
    language: "sql",
    file: "query.sql",
    code: `SELECT *
FROM pastes
ORDER BY createdAt DESC;`,
  },

  {
    language: "json",
    file: "data.json",
    code: `{
  "project": "NebulaPaste",
  "version": "2.0",
  "openSource": true
}`,
  },

  {
    language: "html",
    file: "index.html",
    code: `<h1>Welcome to NebulaPaste</h1>
<p>Create. Save. Share.</p>`,
  },

  {
    language: "css",
    file: "styles.css",
    code: `.hero{
  color:#22d3ee;
  font-weight:bold;
}`,
  },
];

export default function FloatingCodeWindow() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % snippets.length);
        setVisible(true);
      }, 350);

    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = snippets[index];

  return (
    <GlassCard className="overflow-hidden p-0 shadow-2xl">

      {/* Window Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-4">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-red-500" />

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 text-sm text-zinc-500">
            {current.file}
          </span>

        </div>

        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-400">
          {current.language}
        </span>

      </div>
            <div
        className={`transition-all duration-500 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
      >
        <SyntaxHighlighter
          language={current.language}
          style={oneDark}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: "28px",
            background: "#0d1117",
            fontSize: "14px",
            minHeight: "340px",
            borderRadius: 0,
          }}
          codeTagProps={{
            style: {
              fontFamily:
                "JetBrains Mono, Fira Code, monospace",
            },
          }}
        >
          {current.code}
        </SyntaxHighlighter>
      </div>

    </GlassCard>
  );
}
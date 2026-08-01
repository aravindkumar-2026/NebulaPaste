"use client";

import { useEffect, useState } from "react";

const words = [
  "Share Code.",
  "Share Notes.",
  "Share Text.",
  "Share Snippets.",
  "Share Ideas.",
  "Share Anything.",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));

        if (text === "") {
          setDeleting(false);

          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
      {text}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import EditorHeader from "./EditorHeader";
import EditorForm from "./EditorForm";
import MonacoEditor from "./MonacoEditor";

export default function CodeEditor() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(
`console.log("Hello NebulaPaste 🚀");`
  );

  const [loading, setLoading] = useState(false);

  async function createPaste() {
    if (!title.trim()) {
      toast.error("Please enter a title.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/pastes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          content: code,
          language,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to create paste.");
        return;
      }

      toast.success("Paste created successfully!");

      setTimeout(() => {
        router.push(`/paste/${data.id}`);
      }, 600);

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <EditorHeader language={language} />

      <EditorForm
        title={title}
        description={description}
        language={language}
        loading={loading}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onLanguageChange={setLanguage}
        onSubmit={createPaste}
      />

      <MonacoEditor
        language={language}
        code={code}
        onChange={setCode}
      />

    </div>
  );
}
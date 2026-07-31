"use client";

import CopyButton from "./CopyButton";
import ShareButton from "./ShareButton";
import DownloadButton from "./DownloadButton";
import PinButton from "./PinButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

type PasteToolbarProps = {
  id: string;
  title: string;
  language: string;
  content: string;
  pinned: boolean;
  isOwner: boolean;
};

export default function PasteToolbar({
  id,
  title,
  language,
  content,
  pinned,
  isOwner,
}: PasteToolbarProps) {
  return (
    <div className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-xl">

      <div className="flex flex-wrap items-center gap-4">

        <CopyButton text={content} />

        <ShareButton id={id} />

        <DownloadButton
          title={title}
          language={language}
          content={content}
        />

        {isOwner && (
          <>
            <PinButton
              id={id}
              pinned={pinned}
            />

            <EditButton id={id} />

            <DeleteButton id={id} />
          </>
        )}

      </div>

    </div>
  );
}
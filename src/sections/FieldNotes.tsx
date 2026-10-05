import { useEffect, useRef, useState } from "react";
import { Section } from "../components/layout/Section";
import { Badge } from "../components/ui/Badge";
import { Reveal } from "../components/ui/Reveal";
import { fieldNotes, type FieldNote, type NoteBlock } from "../data/notes";

function assetPath(src: string) {
  return `${import.meta.env.BASE_URL}${src.startsWith("/") ? src.slice(1) : src}`;
}

function NoteReader({ note, onClose }: { note: FieldNote; onClose: () => void }) {
  return (
    <article id="field-journal-reader" className="mt-14 scroll-mt-24 overflow-hidden rounded-3xl border border-[#16181d]/12 bg-[#fffefc] shadow-[0_18px_60px_rgba(22,24,29,0.08)]">
      <header className="bg-[#101218] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff8a5c]">
            <span>{note.publishedLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{note.readTime}</span>
          </div>
          <h3 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
            {note.title}
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            {note.dek}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {note.tags.map((tag) => (
              <Badge key={tag} tone="inverse">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/55">
            <span>{note.author}</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/20 px-4 py-1.5 text-white/80 transition-colors hover:border-[#ff8a5c] hover:text-white"
            >
              Back to notes
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
        {note.blocks.map((block, index) => (
          <NoteBlockView key={`${block.type}-${index}`} block={block} />
        ))}
        <div className="mt-14 border-t border-[#16181d]/10 pt-7">
          <a href="#work" className="text-sm font-semibold text-[#c23a08] hover:text-[#e8480c]">
            View the Cold-Chain Logistics Assistant →
          </a>
        </div>
      </div>
    </article>
  );
}

function NoteBlockView({ block }: { block: NoteBlock }) {
  if (block.type === "heading") {
    return <h4 className="mt-12 mb-4 font-display text-2xl font-bold tracking-tight text-[#16181d] sm:text-3xl">{block.text}</h4>;
  }

  if (block.type === "paragraph") {
    return <p className="mt-5 text-[16px] leading-[1.8] text-[#4b4f58]">{block.text}</p>;
  }

  if (block.type === "quote") {
    return <blockquote className="my-8 border-l-2 border-[#e8480c] pl-5 font-display text-xl font-medium leading-relaxed text-[#16181d]">{block.text}</blockquote>;
  }

  if (block.type === "bullets") {
    return (
      <ul className="my-7 space-y-3 rounded-2xl border border-[#16181d]/10 bg-[#f7f6f3] p-6">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[#4b4f58]">
            <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8480c]" />
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "table") {
    return (
      <figure className="my-10 overflow-hidden rounded-2xl border border-[#16181d]/12 bg-[#fffefc] shadow-[0_8px_24px_rgba(22,24,29,0.06)]">
        <figcaption className="border-b border-[#16181d]/10 bg-[#f7f6f3] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#c23a08]">
          {block.caption}
        </figcaption>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-[#101218] text-white">
              <tr>
                {block.columns.map((column) => (
                  <th key={column} scope="col" className="whitespace-nowrap px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/75">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${block.caption}-${rowIndex}`} className={rowIndex % 2 === 0 ? "bg-white" : "bg-[#f7f6f3]/70"}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`} className={`border-t border-[#16181d]/10 px-4 py-3 leading-relaxed ${cellIndex === 0 ? "font-semibold text-[#16181d]" : "text-[#4b4f58]"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    );
  }

  return (
    <figure className={`my-10 overflow-hidden rounded-2xl border border-[#16181d]/12 ${block.tone === "dark" ? "bg-[#101218] p-4" : "bg-[#f7f6f3] p-3"}`}>
      <img src={assetPath(block.src)} alt={block.alt} className="mx-auto max-h-[560px] w-full rounded-xl object-contain" loading="lazy" />
      <figcaption className={`px-2 pb-1 pt-4 text-xs leading-relaxed ${block.tone === "dark" ? "text-white/55" : "text-[#8a8e98]"}`}>
        {block.caption}
      </figcaption>
    </figure>
  );
}

export function FieldNotes() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedNote = fieldNotes.find((note) => note.id === selectedId);
  const readerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedNote) return;
    requestAnimationFrame(() => {
      readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [selectedId, selectedNote]);

  return (
    <Section
      id="notes"
      label="Journals"
      meta="03 / Build Notes"
      title="How the systems were built"
      intro="Long-form notes on the decisions, boundaries, failures, and trade-offs behind the projects."
    >
      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16">
        {fieldNotes.map((note, index) => (
          <Reveal key={note.id} delay={index * 0.06} className="w-[min(88vw,72rem)] shrink-0 snap-center">
            <article className="paper-card grid h-full min-h-[31rem] overflow-hidden rounded-3xl lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c23a08]">
                  <span>{note.projectLabel}</span>
                  <span className="text-[#8a8e98]">{note.readTime}</span>
                </div>
                <h3 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.06] tracking-tight text-[#16181d] sm:text-4xl">
                  {note.title}
                </h3>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#4b4f58]">{note.dek}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {note.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>
                <div className="mt-auto pt-10">
                  <div className="grid grid-cols-3 gap-2 border-y border-[#16181d]/10 py-4">
                    {note.proofPoints.map((point) => (
                      <div key={point.label}>
                        <p className="font-mono text-lg font-bold text-[#16181d]">{point.value}</p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8a8e98]">{point.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-sm text-[#8a8e98]">By {note.author}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedId(note.id)}
                      className="rounded-full bg-[#16181d] px-5 py-2.5 text-sm font-semibold text-[#f7f6f3] transition-colors hover:bg-[#e8480c]"
                    >
                      Read journal →
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex min-h-72 flex-col justify-center bg-[#101218] p-7 sm:p-10">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff8a5c]">{note.proofPanel.label}</p>
                  <p className="mt-5 font-display text-5xl font-bold text-white">{note.proofPanel.value}</p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{note.proofPanel.description}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-2">
                    {note.proofPanel.flow.map((step, stepIndex) => (
                      <span key={step} className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-white/70">
                        <span className="rounded-full border border-white/15 px-2 py-1">{step}</span>
                        {stepIndex < note.proofPanel.flow.length - 1 && <span aria-hidden="true" className="text-[#ff8a5c]">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{note.projectLabel} · journal preview</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8e98]">Scroll horizontally to explore the journals</p>

      {selectedNote && (
        <div ref={readerRef}>
          <NoteReader note={selectedNote} onClose={() => setSelectedId(null)} />
        </div>
      )}
    </Section>
  );
}

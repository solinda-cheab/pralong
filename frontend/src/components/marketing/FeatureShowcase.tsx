const pills = [
  "AI question generator",
  "Instant feedback",
  "Automatic grading",
  "Reporting & analytics",
  "Remote assessments",
  "Paperless by design",
];

export default function FeatureShowcase() {
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-shell px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          A better way to write questions
        </h2>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {pills.map((p) => (
            <span key={p} className="rounded-full border border-paper/20 px-4 py-1.5 text-sm text-paper/80">
              {p}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-card border border-paper/15 bg-paper/5 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-amber">Problem</p>
            <p className="mt-3 text-lg leading-relaxed text-paper/85">
              Writing good multiple-choice questions is slow — especially at the volume a
              real question bank needs. Most of that time goes into plausible wrong answers,
              not the concept being tested.
            </p>
          </div>
          <div className="rounded-card border border-mint/30 bg-mint/10 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-mint">Solution</p>
            <p className="mt-3 text-lg leading-relaxed text-paper/90">
              Hand Assessly your source material or just a topic, and it drafts a full set
              of questions — plausible distractors included. You review, edit what needs it,
              and publish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

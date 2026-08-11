const stats = [
  { value: "48.2M", label: "answers submitted" },
  { value: "6", label: "avg. questions per sheet saved" },
  { value: "9,400+", label: "paper sheets per tree" },
];

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-20 text-paper">
      <div className="pointer-events-none absolute inset-0 text-mint/10 bubble-grid" />
      <div className="relative mx-auto max-w-shell px-6">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-widest text-mint">Paperless by default</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Every digital test is one you didn&apos;t print
          </h2>
          <p className="mt-4 text-paper/70">
            Move assessments online and the paper, printing and shredding overhead goes
            with them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-card border border-paper/15 bg-paper/5 p-6">
              <p className="font-mono text-3xl font-semibold text-mint sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-paper/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

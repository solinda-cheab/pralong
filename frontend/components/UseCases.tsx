const useCases = [
  {
    title: "Recruitment",
    copy: "Screen candidates on actual skill instead of how well a CV reads.",
  },
  {
    title: "Employee assessments",
    copy: "Track growth over time and spot where a team needs support.",
  },
  {
    title: "Training",
    copy: "Check retention right after a session, while it still matters.",
  },
  {
    title: "Sales training",
    copy: "Confirm reps know the product before they're in front of a customer.",
  },
  {
    title: "Customer service",
    copy: "Keep support quality consistent as the team grows.",
  },
  {
    title: "Safety procedures",
    copy: "Make sure every shift understands the protocol, not just signed it.",
  },
];

export default function UseCases() {
  return (
    <section className="border-b border-line bg-paper py-20">
      <div className="mx-auto max-w-shell px-6">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">One platform, every use case</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Built for how your team actually tests people
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className="group rounded-card border border-line bg-white p-6 transition-colors hover:border-teal/40"
            >
              <span className="font-mono text-xs text-ink/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{uc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{uc.copy}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal">
                Learn more
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

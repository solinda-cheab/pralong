export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-teal/10 bubble-grid" />
      <div className="mx-auto max-w-shell px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Turn every test into a{" "}
              <span className="relative inline-block text-teal">
                clear result
                <svg
                  className="absolute -bottom-1 left-0 w-full text-mint"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M1 5.5C40 1 160 1 199 5.5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink/70">
              AI-assisted assessment software for tests, quizzes and exams — trusted by
              training teams, schools and certification bodies who need results they
              can act on, not just a score.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#signup"
                className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-teal-deep focus-ring"
              >
                Sign up — it&apos;s free
              </a>
              <span className="text-sm text-ink/60">No credit card required</span>
            </div>
          </div>

          {/* Signature element: answer-sheet card standing in for the product screenshot */}
          <div className="relative">
            <div className="rounded-card border border-line bg-white p-6 shadow-[0_20px_60px_-20px_rgba(11,35,32,0.25)]">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50">Module 3 · Question 7</p>
                <span className="rounded-full bg-mint/15 px-3 py-1 font-mono text-xs font-medium text-teal-deep">Auto-graded</span>
              </div>
              <p className="mb-5 font-display text-lg font-medium text-ink">
                Which metric best signals a question is too easy?
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "Average completion time", checked: false },
                  { label: "Correct-answer rate above 95%", checked: true },
                  { label: "Number of skipped attempts", checked: false },
                  { label: "Respondent satisfaction score", checked: false },
                ].map((opt) => (
                  <li
                    key={opt.label}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm ${
                      opt.checked
                        ? "border-mint/60 bg-mint/10 text-teal-deep font-medium"
                        : "border-line text-ink/70"
                    }`}
                  >
                    <span
                      className={`bubble-bullet ${opt.checked ? "border-mint bg-mint text-white" : "border-ink/30"}`}
                    >
                      {opt.checked && (
                        <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    {opt.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <p className="font-mono text-xs text-ink/50">18 of 24 answered</p>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-paper-dim">
                  <div className="h-full w-3/4 rounded-full bg-mint" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-card border border-line bg-ink px-5 py-4 text-paper shadow-lg sm:block">
              <p className="font-mono text-2xl font-semibold text-mint">92%</p>
              <p className="text-xs text-paper/70">avg. completion rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-paper-dim/60 py-4">
        <div className="mx-auto max-w-shell px-6">
          <div className="rounded-card border border-line bg-white p-4 sm:flex sm:items-center sm:justify-between sm:p-5">
            <div>
              <p className="font-display text-base font-semibold text-ink">Here to take a test?</p>
              <p className="text-sm text-ink/60">No registration required — enter your access code and start.</p>
            </div>
            <a
              href="#"
              className="mt-4 inline-block rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-teal hover:text-teal focus-ring sm:mt-0"
            >
              Start your test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const columns = [
  {
    heading: "Product",
    links: ["Skills & knowledge assessment", "Quiz maker", "Test maker", "Exam software", "AI question creation", "Insights & analytics", "Proctoring & security", "Integrations & API"],
  },
  {
    heading: "For business",
    links: ["Human resources", "Training teams", "Certification", "Sales & customer service", "Language schools"],
  },
  {
    heading: "For education",
    links: ["Teachers", "Schools", "Universities & colleges"],
  },
  {
    heading: "Use cases",
    links: ["Recruitment", "Employee assessments", "Training", "Customer service", "Safety procedures", "Formative assessment"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper pt-16">
      <div className="mx-auto max-w-shell px-6">
        <div className="flex flex-col justify-between gap-10 border-b border-line pb-12 lg:flex-row">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal text-paper">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-ink">Assessly</span>
            </div>
            <p className="mt-4 text-sm text-ink/60">Guides · Help Center · Customer Stories · About Us · Contact Us</p>
            <div className="mt-5 flex gap-3">
              {["LinkedIn", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/50 transition-colors hover:border-teal hover:text-teal focus-ring"
                  aria-label={s}
                >
                  <span className="text-xs font-semibold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="font-display text-sm font-semibold text-ink">{col.heading}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-ink/60 hover:text-teal">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink/50 sm:flex-row">
          <p>Copyright © Assessly 2026</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-teal">Privacy Policy</a>
            <a href="#" className="hover:text-teal">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

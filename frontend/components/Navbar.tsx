const navItems = ["Product", "Who it's for", "Use cases", "Pricing", "Resources"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 focus-ring rounded">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal text-paper">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">Assessly</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-ink/80 transition-colors hover:text-teal focus-ring rounded"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-medium text-ink/80 hover:text-teal sm:block focus-ring rounded"
          >
            Log in
          </a>
          <a
            href="#signup"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal-deep focus-ring"
          >
            Sign up free
          </a>
        </div>
      </div>
    </header>
  );
}

export default function CTA() {
  return (
    <section id="signup" className="border-b border-line bg-paper py-20">
      <div className="mx-auto max-w-shell px-6">
        <div className="relative overflow-hidden rounded-card bg-teal px-8 py-16 text-center text-paper sm:px-16">
          <div className="pointer-events-none absolute inset-0 text-mint/10 bubble-grid" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Build your first test in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-md text-paper/75">
              Free to start, AI-assisted from the first question, no card required.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-paper px-8 py-3.5 text-sm font-semibold text-teal-deep transition-transform hover:-translate-y-0.5 focus-ring"
            >
              Sign up free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BannerPair() {
  return (
    <section className="border-b border-line bg-paper py-20">
      <div className="mx-auto grid max-w-shell gap-6 px-6 lg:grid-cols-2">
        <div className="rounded-card border border-line bg-white p-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
              <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
              <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
              <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
            Works where your team already meets
          </h3>
          <p className="mt-3 text-ink/65">
            Assign, launch and review assessments from inside your team chat, without
            asking anyone to learn a second tool.
          </p>
          <a href="#" className="mt-5 inline-block text-sm font-semibold text-teal">
            See the integration →
          </a>
        </div>

        <div className="rounded-card border border-line bg-white p-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mint/15 text-teal-deep">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5l5.5 2v3.7c0 3.4-2.3 6.2-5.5 7.3-3.2-1.1-5.5-3.9-5.5-7.3V3.5L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
            </svg>
          </span>
          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
            Respondent data stays respondent data
          </h3>
          <p className="mt-3 text-ink/65">
            You control who sees results and for how long. We don&apos;t access personal
            data or scores, and records can be edited or deleted at any time.
          </p>
          <a href="#" className="mt-5 inline-block text-sm font-semibold text-teal">
            Read about security →
          </a>
        </div>
      </div>
    </section>
  );
}

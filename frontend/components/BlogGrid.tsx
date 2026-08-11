const posts = [
  {
    tag: "Customer stories",
    title: "How a cybersecurity training team automated badge awards",
    excerpt: "Connecting assessment results straight into a credentialing workflow, without manual review.",
    date: "Feb 2026",
    read: "2 min read",
  },
  {
    tag: "Product",
    title: "Writing a full question bank in an afternoon with AI drafting",
    excerpt: "A practical walkthrough of turning source material into a graded quiz.",
    date: "Jan 2026",
    read: "3 min read",
  },
  {
    tag: "Guides",
    title: "Designing exams that measure what you actually taught",
    excerpt: "Where question design usually goes wrong, and how to catch it before publishing.",
    date: "Dec 2025",
    read: "4 min read",
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-shell px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">From the blog</h2>
          <a href="#" className="hidden text-sm font-semibold text-teal sm:block">See all articles →</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-card border border-line bg-white p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-teal">{post.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
              <p className="mt-5 font-mono text-xs text-ink/45">{post.date} · {post.read}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Testimonial() {
  return (
    <section className="border-b border-line bg-paper py-20">
      <div className="mx-auto max-w-shell px-6">
        <div className="rounded-card border border-line bg-white p-10 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">What our users say</p>
          <blockquote className="mt-5 max-w-3xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            We needed a way to verify delivery staff knew procedure before they went out on
            the road. The test builder was simple enough that our trainers could run it
            themselves, and the reporting made it obvious where to focus retraining.
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 font-display text-sm font-semibold text-teal">
              MR
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">Marta Reyes</p>
              <p className="text-sm text-ink/55">Operations Training Lead, logistics sector</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

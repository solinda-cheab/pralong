const brands = [
  "Northwind Logistics",
  "Harborline Retail",
  "Fenwick & Co.",
  "Solace Electronics",
  "Kestrel Freight",
  "Ardent Studios",
  "Blue Anchor Hotels",
  "Marrow Analytics",
];

export default function LogoMarquee() {
  const track = [...brands, ...brands];
  return (
    <section className="border-b border-line bg-paper py-14">
      <div className="mx-auto max-w-shell px-6">
        <p className="mb-8 text-center text-sm font-medium text-ink/50">
          Teams at organizations like these run their assessments on Assessly
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="marquee-track">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="mx-8 shrink-0 font-display text-xl font-semibold tracking-tight text-ink/30"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

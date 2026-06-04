import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SCS 2026" },
      { name: "description", content: "SCS 2026 is a 12-person studio working across brand, product, and built environment." },
      { property: "og:title", content: "About — SCS 2026" },
      { property: "og:description", content: "A 12-person studio working across brand, product, and built environment." },
    ],
  }),
  component: AboutPage,
});

const capabilities = [
  ["Brand Identity", "Naming, marks, visual systems, voice."],
  ["Product Design", "Web and mobile, from zero to scale."],
  ["Architecture", "Workspaces, retail, residential interiors."],
  ["Live Experience", "Conferences, launches, exhibitions."],
];

const recognition = [
  ["D&AD", "Wood Pencil · 2025"],
  ["Brand New", "Noted · 2024, 2025"],
  ["Type Directors Club", "Certificate of Excellence · 2024"],
  ["FastCo Innovation", "Finalist · 2026"],
];

function AboutPage() {
  return (
    <>
      <section className="container-page pt-20 pb-24">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">About</div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Twelve people, four disciplines, <em className="text-primary not-italic">one room</em>.
        </h1>
        <div className="mt-12 grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            We started SCS in 2018 with a simple idea: that the best work
            comes from designers and engineers sitting at the same table.
            Eight years later, we still believe that. We're small on purpose
            and we take on a handful of projects each year.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our clients include early-stage founders, museums, hospitality
            groups, and a few household names. We're based in San Francisco
            and Lisbon, and we travel when the project calls for it.
          </p>
        </div>
      </section>

      <section className="container-page py-20 border-t border-border">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <h2 className="font-serif text-3xl">Capabilities</h2>
          <ul className="divide-y divide-border">
            {capabilities.map(([title, body]) => (
              <li key={title} className="py-6 grid md:grid-cols-[1fr_2fr] gap-4">
                <span className="font-serif text-2xl">{title}</span>
                <span className="text-muted-foreground">{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 border-t border-border">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <h2 className="font-serif text-3xl">Recognition</h2>
          <ul className="divide-y divide-border">
            {recognition.map(([title, body]) => (
              <li key={title} className="py-6 flex justify-between gap-4">
                <span className="font-serif text-2xl">{title}</span>
                <span className="text-muted-foreground text-right">{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

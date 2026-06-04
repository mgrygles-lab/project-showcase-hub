import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectMasonry } from "@/components/ProjectMasonry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCS 2026 — Selected Work" },
      { name: "description", content: "An independent studio building brand systems, products, and spaces. Selected work 2024–2026." },
      { property: "og:title", content: "SCS 2026 — Selected Work" },
      { property: "og:description", content: "An independent studio building brand systems, products, and spaces." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 6);
  return (
    <>
      <section className="container-page pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          <span className="h-px w-8 bg-muted-foreground/40" />
          Studio · est. 2018
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight max-w-5xl">
          We design <em className="text-primary not-italic">considered</em> work for companies with something to say.
        </h1>
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
            SCS is a small studio of designers, engineers, and strategists.
            Since 2018 we've shipped 84 projects across brand, product,
            architecture, and live experience — for clients you've heard of
            and clients you haven't yet.
          </div>
          <div className="flex md:justify-end items-end">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium"
            >
              <span className="border-b border-foreground/30 group-hover:border-foreground transition-colors pb-0.5">
                See all work
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-4xl">Selected · 2024 — 2026</h2>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {featured.length} projects
          </span>
        </div>
        <ProjectMasonry items={featured} />
      </section>

      <section className="container-page mt-32">
        <div className="rounded-2xl bg-surface p-10 md:p-16 grid md:grid-cols-2 gap-10 items-end">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Have a project on the horizon? <em className="text-primary not-italic">Let's talk.</em>
          </h2>
          <div className="md:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-background hover:bg-primary transition-colors"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

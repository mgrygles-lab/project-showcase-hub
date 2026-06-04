import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { ProjectMasonry } from "@/components/ProjectMasonry";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — SCS 2026" },
      { name: "description", content: "A full index of projects by SCS 2026 across brand, product, architecture, and live experience." },
      { property: "og:title", content: "Work — SCS 2026" },
      { property: "og:description", content: "A full index of projects by SCS 2026." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="container-page pt-20 pb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Index · {projects.length} projects
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl">
          Every project we've shipped, in one quiet grid.
        </h1>
      </section>
      <section className="container-page">
        <ProjectMasonry items={projects} />
      </section>
    </>
  );
}

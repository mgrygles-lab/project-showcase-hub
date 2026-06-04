import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";

export function ProjectMasonry({ items }: { items: Project[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
      {items.map((p, i) => (
        <Link
          to="/work"
          key={p.slug}
          className="group mb-6 block break-inside-avoid"
        >
          <div className="relative overflow-hidden rounded-lg bg-surface">
            <img
              src={p.image}
              alt={p.title}
              width={p.width}
              height={p.height}
              loading={i < 2 ? "eager" : "lazy"}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="mt-3 flex items-baseline justify-between gap-4">
            <div>
              <div className="font-serif text-xl leading-tight">{p.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {p.client} — {p.discipline}
              </div>
            </div>
            <div className="text-xs tabular-nums text-muted-foreground">{p.year}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

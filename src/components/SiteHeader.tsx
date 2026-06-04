import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl leading-none">SCS</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">2026</span>
        </Link>
        <nav className="flex items-center gap-7 text-sm">
          <Link to="/" activeOptions={{ exact: true }} className="text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground">Index</Link>
          <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground">Work</Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors [&.active]:text-foreground">About</Link>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-foreground px-4 py-1.5 text-background hover:bg-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

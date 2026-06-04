export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-serif text-2xl">SCS 2026</div>
          <p className="text-muted-foreground mt-2 max-w-xs">
            A studio of designers, engineers, and strategists building things that last.
          </p>
        </div>
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Studio</div>
          <div>hello@scs2026.com</div>
          <div>+1 (415) 555 0123</div>
          <div>San Francisco · Lisbon</div>
        </div>
        <div className="space-y-1 md:text-right">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Index</div>
          <div>01 — Selected work</div>
          <div>02 — Capabilities</div>
          <div>03 — Recognition</div>
        </div>
      </div>
      <div className="container-page pb-8 flex justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} SCS 2026</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}

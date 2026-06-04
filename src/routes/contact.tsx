import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SCS 2026" },
      { name: "description", content: "Start a project with SCS 2026. We respond within two business days." },
      { property: "og:title", content: "Contact — SCS 2026" },
      { property: "og:description", content: "Start a project with SCS 2026." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-page pt-20 pb-32">
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Contact</div>
      <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl">
        Tell us what you're <em className="text-primary not-italic">building</em>.
      </h1>

      <div className="mt-16 grid lg:grid-cols-[2fr_1fr] gap-16">
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch within two business days.");
          }}
        >
          <Field label="Your name">
            <input required type="text" className="input" placeholder="Jane Doe" />
          </Field>
          <Field label="Email">
            <input required type="email" className="input" placeholder="jane@company.com" />
          </Field>
          <Field label="Company">
            <input type="text" className="input" placeholder="Optional" />
          </Field>
          <Field label="Tell us about the project">
            <textarea required rows={6} className="input resize-none" placeholder="Scope, timing, anything we should know…" />
          </Field>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-background hover:bg-primary transition-colors"
          >
            Send inquiry →
          </button>
        </form>

        <aside className="space-y-10 text-sm">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Direct</div>
            <div className="font-serif text-2xl">hello@scs2026.com</div>
            <div className="text-muted-foreground mt-1">+1 (415) 555 0123</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Studios</div>
            <div>San Francisco · 388 Folsom St.</div>
            <div>Lisbon · Rua da Boavista 84</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Press</div>
            <div className="text-muted-foreground">press@scs2026.com</div>
          </div>
        </aside>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--color-border);
          padding: 0.75rem 0;
          font: inherit;
          color: inherit;
          outline: none;
          transition: border-color .2s;
        }
        .input:focus { border-color: var(--color-primary); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

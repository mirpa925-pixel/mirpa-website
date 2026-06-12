import { Boxes, Landmark, Lightbulb, Handshake, Recycle } from "lucide-react"

const OPERATIONS = [
  {
    icon: Boxes,
    title: "Strategic Procurement & Supply Solutions",
  },
  {
    icon: Landmark,
    title: "Government & Institutional Contracting Services",
  },
  {
    icon: Lightbulb,
    title: "Enterprise Development & Opportunity Creation",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships & Business Growth Initiatives",
  },
  {
    icon: Recycle,
    title: "Sustainable & Circular Economy Ventures",
  },
]

export function CoreOperations() {
  return (
    <section
      id="operations"
      className="border-b border-border bg-secondary"
      aria-labelledby="operations-header"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-primary" aria-hidden="true" />
          <h2
            id="operations-header"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Core Operations
          </h2>
        </div>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {OPERATIONS.map(({ icon: Icon, title }, index) => (
            <article
              key={title}
              className="group flex flex-col justify-between bg-card p-8 transition-colors hover:bg-accent/40"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-base font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <span className="mt-6 text-xs font-mono text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / 05
              </span>
            </article>
          ))}
          <div className="hidden items-center bg-card p-8 lg:flex">
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Operating across diverse sectors with professionalism, compliance,
              and a commitment to long-term value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

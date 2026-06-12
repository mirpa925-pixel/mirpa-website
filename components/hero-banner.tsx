export function HeroBanner() {
  return (
    <section
      id="top"
      className="border-b border-border bg-background"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Private Limited &middot; Startup India &middot; MSME
        </p>
        <h1
          id="hero-title"
          className="text-balance text-4xl font-bold uppercase tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Mirpa Enterprises
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building Sustainable, Circular Infrastructure For Tomorrow.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#operations"
            className="w-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:opacity-90 sm:w-auto"
          >
            Our Operations
          </a>
          <a
            href="#about"
            className="w-full border border-border px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

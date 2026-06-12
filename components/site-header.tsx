export function SiteHeader() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Operations", href: "#operations" },
    { label: "Connect", href: "#connect" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
        >
          Mirpa
          <span className="ml-2 inline-block h-2 w-2 align-middle bg-primary" aria-hidden="true" />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#connect"
          className="bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:opacity-90"
        >
          Get in Touch
        </a>
      </div>
    </header>
  )
}

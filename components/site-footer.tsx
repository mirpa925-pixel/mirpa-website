export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
          Mirpa Enterprises
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Mirpa Enterprises Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

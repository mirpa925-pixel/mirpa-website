const PARAGRAPHS = [
  "An enterprise established with the vision of creating businesses, unlocking opportunities, and driving sustainable economic growth. Incorporated as a Private Limited Company and recognized under the Startup India initiative with MSME registration, the organization is built on the principles of entrepreneurship, innovation, and responsible business practices. It is committed to identifying emerging opportunities, facilitating procurement solutions, and fostering strategic partnerships that create long-term value for stakeholders.",
  "With a focus on sustainable development and inclusive progress, the enterprise seeks to support institutions, industries, and communities through efficient execution, collaborative engagement, and forward-thinking initiatives. By combining entrepreneurial ambition with a structured and compliant business framework, the organization is positioned to pursue opportunities across diverse sectors while maintaining the highest standards of professionalism and integrity.",
  "Driven by the belief that meaningful growth is achieved through innovation and opportunity creation, the enterprise aims to serve as a catalyst for new ventures, economic participation, and responsible enterprise development. Through strategic partnerships, operational excellence, and a commitment to long-term value creation, it strives to contribute to a business ecosystem that encourages resilience, sustainability, and shared prosperity, creating a lasting positive impact for communities, institutions, and industry.",
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-border bg-background"
      aria-labelledby="about-header"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-primary" aria-hidden="true" />
          <h2
            id="about-header"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
          >
            About
          </h2>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {PARAGRAPHS.map((paragraph, index) => (
            <article key={index} className="bg-card p-8 md:p-10">
              <span className="mb-6 block text-sm font-mono font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty text-sm leading-relaxed text-foreground/80 [text-align:justify]">
                {paragraph}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

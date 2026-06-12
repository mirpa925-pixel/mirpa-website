"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="connect"
      className="border-b border-border bg-background"
      aria-labelledby="connect-header"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-px w-12 bg-primary" aria-hidden="true" />
          <h2
            id="connect-header"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Connect With Us
          </h2>
        </div>

        <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
          {/* Left column: contact details */}
          <div className="bg-card p-8 md:p-12">
            <ul className="flex flex-col gap-10">
              <li>
                <div className="flex items-center gap-3 text-primary">
                  <Mail className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Email
                  </span>
                </div>
                <a
                  href="mailto:mail@mirpa.in"
                  className="mt-3 block text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  mail@mirpa.in
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                    Location
                  </span>
                </div>
                <p className="mt-3 text-lg font-medium text-foreground">
                  Ladakh, India
                </p>
              </li>
            </ul>
          </div>

          {/* Right column: form */}
          <div className="bg-card p-8 md:p-12">
            {submitted ? (
              <div className="flex h-full min-h-48 flex-col items-start justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Message Received
                </p>
                <p className="mt-3 text-base text-foreground/80">
                  Thank you for reaching out. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="resize-none border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

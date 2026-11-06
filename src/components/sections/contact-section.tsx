"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react"
import { Skyline } from "@/components/ui/skyline"
import { SITE } from "@/lib/site"

const inputClass =
  "w-full rounded-xl border border-[hsl(var(--field))] bg-background px-4 py-3.5 text-lg text-foreground placeholder:text-muted-foreground focus:border-lamp focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // No backend: open the visitor's mail client with the message prefilled
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`)
    const body = encodeURIComponent(`${formData.message}\n\n${formData.name} (${formData.email})`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`

    toast.success("Opening your email app", {
      description: "Press send there to deliver your message.",
    })
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="section-pad relative isolate overflow-hidden border-t border-border/60">
      {/* The signal, lit once more */}
      <div
        className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[34rem] w-[70rem] max-w-none -translate-x-1/2 rounded-[50%] opacity-60"
        style={{ background: "radial-gradient(closest-side, hsl(41 100% 52% / 0.16), transparent 75%)" }}
        aria-hidden="true"
      />

      <Skyline className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(5rem,14vw,11rem)] w-full opacity-80" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="section-heading curtain">Get in touch</h2>
        <p className="rise mt-6 max-w-[48ch] text-lg leading-[1.75] text-muted-foreground sm:text-xl">
          Hiring for ML, AI or data engineering in Ireland? Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className="signal-link rise mt-9 block w-fit max-w-full font-sans text-[clamp(1.1rem,3.1vw,2.65rem)] font-semibold leading-[1.35] tracking-[-0.035em] text-foreground [overflow-wrap:anywhere]"
        >
          {SITE.email}
        </a>
        <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost rise mt-6 inline-flex rounded-sm uppercase tracking-[0.12em]">Download Resume <ArrowUpRight size={17} /></a>

        <div className="mt-20 grid gap-14 lg:grid-cols-12 lg:gap-20">
          <ul className="rise space-y-5 text-xl lg:col-span-5">
            <li>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="signal-link inline-flex items-center gap-3 text-muted-foreground"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                {SITE.linkedinLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="signal-link inline-flex items-center gap-3 text-muted-foreground"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                {SITE.githubLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              {SITE.location}
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="rise space-y-6 rounded-[2rem] border border-border bg-card/70 p-7 sm:p-10 lg:col-span-7">
            <div>
              <label htmlFor="name" className="mb-2 block text-base text-muted-foreground">
                Your name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-base text-muted-foreground">
                Your email
              </label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-base text-muted-foreground">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-none`} value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-signal w-full text-lg">
              Open in my email app
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

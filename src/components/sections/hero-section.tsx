"use client"

import { useState } from "react"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Skyline } from "@/components/ui/skyline"
import { SITE } from "@/lib/site"

export function HeroSection() {
  const [spot, setSpot] = useState({ x: 30, y: 45 })
  const [hasPointer, setHasPointer] = useState(false)
  function moveSpot(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return
    const rect = event.currentTarget.getBoundingClientRect()
    setSpot({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 })
    setHasPointer(true)
  }

  return (
    <section id="home" onPointerMove={moveSpot} onPointerLeave={() => setHasPointer(false)} className="hero-haze relative isolate flex min-h-[min(900px,100svh)] items-center overflow-hidden border-b border-border/50 px-5 pb-36 pt-28 sm:px-8 lg:px-12">
      <div className="haze-drift" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: `radial-gradient(ellipse 34rem 30rem at ${spot.x}% ${spot.y}%, hsl(var(--glow) / .18), transparent 70%)` }} />
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-6xl">
          <p className="intro-1 mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-primary"><span className="signal-dot" /> Dublin, Ireland <span className="text-muted-foreground">/</span> Available for opportunities</p>
          <div className="name-stage" data-pointer={hasPointer ? "true" : "false"} style={{ "--lx": `${spot.x}%`, "--ly": `${spot.y}%` } as React.CSSProperties}>
            <h1 className="name-base display intro-name uppercase">Devesh<br />Shetty</h1>
            <div className="name-lit display uppercase" aria-hidden="true">Devesh<br />Shetty</div>
          </div>
          <div className="intro-2 mt-8 max-w-2xl">
            <h2 className="max-w-[34ch] font-sans text-[clamp(1rem,1.8vw,1.3rem)] font-semibold leading-[1.5] tracking-[0.035em] text-foreground/90">Machine Learning · AI · Data Engineering</h2>
            <p className="mt-5 max-w-[58ch] text-[1.05rem] leading-[1.85] text-muted-foreground sm:text-lg">I build production data and AI systems — from distributed pipelines processing 60M+ records to applied GenAI workflows used in banking.</p>
          </div>
          <div className="intro-3 mt-9 flex flex-wrap items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="btn-signal rounded-sm uppercase tracking-[0.12em]"><Mail size={17} /> Email me</a>
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost rounded-sm uppercase tracking-[0.12em]">Download Resume <Download size={17} /></a>
          </div>
          <div className="intro-3 mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>MSc Computer Science · UCD</span><span>5+ years engineering experience</span><span>Open to Ireland / Europe</span>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[clamp(9rem,23vw,16rem)] opacity-90"><Skyline className="h-full w-full" /></div>
      <a href="#about" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"><span>Scroll to explore</span><ArrowDown size={15} /></a>
    </section>
  )
}

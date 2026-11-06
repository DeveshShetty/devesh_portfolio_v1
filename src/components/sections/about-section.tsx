import Image from "next/image"
import { ArrowUpRight, GraduationCap } from "lucide-react"
import { SITE } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="about" className="section-pad border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="section-heading curtain">About Devesh</h2>
        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,.65fr)] lg:gap-20">
          <div className="rise">
            <p className="max-w-[66ch] text-[1.2rem] leading-[1.8] tracking-[-0.02em] text-foreground/90 sm:text-[1.45rem]">I&apos;m an engineer working across <span className="text-primary">distributed data systems</span> and <span className="text-primary">applied machine learning</span>. Over the past five years, I&apos;ve built and improved production systems for banking and enterprise teams — with a focus on measurable outcomes, reliable pipelines and practical AI.</p>
            <p className="mt-7 max-w-[66ch] text-[1.02rem] leading-[1.9] text-muted-foreground sm:text-lg">My work spans large-scale ETL, data quality automation, predictive modelling, computer vision and LLM-powered workflows. I enjoy taking a problem from raw data and experimentation through to a system people can actually use.</p>
            <div className="mt-10 flex flex-wrap gap-5"><a href={SITE.linkedin} target="_blank" rel="noreferrer" className="signal-link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">LinkedIn <ArrowUpRight size={15}/></a><a href={SITE.github} target="_blank" rel="noreferrer" className="signal-link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">GitHub <ArrowUpRight size={15}/></a></div>
          </div>
          <aside className="rise overflow-hidden rounded-sm border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary"><Image src="/images/devesh.jpg" alt="Portrait of Devesh Shetty" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 35vw" /></div>
            <div className="p-6 sm:p-7"><div className="flex items-center gap-3"><GraduationCap className="text-primary" size={21}/><h3 className="display text-xl uppercase tracking-wide">MSc Computer Science</h3></div><p className="mt-2 text-muted-foreground">University College Dublin · 2026–2027</p><div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5"><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Based in</p><p className="mt-1 font-semibold">{SITE.location}</p></div><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Focus</p><p className="mt-1 font-semibold">ML · AI · Data</p></div></div></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

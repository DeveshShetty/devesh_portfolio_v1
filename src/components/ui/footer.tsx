import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { SITE } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:px-8 md:flex-row lg:px-12">
        <p className="text-base text-muted-foreground">
          &copy; {currentYear} Devesh Shetty · Dublin, Ireland
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn-icon">
            <Github size={20} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn-icon">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email" className="btn-icon">
            <Mail size={20} />
          </a>
          <a href="#home" aria-label="Back to top" className="btn-icon">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

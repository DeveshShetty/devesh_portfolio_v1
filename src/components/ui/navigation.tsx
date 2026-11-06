"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { SITE } from "@/lib/site"

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
]

export function Navigation() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = document.documentElement.dataset.theme
    if (saved === "light" || saved === "dark") setTheme(saved)
  }, [])

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark"
    document.documentElement.dataset.theme = next
    try { localStorage.setItem("theme", next) } catch {}
    setTheme(next)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/75 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="display text-lg tracking-[0.12em] text-foreground" aria-label={`${SITE.name}, home`}>DS<span className="text-primary">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} className="nav-item text-xs uppercase tracking-[0.16em]" href={href}>{label}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={toggleTheme} className="btn-icon !h-9 !w-9" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={`mailto:${SITE.email}`} className="hidden rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">Let&apos;s talk</a>
          <button type="button" className="btn-icon !h-9 !w-9 md:hidden" onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {menuOpen && <div className="border-t border-border bg-background/95 px-6 py-5 md:hidden"><div className="flex flex-col gap-5">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="display text-2xl uppercase tracking-wide">{label}</a>)}<a href={SITE.resume} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="display text-2xl uppercase tracking-wide text-primary">Download Resume ↗</a></div></div>}
    </header>
  )
}

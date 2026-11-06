"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "ML / AI Engineer",
    company: "MindCraft Software Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Apr 2025 - Sep 2026",
    description: [
      "Built the GEM predictive transition model with XGBoost over 10-15 financial indicators to identify corporate accounts likely to move into top-tier revenue segments within 6-8 months.",
      "Cut inference costs by ~60-80% by migrating production workloads from Claude 3.5 Sonnet to Gemini 3.5 Flash while keeping 95% extraction accuracy across ~108 unstructured legal/property parameters.",
      "Scaled QA coverage to 100% of calls across 3 bank departments with a hybrid audio + transcript evaluation pipeline, replacing manual reviews.",
      "Automated classification across 26 service topics, routing thousands of daily banking requests through a 4-stage Vertex AI Gemini pipeline with cross-model hallucination elimination.",
      "Engineered the APL ETL feature pipeline across ~4,500 corporate clients (facility data, CIBIL/Experian bureau feeds, competitor outflows) to generate dynamic pitch scripts for RMs.",
      "Standardized multi-lingual operations across regional languages using native Gemini zero-shot detection and translation."
    ],
    skills: ["XGBoost", "Gemini", "Vertex AI", "LLMs", "Python", "GCP"]
  },
  {
    title: "Big Data Engineer",
    company: "MindCraft Software Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Apr 2025 - Sep 2026",
    description: [
      "Eliminated 100+ manual hours per month with an automated Python + Apache Airflow ETL pipeline feeding auto-refreshing Tableau dashboards.",
      "Consolidated 60M+ records across 30+ disparate sources into a unified data foundation using PySpark and SQL.",
      "Enforced data integrity at scale with 50+ automated validation rules flagging pass/fail against business logic in real time."
    ],
    skills: ["PySpark", "Airflow", "SQL", "Tableau", "Python"]
  },
  {
    title: "Software Developer, Big Data",
    company: "Tata Consultancy Services",
    location: "Mumbai, India",
    period: "Oct 2021 - Aug 2024",
    description: [
      "Refactored legacy backend systems for a global retail consumer-analytics provider into Python, gaining 44% performance and enabling an Azure cloud migration.",
      "Led ETL pipeline design (Talend, Hive, Hadoop) for the Central Bank of India, cutting data processing time by 50%.",
      "Automated data transformation with PySpark, achieving a 73% efficiency boost across key banking operations.",
      "Designed data models for the SAARC & Survey module in a large-scale banking data migration.",
      "Built a transformation script that cut a 3-month migration to 10 minutes (99%+), earning TCS's Contextual Master Award."
    ],
    skills: ["Python", "PySpark", "Talend", "Hive", "Hadoop", "Azure"]
  },
  {
    title: "Research & Development Intern, ML & DL",
    company: "C-DAC",
    location: "Mumbai, India",
    period: "Apr 2020 - Mar 2021",
    description: [
      "Developed a deep learning model using MobileNet transfer learning for training and Mask R-CNN for image segmentation.",
      "Collected and annotated 40k+ images via web scraping (Beautiful Soup) and wrote Python scripts to extract regions from JSON annotations."
    ],
    skills: ["Deep Learning", "Mask R-CNN", "MobileNet", "Python"]
  },
  {
    title: "Web Developer",
    company: "NUIT Solutions",
    location: "Thane, India",
    period: "Apr 2021 - Jul 2021",
    description: [
      "Built a CRM, a Virtual Office and a custom task management app with PHP, MySQL and Bootstrap.",
      "Integrated APIs such as Maps and built a team management portal that raised productivity by 30%."
    ],
    skills: ["PHP", "MySQL", "Bootstrap", "JavaScript"]
  }
]

const VISIBLE = 3
// Figures worth lighting up: percentages, counts with + or M/k suffix, ranges with a percent
const METRIC = /(~?\d[\d,.]*(?:-\d+)?(?:%|\+|M\+|k\+))/g

function Highlighted({ text }: { text: string }) {
  const parts = text.split(METRIC)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="metric tabular">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

function Role({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(false)
  const extra = exp.description.length - VISIBLE
  const listId = `exp-${index}-more`

  return (
    <li id={`exp-${index}`} className="grid gap-8 border-t border-border/60 py-16 md:grid-cols-[minmax(0,15rem)_1fr] md:gap-16 lg:py-24">
      <div className="rise h-fit md:sticky md:top-28">
        <p className="text-xl font-semibold text-foreground tabular">{exp.period}</p>
        <p className="mt-1 text-lg text-muted-foreground">{exp.location}</p>
      </div>

      <div>
        <h3 className="display rise text-[clamp(2.5rem,6vw,5.25rem)] text-foreground">{exp.title}</h3>
        <p className="rise mt-3 text-xl font-semibold text-primary sm:text-2xl">{exp.company}</p>

        <ul id={listId} className="mt-10 max-w-[64ch] space-y-6">
          {exp.description.map((line, i) => (
            <li
              key={line}
              hidden={i >= VISIBLE && !open}
              className="rise text-lg leading-relaxed text-foreground/90 sm:text-xl"
            >
              <Highlighted text={line} />
            </li>
          ))}
        </ul>

        {extra > 0 && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((o) => !o)}
            className="signal-link mt-8 inline-flex items-center gap-2 text-base font-semibold text-foreground"
          >
            {open ? "Show less" : `Show ${extra} more`}
            <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
          </button>
        )}

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Skills used">
          {exp.skills.map((skill) => (
            <li key={skill} className="chip !px-3.5 !py-1.5 !text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="section-heading curtain">Experience</h2>

        <ol className="mt-14 lg:mt-20">
          {experiences.map((exp, i) => (
            <Role key={`${exp.company}-${exp.title}`} exp={exp} index={i} />
          ))}
        </ol>
      </div>
    </section>
  )
}

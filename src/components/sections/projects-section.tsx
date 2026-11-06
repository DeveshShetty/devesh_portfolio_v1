"use client"

import { ArrowUpRight, Plus } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string[]
  skills: string[]
  tools: string[]
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "banking-genai",
    title: "GenAI Call QA & Classification Pipeline",
    shortDescription: "Gemini pipelines scoring 100% of bank calls and routing thousands of requests daily",
    fullDescription: [
      "Engineered a hybrid audio + transcript evaluation pipeline on Gemini 3.5 Flash, scaling QA coverage to 100% of calls across 3 bank departments.",
      "Built a 4-stage Vertex AI Gemini pipeline that classifies requests into 26 service topics with cross-model hallucination elimination.",
      "Migrated production workloads from Claude 3.5 Sonnet to Gemini 3.5 Flash, cutting inference cost by ~60-80% at 95% extraction accuracy."
    ],
    skills: ["GenAI", "LLM Evaluation", "Cost Optimization", "NLP"],
    tools: ["Vertex AI", "Gemini", "Python"]
  },
  {
    id: "gem-model",
    title: "GEM Predictive Transition Model",
    shortDescription: "XGBoost model flagging corporate accounts ready to move into top-tier revenue segments",
    fullDescription: [
      "Modeled 10-15 financial indicators (CASA growth velocity, turnover trends, digital footprint) to predict segment transitions over a 6-8 month horizon.",
      "Built the APL ETL feature pipeline over ~4,500 corporate clients, joining facility data, CIBIL/Experian bureau feeds and competitor outflows.",
      "Used the outputs to generate dynamic pitch scripts for relationship managers."
    ],
    skills: ["Predictive Modeling", "Feature Engineering", "ETL"],
    tools: ["XGBoost", "PySpark", "Gemini"]
  },
  {
    id: "covid-monitoring",
    title: "Video-Based COVID-19 Monitoring System",
    shortDescription: "Deep learning system detecting masks and social distancing from video",
    fullDescription: [
      "Built a system that detects whether people wear masks (and which type) and maintain social distancing.",
      "Collected 40k+ images with Beautiful Soup and created JSON annotations plus a Python script to extract regions.",
      "Trained MobileNetV2 models, improving processing by 20%, and used Mask R-CNN to segment and highlight regions.",
      "Published as a paper: Video-Based COVID-19 Monitoring System."
    ],
    
    skills: ["Computer Vision", "Deep Learning", "Web Scraping"],
    tools: ["Python", "MobileNetV2", "Mask R-CNN", "TensorFlow"]
  },
  {
    id: "ott-prediction",
    title: "Predictive Analysis of Movies on OTT Platforms",
    shortDescription: "Published research predicting movie ratings with R and ML algorithms",
    fullDescription: [
      "Analyzed and predicted movie ratings across OTT platforms from multiple factors.",
      "Cleaned the data and visualized it with ggplot and dplyr, then applied Multiple Linear Regression and Random Forest.",
      "Published in the International Journal of Advance and Innovative Research, Vol. 8, Issue 4 (IX), Oct-Dec 2021, ISSN 2394-7780."
    ],
    
    skills: ["Regression", "Random Forest", "Data Visualization", "Research"],
    tools: ["R", "ggplot", "dplyr"]
  },
  {
    id: "playstore-analysis",
    title: "Play Store App Data Analysis",
    shortDescription: "ML classifier predicting whether an app will be a hit or a miss",
    fullDescription: [
      "Modeled a system that classifies whether an app will succeed using Linear Regression, Decision Tree, SVM and K-means.",
      "Preprocessed the data with Pandas and Seaborn and built the GUI from scratch in Tkinter.",
      "Added sentiment analysis of user comments using K-means clustering."
    ],
    
    skills: ["Classification", "Sentiment Analysis", "Clustering"],
    tools: ["Python", "Pandas", "Seaborn", "Tkinter"]
  }
]

// What kind of work each project was
const kind: Record<string, string> = {
  "banking-genai": "Production · MindCraft",
  "gem-model": "Banking · MindCraft",
  "covid-monitoring": "Published · C-DAC",
  "ott-prediction": "Published · IJAIR 2021",
  "playstore-analysis": "Internship · Cyberace",
}

// The two flagship projects take half the row each; the rest share the next row in thirds.
const span = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"]

// The card is lit where the pointer is
const follow = (e: React.PointerEvent<HTMLElement>) => {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty("--mx", `${e.clientX - r.left}px`)
  el.style.setProperty("--my", `${e.clientY - r.top}px`)
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="section-heading curtain">Projects</h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6">
          {projects.map((project, i) => {
            const flagship = i < 2
            return (
              <div key={project.id} className={cn("rise", span[i] ?? "lg:col-span-2")}>
                <Sheet>
                  <SheetTrigger asChild>
                    <button
                      type="button"
                      onPointerMove={follow}
                      className={cn("spot group flex h-full w-full flex-col gap-5 p-7 text-left", flagship ? "min-h-[22rem] sm:p-10" : "min-h-[19rem]")}
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className={cn("display text-foreground", flagship ? "text-[clamp(2.25rem,4.4vw,3.75rem)]" : "text-[clamp(1.9rem,2.8vw,2.5rem)]")}>
                          {project.title}
                        </span>
                        <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-90 group-hover:border-lamp/60 group-hover:text-lamp">
                          <Plus className="h-5 w-5" aria-hidden="true" />
                          <span className="sr-only">Open project details</span>
                        </span>
                      </span>
                      <span className={cn("leading-relaxed text-muted-foreground", flagship ? "max-w-[34ch] text-xl" : "text-lg")}>
                        {project.shortDescription}
                      </span>
                      <span className="mt-auto flex items-center gap-2.5 text-base text-muted-foreground">
                        <span className={cn("h-2 w-2 rounded-full", flagship ? "bg-lamp shadow-[0_0_10px_hsl(var(--lamp))]" : "bg-muted-foreground/60")} aria-hidden="true" />
                        {kind[project.id]}
                      </span>
                      <span className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span key={tool} className="chip">
                            {tool}
                          </span>
                        ))}
                      </span>
                    </button>
                  </SheetTrigger>

                  <SheetContent className="w-full overflow-y-auto border-border bg-background sm:max-w-xl">
                    <SheetHeader>
                      <SheetTitle className="display text-4xl leading-[0.92] text-foreground">{project.title}</SheetTitle>
                      <SheetDescription className="text-base">{kind[project.id]}</SheetDescription>
                    </SheetHeader>

                    <ul className="mt-8 space-y-5">
                      {project.fullDescription.map((line) => (
                        <li key={line} className="text-lg leading-relaxed text-foreground/90">
                          {line}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills and tools">
                      {[...project.skills, ...project.tools].map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>

                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-10 text-lg">
                        View on GitHub
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    )}
                  </SheetContent>
                </Sheet>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  description: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", description: "ML models, data pipelines, automation and Flask services" },
      { name: "SQL / HQL", description: "Complex queries and optimization on Oracle, Hive and warehouses" },
      { name: "Java", description: "Core application development" },
      { name: "R", description: "Statistical analysis, visualization and predictive modeling" },
      { name: "C", description: "Systems programming fundamentals" },
    ]
  },
  {
    category: "ML, Deep Learning & GenAI",
    skills: [
      { name: "TensorFlow / Keras", description: "CNNs, transfer learning and segmentation models" },
      { name: "Scikit-learn / XGBoost", description: "Classical ML and gradient-boosted predictive models" },
      { name: "LLMs: Gemini, Claude", description: "Production extraction, classification and evaluation pipelines" },
      { name: "Vertex AI", description: "Multi-stage Gemini pipelines on Google Cloud" },
      { name: "Computer Vision", description: "Mask R-CNN, MobileNet, annotation and segmentation workflows" },
      { name: "NLP", description: "Text classification, sentiment analysis and translation" },
    ]
  },
  {
    category: "Big Data & ETL",
    skills: [
      { name: "PySpark", description: "Large-scale distributed transformation and ETL" },
      { name: "Apache Airflow", description: "Scheduling and orchestrating data pipelines" },
      { name: "Hadoop / Hive", description: "Warehouse infrastructure for big data analytics" },
      { name: "Talend", description: "Enterprise data integration and ETL design" },
      { name: "Oracle DB", description: "Enterprise relational database management" },
    ]
  },
  {
    category: "Cloud Technologies",
    skills: [
      { name: "Azure", description: "Cloud migration and data services, DP-900 certified" },
      { name: "GCP", description: "Vertex AI and Gemini-based production workloads" },
    ]
  },
  {
    category: "Web & Tools",
    skills: [
      { name: "Flask", description: "Lightweight Python APIs and model serving" },
      { name: "HTML / CSS / JavaScript", description: "Front-end development" },
      { name: "PHP / MySQL", description: "Backend web development" },
      { name: "Git / GitHub / Bitbucket", description: "Version control and collaboration" },
      { name: "Tableau", description: "Auto-refreshing dashboards for business reporting" },
      { name: "JIRA", description: "Agile project tracking" },
    ]
  }
]

export function SkillsSection() {
  const [active, setActive] = useState(skillsData[0].category)

  return (
    <section id="skills" className="section-pad border-t border-border/60">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="section-heading curtain">Skills</h2>

        <Tabs value={active} onValueChange={setActive} orientation="vertical" className="rise mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20">
          <TabsList className="flex h-auto flex-col items-stretch justify-start gap-1 bg-transparent p-0">
            {skillsData.map((cat) => (
              <TabsTrigger
                key={cat.category}
                value={cat.category}
                className="display group flex items-center justify-start gap-0 whitespace-normal rounded-xl bg-transparent px-0 py-3 text-left leading-[0.98] text-[clamp(1.65rem,3vw,2.55rem)] text-foreground/40 shadow-none transition-colors hover:text-foreground/80 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                <span
                  aria-hidden="true"
                  className="h-[3px] w-0 flex-none rounded-full bg-lamp shadow-[0_0_12px_hsl(var(--lamp))] transition-[width] duration-500 ease-out group-data-[state=active]:mr-4 group-data-[state=active]:w-8"
                />
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillsData.map((cat) => (
            <TabsContent
              key={cat.category}
              value={cat.category}
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-3 data-[state=active]:duration-500 lg:min-h-[28rem]"
            >
              <dl className="grid gap-x-14 gap-y-9 sm:grid-cols-2">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <dt className="text-2xl font-semibold text-foreground">{skill.name}</dt>
                    <dd className="mt-1.5 text-lg leading-relaxed text-muted-foreground">{skill.description}</dd>
                  </div>
                ))}
              </dl>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

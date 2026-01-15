import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "FinanceFlow",
    category: "Web Development",
    description:
      "A comprehensive financial management platform for modern businesses with real-time analytics and reporting.",
    image: "/FinanceFlow1.webp",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthConnect",
    category: "App Development",
    description:
      "Mobile health application connecting patients with healthcare providers through telemedicine solutions.",
    image: "/Health_connect.webp",
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    title: "Starvent Entertainments",
    category: "Web Development",
    description:
      "Starvent Entertainment is a premium event production and experiential management company, delivering unforgettable weddings, corporate MICE events, social celebrations, and live entertainment experiences.",
    image: "/Starvent.webp",
    tags: ["Next.js", "AI/ML", "AWS"],
  },
  {
    title: "EDULearn",
    category: "Quality Assurance",
    description: "Complete QA overhaul for a major educational platform, reducing bugs by 80% and improving load times.",
    image: "/EDULearn.webp",
    tags: ["Selenium", "Jest", "Cypress"],
  },
  {
    title: "LogiTrack",
    category: "App Development",
    description: "Fleet management and logistics tracking application for enterprise transportation companies.",
    image: "/Logitrack.webp",
    tags: ["Flutter", "Google Maps", "Real-time"],
  },
  {
    title: "CloudMigrate",
    category: "Cloud Solutions",
    description: "Enterprise cloud migration project moving legacy systems to a modern AWS infrastructure.",
    image: "/Cloud.webp",
    tags: ["AWS", "Terraform", "Docker"],
  },
]

const categories = ["All", "Web Development", "App Development", "Quality Assurance", "Cloud Solutions"]

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our work speaks for itself.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our collection of successful projects that have helped businesses transform and grow through
              innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-background rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="p-6">
                  <p className="text-primary text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to start your project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us turn your vision into reality. Contact us to discuss your next big idea.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Smartphone, Shield, Cpu, Database, Cloud, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    id: "web",
    icon: Code,
    title: "Web Development",
    description:
      "We build scalable, responsive, and high-performance web applications using modern technologies and frameworks.",
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "CMS development and integration",
      "API development and integration",
      "Performance optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS and Android native development",
      "Cross-platform development with React Native",
      "Mobile UI/UX design",
      "App store optimization",
      "Push notifications and analytics",
      "Offline functionality",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Flutter", "Firebase"],
  },
  {
    id: "qa",
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and QA services to ensure your software meets the highest standards of quality and reliability.",
    features: [
      "Manual testing",
      "Automated testing",
      "Performance testing",
      "Security testing",
      "Usability testing",
      "Regression testing",
    ],
    technologies: ["Selenium", "Cypress", "Jest", "Playwright", "JMeter"],
  },
  {
    id: "consulting",
    icon: Cpu,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions and drive digital transformation.",
    features: [
      "Technology strategy development",
      "Digital transformation roadmap",
      "Architecture consulting",
      "Technology stack assessment",
      "Process optimization",
      "Team augmentation",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    id: "data",
    icon: Database,
    title: "Data & Analytics",
    description:
      "Unlock the immense potential of data, AI, and analytics to ensure your organization is fit for the digital future.",
    features: [
      "Data strategy development",
      "Business intelligence solutions",
      "Machine learning integration",
      "Data visualization",
      "ETL pipeline development",
      "Data warehousing",
    ],
    technologies: ["Python", "TensorFlow", "Tableau", "Power BI", "Snowflake"],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure solutions to power your business operations.",
    features: [
      "Cloud migration",
      "Infrastructure as Code",
      "DevOps implementation",
      "CI/CD pipeline setup",
      "Monitoring and alerting",
      "Cost optimization",
    ],
    technologies: ["AWS", "Azure", "Terraform", "GitHub Actions", "Vercel"],
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our collection of tech services spans various needs at every stage.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore how we help businesses transform through technology, innovation, and human-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="gap-2">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
                <div className={`aspect-video bg-secondary rounded-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className="w-full h-full rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/Servises.png')`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to transform your business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us discuss how we can help you achieve your technology goals and drive meaningful growth.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

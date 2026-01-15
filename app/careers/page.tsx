import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Coffee, Laptop, Plane, GraduationCap, Users } from "lucide-react"

const openPositions = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    description:
      "Join our engineering team to build cutting-edge web applications using React, Next.js, and TypeScript.",
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Design and implement scalable backend services using Node.js, Python, and cloud technologies.",
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create exceptional mobile experiences using React Native and native iOS/Android development.",
  },
  {
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Remote / Austin",
    type: "Full-time",
    description: "Ensure software quality through manual and automated testing across web and mobile platforms.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / New York",
    type: "Full-time",
    description: "Create beautiful, user-centric designs that solve complex problems and delight users.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain CI/CD pipelines, cloud infrastructure, and monitoring systems.",
  },
]

const benefits = [
  {
    icon: Laptop,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours that fit your lifestyle.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge. We trust you to manage your schedule.",
  },
  {
    icon: Coffee,
    title: "Home Office Setup",
    description: "$1,500 stipend to create your perfect home workspace.",
  },
  {
    icon: Users,
    title: "Team Retreats",
    description: "Annual company retreats to connect with teammates around the world.",
  },
]

export default function CareersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Careers</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Want to be a techie too?
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are the tech artisans of Perfionix – a leading technology company helping countless organizations
                succeed in their digital transformation journey.
              </p>
              <Button size="lg" asChild className="gap-2">
                <a href="#positions">
                  View Open Positions
                  <ArrowRight size={18} />
                </a>
              </Button>
            </div>
            <div
              className="aspect-[4/3] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/Career.png')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why work with us?</h2>
            <p className="text-muted-foreground">
              We believe in creating an environment where talented people can do their best work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 bg-background rounded-lg border border-border">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              In our collective, there is always room for more people with that delicious combination of nerdiness and
              infectious energy.
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <article
                key={position.title}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button asChild className="shrink-0 gap-2">
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Do not see the right role?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals. Send us your resume and we will reach out when we have a
            matching opportunity.
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

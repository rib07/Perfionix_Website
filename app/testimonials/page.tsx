import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "CEO",
    company: "TechStart Inc.",
    image: "/placeholder.svg?key=2pzkc",
    content:
      "Perfionix transformed our entire digital infrastructure. Their team delivered a scalable platform that increased our operational efficiency by 40%. The attention to detail and technical expertise was exceptional.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "CTO",
    company: "HealthPlus",
    image: "/placeholder.svg?key=o1i84",
    content:
      "Working with Perfionix on our mobile health application was a game-changer. They understood our complex requirements and delivered a solution that our users love. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    role: "VP of Engineering",
    company: "RetailGiant",
    image: "/placeholder.svg?key=iwqwm",
    content:
      "The QA services provided by Perfionix dramatically improved our release quality. Bug reports dropped by 80% after implementing their testing frameworks. Their methodical approach saved us countless hours.",
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    role: "Product Manager",
    company: "FinanceFlow",
    image: "/placeholder.svg?key=7wdkr",
    content:
      "Perfionix built our entire web platform from scratch. Their team was responsive, professional, and delivered ahead of schedule. The platform handles millions of transactions daily without issues.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    role: "Director of IT",
    company: "EduLearn",
    image: "/placeholder.svg?key=2fxgr",
    content:
      "The cloud migration project was seamless thanks to Perfionix. They handled the complexity with ease and provided excellent documentation and training for our team.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Founder",
    company: "LogiTech Solutions",
    image: "/placeholder.svg?key=ldkcp",
    content:
      "From concept to launch, Perfionix was an incredible partner. Their app development team created a logistics platform that revolutionized how we manage our fleet operations.",
    rating: 5,
  },
]

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.9/5", label: "Average Rating" },
]

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Testimonials</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              What our clients say about us.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Do not just take our word for it. Here is what our partners and clients have to say about working with
              Perfionix.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to join our success stories?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us show you why so many businesses trust Perfionix for their technology needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

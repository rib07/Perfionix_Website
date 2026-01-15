import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-tech-office-with-developers-working-on-comp.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Modern IT Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Where deep tech meets
            <span className="text-primary"> a human mindset.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We are a collective of passionate developers and designers, bound together by our deep tech knowledge,
            human-centric mindset, and a passion for driving business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/services">
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
            { value: "25+", label: "Team Members" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

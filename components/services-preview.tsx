import Link from "next/link"
import { Code, Smartphone, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "We build scalable, responsive, and high-performance web applications using modern technologies and frameworks.",
    link: "/services#web",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    link: "/services#app",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Comprehensive testing and QA services to ensure your software meets the highest standards of quality and reliability.",
    link: "/services#qa",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wide">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our collection of tech services spans various needs at every stage of the transformation process.
          </h2>
          <p className="text-muted-foreground">Explore how we help businesses transform through technology.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link
                  href={service.link}
                  className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read more
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

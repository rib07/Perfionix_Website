import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Target, Award, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and work closely with clients to achieve shared goals.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our engagements.",
  },
]

const team = [
  {
    name: "MadhuSudan Bijli",
    role: "Chairman",
    image: "/MD.png",
  },
  {
    name: "Ritwik Bijli",
    role: "Founder & CEO",
    image: "/Ritwik.png",
  },
  {
    name: "Aradhya Rai",
    role: "CTO",
    image: "/Aradhya.png",
  },
  {
    name: "Samruddhi Tousar",
    role: "CBO",
    image: "/Samruddhi.png",
  },


]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              We build accessible, pixel-perfect digital experiences for the web.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perfionix is a modern IT solutions company specializing in web development, app development, and quality
              assurance services, delivering innovative and high-performance digital products tailored to business
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a vision to bridge the gap between technology and business needs, Perfionix has grown from
                a small team of passionate developers to a full-service IT solutions company.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our journey began with a simple belief: that technology should empower businesses, not complicate them.
                We have had the opportunity to develop software across a variety of settings — from advertising agencies
                and large corporations to start-ups and small digital product studios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, embracing new technologies and methodologies to deliver solutions
                that not only meet but exceed our clients expectations.
              </p>
            </div>
            <div
              className="aspect-square rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('/modern-tech-office-team-collaboration.jpg')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-card rounded-lg border border-border">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              A collective of curious and passionate techies bound together by our deep tech knowledge and human-centric
              mindset.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div
                  className="aspect-square rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

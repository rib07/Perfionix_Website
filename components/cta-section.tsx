import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className="w-full lg:w-1/2 aspect-[4/3] rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url('/team-of-developers-collaborating-in-modern-office-.jpg')`,
            }}
          />
          <div className="w-full lg:w-1/2">
            <p className="text-primary font-medium mb-2 text-sm uppercase tracking-wide">Join us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Want to be a techie too?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are the tech artisans of Perfionix – a leading technology company helping countless organizations
              succeed in their most important and strategic digital transformations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              In our collective, there is always room for more people with that delicious combination of nerdiness and
              infectious energy.
            </p>
            <Button asChild>
              <Link href="/careers">Join the collective</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

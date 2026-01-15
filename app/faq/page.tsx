import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqCategories = [
  {
    title: "General",
    faqs: [
      {
        question: "What services does Perfionix offer?",
        answer:
          "Perfionix specializes in web development, app development, and quality assurance services. We also offer IT consulting, cloud solutions, and data analytics services to help businesses achieve their digital transformation goals.",
      },
      {
        question: "How long has Perfionix been in business?",
        answer:
          "Perfionix has been delivering innovative technology solutions for over 8 years, serving clients across various industries including healthcare, finance, e-commerce, and education.",
      },
      {
        question: "Where is Perfionix located?",
        answer:
          "We are a remote-first company with team members across the globe. Our primary offices are in New York and San Francisco, but we work with clients worldwide.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve a wide range of industries including healthcare, finance, e-commerce, education, logistics, and more. Our diverse experience allows us to bring cross-industry insights to every project.",
      },
    ],
  },
  {
    title: "Project & Process",
    faqs: [
      {
        question: "How do you approach new projects?",
        answer:
          "We follow an agile methodology, starting with a discovery phase to understand your requirements, followed by iterative development sprints. We maintain constant communication throughout the project lifecycle.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 6-12 months. We provide detailed timelines during the proposal phase.",
      },
      {
        question: "Do you offer ongoing maintenance and support?",
        answer:
          "Yes, we offer flexible maintenance and support packages to ensure your software remains up-to-date, secure, and performing optimally after launch.",
      },
      {
        question: "How do you handle project communication?",
        answer:
          "We use tools like Slack, Jira, and regular video calls to maintain transparent communication. You will have a dedicated project manager as your main point of contact.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    faqs: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer both fixed-price projects and time-and-materials engagements depending on project scope. For ongoing work, we have retainer options available. We provide detailed estimates during the proposal phase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, credit cards, and various online payment methods. For larger projects, we typically structure payments in milestones tied to deliverables.",
      },
      {
        question: "Do you require a deposit to start work?",
        answer:
          "Yes, we typically require a 25-50% deposit to begin work, depending on the project size. This helps ensure commitment from both parties and covers initial project costs.",
      },
    ],
  },
  {
    title: "Technical",
    faqs: [
      {
        question: "What technologies do you work with?",
        answer:
          "We work with modern technologies including React, Next.js, Node.js, Python, React Native, AWS, Azure, and more. We choose the best technology stack based on your specific project requirements.",
      },
      {
        question: "Do you provide source code ownership?",
        answer:
          "Yes, upon project completion and final payment, you receive full ownership of all source code and intellectual property created for your project.",
      },
      {
        question: "How do you ensure code quality?",
        answer:
          "We follow best practices including code reviews, automated testing, continuous integration, and thorough documentation. Our QA team conducts comprehensive testing before every release.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "Absolutely. We have extensive experience integrating with existing systems, APIs, and third-party services. We will assess your current infrastructure during the discovery phase.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">FAQs</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to common questions about our services, process, and how we work with clients.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="bg-background rounded-lg border border-border px-6"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are here to help. Contact us and we will get back to you as soon as possible.
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

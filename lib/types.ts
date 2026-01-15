export interface ContactSubmission {
  id: string
  name: string
  email: string
  company: string | null
  subject: string
  message: string
  status: "new" | "read" | "replied" | "archived"
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribed_at: string
  is_active: boolean
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string | null
  author: string
  category: string
  read_time: string
  is_featured: boolean
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface JobApplication {
  id: string
  job_title: string
  name: string
  email: string
  phone: string | null
  linkedin_url: string | null
  portfolio_url: string | null
  cover_letter: string | null
  resume_url: string | null
  status: "pending" | "reviewing" | "interviewed" | "accepted" | "rejected"
  created_at: string
}

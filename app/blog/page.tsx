import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { db } from "@/lib/db";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  read_time: string;
  image_url?: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
};

const categories = [
  "All",
  "Technology",
  "Development",
  "Design",
  "QA",
  "Cloud",
  "AI",
];

// 🔹 Server-side MySQL fetch (public, published posts only)
async function getBlogPosts(): Promise<BlogPost[]> {
  const [rows] = await db.execute<BlogPost[]>(
    `
    SELECT
      id,
      title,
      slug,
      excerpt,
      author,
      category,
      read_time,
      image_url,
      is_featured,
      is_published,
      created_at
    FROM blog_posts
    WHERE is_published = true
    ORDER BY created_at DESC
    `
  );

  return rows;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const hasNoPosts = posts.length === 0;

  // Featured post logic
  const featuredPost =
    posts.find((post) => post.is_featured) || posts[0];

  const regularPosts = posts.filter(
    (post) => post.id !== featuredPost?.id
  );

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-background pb-12 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">
              Blog
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Insights & Ideas
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Stay updated with the latest trends, best practices,
              and insights from our team of technology experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories (UI only for now) */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
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

      {/* Empty State */}
      {hasNoPosts ? (
        <section className="bg-card py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-lg text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="bg-card py-16">
              <div className="container mx-auto px-6">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block"
                >
                  <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div
                      className="aspect-video rounded-lg bg-secondary bg-cover bg-center"
                      style={{
                        backgroundImage: featuredPost.image_url
                          ? `url('${featuredPost.image_url}')`
                          : undefined,
                      }}
                    />

                    <div>
                      <span className="text-sm font-medium text-primary">
                        {featuredPost.category}
                      </span>

                      <h2 className="mb-4 mt-2 text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                        {featuredPost.title}
                      </h2>

                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {featuredPost.author}
                        </span>

                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(
                            featuredPost.created_at
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {featuredPost.read_time}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* Posts Grid */}
          {regularPosts.length > 0 && (
            <section className="bg-background py-20">
              <div className="container mx-auto px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.slug}`}>
                        <div
                          className="mb-4 aspect-video rounded-lg bg-secondary bg-cover bg-center"
                          style={{
                            backgroundImage: post.image_url
                              ? `url('${post.image_url}')`
                              : undefined,
                          }}
                        />

                        <span className="text-sm font-medium text-primary">
                          {post.category}
                        </span>

                        <h3 className="mb-2 mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                          {post.title}
                        </h3>

                        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.author}</span>
                          <span>{post.read_time}</span>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </main>
  );
}

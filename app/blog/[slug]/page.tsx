import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  read_time: string;
  image_url?: string | null;
  is_published: boolean;
  created_at: string;
};

// ✅ SAFE SERVER QUERY
async function getBlogPost(slug: string | undefined): Promise<BlogPost | null> {
  // 🔒 HARD GUARD (THIS FIXES YOUR ERROR)
  if (!slug) {
    return null;
  }

  const [rows] = await db.execute<BlogPost[]>(
    `
    SELECT
      id,
      title,
      slug,
      content,
      excerpt,
      author,
      category,
      read_time,
      image_url,
      is_published,
      created_at
    FROM blog_posts
    WHERE slug = ?
      AND is_published = true
    LIMIT 1
    `,
    [slug]
  );

  return rows.length > 0 ? rows[0] : null;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug?: string };
}) {
  const slug = params?.slug;

  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article className="bg-background pb-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            {/* Back Link */}
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <span className="text-sm font-medium text-primary">
                {post.category}
              </span>

              <h1 className="mb-6 mt-2 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.created_at).toLocaleDateString()}
                </span>

                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.read_time}
                </span>
              </div>
            </header>

            {/* Image */}
            {post.image_url && (
              <div
                className="mb-8 aspect-video rounded-lg bg-cover bg-center bg-secondary"
                style={{ backgroundImage: `url('${post.image_url}')` }}
              />
            )}

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

import { cookies } from "next/headers";
import { db } from "@/lib/db";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { Plus, Pencil } from "lucide-react";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
};

// 🔐 Server-side MySQL fetch
async function getBlogPosts(): Promise<BlogPost[]> {
  const adminSession = cookies().get("admin_session")?.value;

  if (!adminSession) {
    // No access → empty list (or you can redirect)
    return [];
  }

  const [rows] = await db.execute<BlogPost[]>(
    `
    SELECT
      id,
      title,
      slug,
      category,
      author,
      is_published,
      is_featured,
      created_at
    FROM blog_posts
    ORDER BY created_at DESC
    `
  );

  return rows;
}

export default async function BlogAdminPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>

        <Button asChild>
          <Link href="/admin/blog/new" className="flex items-center gap-2">
            <Plus size={18} />
            New Post
          </Link>
        </Button>
      </div>

      {/* Empty State */}
      {posts.length === 0 ? (
        <Card className="bg-card">
          <CardContent className="py-12 text-center">
            <p className="mb-4 text-muted-foreground">
              No blog posts yet.
            </p>
            <Button asChild>
              <Link href="/admin/blog/new">
                Create your first post
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        /* Table */
        <Card className="bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {post.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.slug}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>{post.category}</TableCell>
                  <TableCell>{post.author}</TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Badge
                        variant={
                          post.is_published
                            ? "default"
                            : "secondary"
                        }
                      >
                        {post.is_published
                          ? "Published"
                          : "Draft"}
                      </Badge>

                      {post.is_featured && (
                        <Badge variant="outline">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {new Date(
                      post.created_at
                    ).toLocaleDateString()}
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                    >
                      <Link href={`/admin/blog/${post.id}`}>
                        <Pencil size={16} />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}

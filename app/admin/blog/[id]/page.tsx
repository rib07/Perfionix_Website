"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Trash2 } from "lucide-react";
import type { BlogPost } from "@/lib/types";

export default function EditBlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<BlogPost | null>(null);

  // 🔹 Load blog post
  useEffect(() => {
    fetch(`/api/admin/blog/${id}`, { credentials: "include" })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        setFormData(data);
        setIsLoading(false);
      });
  }, [id]);

  // 🔹 Update blog post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    setIsSubmitting(true);
    setError(null);

    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      setError("Failed to update post");
      setIsSubmitting(false);
      return;
    }

    router.push("/admin/blog");
  };

  // 🔹 Delete blog post
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!res.ok) {
      setError("Failed to delete post");
      return;
    }

    router.push("/admin/blog");
  };

  if (isLoading) {
    return <p className="py-12 text-muted-foreground">Loading…</p>;
  }

  if (!formData) {
    return <p className="py-12 text-muted-foreground">Post not found</p>;
  }

  return (
    <div>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft size={18} />
        Back to Blog Posts
      </Link>

      <Card className="bg-card max-w-3xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Edit Blog Post</CardTitle>
          <Button variant="destructive" size="sm" onClick={handleDelete}>
            <Trash2 size={16} className="mr-2" />
            Delete
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Label>Title</Label>
            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <Label>Slug</Label>
            <Input
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
            />

            <Label>Author</Label>
            <Input
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />

            <Label>Category</Label>
            <Input
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />

            <Label>Read Time</Label>
            <Input
              value={formData.read_time}
              onChange={(e) =>
                setFormData({ ...formData, read_time: e.target.value })
              }
            />

            <Label>Image URL</Label>
            <Input
              value={formData.image_url || ""}
              onChange={(e) =>
                setFormData({ ...formData, image_url: e.target.value })
              }
            />

            <Label>Excerpt</Label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) =>
                setFormData({ ...formData, excerpt: e.target.value })
              }
            />

            <Label>Content</Label>
            <Textarea
              rows={12}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
            />

            <div className="flex gap-6">
              <Checkbox
                checked={formData.is_featured}
                onCheckedChange={(v) =>
                  setFormData({ ...formData, is_featured: Boolean(v) })
                }
              />
              Featured

              <Checkbox
                checked={formData.is_published}
                onCheckedChange={(v) =>
                  setFormData({ ...formData, is_published: Boolean(v) })
                }
              />
              Published
            </div>

            {error && <p className="text-destructive">{error}</p>}

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

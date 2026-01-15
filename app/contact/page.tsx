"use client";

import type React from "react";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <main>
        <Navbar />
        <section className="pt-32 pb-20 min-h-[70vh] flex items-center">
          <div className="container mx-auto px-6 text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Message Sent</h1>
            <p className="mb-6">We will contact you within 24 hours.</p>
            <Button onClick={() => setIsSuccess(false)}>
              Send Another
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">


          {/* LEFT – CONTACT FORM */}
          <div>
            <h1 className="text-4xl font-bold mb-8 text-white">
              Contact Us
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
              {["name", "email", "company", "subject"].map((field) => (
                <div key={field}>
                  <Label className="text-gray-300">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Label>
                  <Input
                    required={field !== "company"}
                    value={(formState as any)[field]}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        [field]: e.target.value,
                      })
                    }
                  />
                </div>
              ))}

              <div>
                <Label className="text-gray-300">Message</Label>
                <Textarea
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.target.value,
                    })
                  }
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* RIGHT – CONTACT INFO + MAP */}
          <div className="space-y-8 text-white md:-ml-2 md:mt-8">


            {/* Email */}
            <div className="flex gap-4">
              <Mail className="text-yellow-400" />
              <a
                href="mailto:hello@perfionix.com"
                className="hover:text-yellow-400"
              >
                hello@perfionix.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="text-yellow-400" />
              <a
                href="tel:+919749901641"
                className="hover:text-yellow-400"
              >
                +91 97499 01641
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <MessageCircle className="text-green-400" />
              <a
                href="https://wa.me/917047655304?text=Hello%20Perfionix"
                target="_blank"
                className="hover:text-green-400"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-yellow-400" />
              <span>Navi Mumbai, Maharashtra, India</span>
            </div>

            {/* Map */}
            <div className="max-w-md overflow-hidden rounded-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=Vashi%20Navi%20Mumbai&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

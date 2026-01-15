"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <p className="p-8">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        <Stat title="Contacts" value={stats.contacts} />
        <Stat title="Subscribers" value={stats.subscribers} />
        <Stat title="Applications" value={stats.applications} />
        <Stat title="Blog Posts" value={stats.blogPosts} />
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="border p-6 rounded-lg">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

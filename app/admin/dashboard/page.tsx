"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Messages</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((m) => (
            <tr key={m.id} className="border-t">
              <td className="p-2">{m.name}</td>
              <td className="p-2">{m.email}</td>
              <td className="p-2">{m.subject}</td>
              <td className="p-2">
                {new Date(m.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Invalid credentials");
      return;
    }

    window.location.href = "/admin/dashboard";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-white">Admin Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  );
}

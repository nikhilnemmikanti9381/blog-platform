"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/"
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Login</h1>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-black text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}

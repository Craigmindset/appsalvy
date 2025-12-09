import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // TODO: Replace with Supabase email existence check
    const res = await fetch("/api/admin/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.exists) {
      router.push(`/admin/create-password?email=${encodeURIComponent(email)}`);
    } else {
      setError("Email not found.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Checking..." : "Confirm Email"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

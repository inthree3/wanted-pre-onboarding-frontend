import React, { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const validateEmail = (email: string) => {
    return email.includes("@");
  };
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  return (
    <div>
      <h1>Sign Up</h1>
      Email
      <input
        type="text"
        data-testid="email-input"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      Password
      <input
        type="text"
        data-testid="password-input"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        data-testid="signup-button"
        disabled={
          !validateEmail(form.email) || !validatePassword(form.password)
        }
      >
        Sign Up
      </button>
    </div>
  );
}

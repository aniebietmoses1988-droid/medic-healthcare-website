
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Registerpage.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      navigate("/login", {
        state: {
          message: "Account created successfully. Please sign in.",
        },
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email already has an account. Please sign in.");
      } else if (err.code === "auth/weak-password") {
        setError("Please choose a stronger password (at least 6 characters).");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <Link to="/" className="login-logo">
          <span className="login-logo-text">Medic</span>
          <span className="login-logo-plus">+</span>
        </Link>

        <h1>Create Account</h1>
        <p className="login-subtitle">
          Create your Medic+ account to get started.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-email">Email Address</label>
          <input
            id="register-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="register-password">Password</label>

          <div className="password-field">
            <input
              id="register-password"
              type={showPassword ? "text" : "password"}
              placeholder="At least 6 characters"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          {error && (
            <p role="alert" className="register-error">
              {error}
            </p>
          )}

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="login-footer">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}

export default RegisterPage;

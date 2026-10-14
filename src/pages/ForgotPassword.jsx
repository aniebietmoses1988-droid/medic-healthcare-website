import { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());

      setMessage(
        "If an account exists for this email, a password reset link will be sent. Please check your inbox and spam folder."
      );
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Unable to send the reset email. Please try again.");
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

        <h1>Forgot Password?</h1>

        <p className="login-subtitle">
          Enter the email address associated with your account.
          We'll send you instructions to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="reset-email">Email Address</label>

          <input
            id="reset-email"
            type="email"
            placeholder="Enter your registered email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          {message && (
            <p className="reset-success" role="status">
              {message}
            </p>
          )}

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="login-footer">
          Remember your password?{" "}
          <Link to="/login">Sign in</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}

export default ForgotPassword;
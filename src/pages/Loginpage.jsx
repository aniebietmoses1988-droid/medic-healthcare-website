
import { Link } from "react-router-dom";
import "./Loginpage.css";

function LoginPage() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Login functionality has not been connected yet.");
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <Link to="/" className="login-logo">
          <span className="login-logo-text">Medic</span>
          <span className="login-logo-plus">+</span>
        </Link>

        <h1>Welcome Back</h1>
        <p className="login-subtitle">
          Sign in to your Medic+ account.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-submit">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <Link to="/register">Create an account</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Homepage
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;

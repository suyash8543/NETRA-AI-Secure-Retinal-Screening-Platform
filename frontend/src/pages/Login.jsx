import { useState } from "react";
import {
  Brain,
  Eye,
  ShieldCheck,
  Clock3,
  Mail,
  Lock,
  EyeOff,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [email, setEmail] = useState("doctor@netra-ai.org");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  // Already logged in
  if (user) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(email, password);

    if (result.success) {
      // Successful login -> Dashboard
      navigate("/dashboard", { replace: true });
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-page">

      {/* ================= LEFT PANEL ================= */}
      <section className="login-left">

        <div className="login-decoration login-circle-1" />
        <div className="login-decoration login-circle-2" />

        <div className="login-dots">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className="login-left-content">

          {/* Logo */}
          <div className="login-brand">
            <div className="login-brand-icon">
              <Brain size={30} />
            </div>

            <div>
              <h1>NETRA-AI</h1>
              <p>Explainable Retinal Screening</p>
            </div>
          </div>

          {/* Badge */}
          <div className="login-ai-badge">
            <Sparkles size={15} />
            AI-Powered Healthcare
          </div>

          {/* Heading */}
          <h2>
            AI-powered diabetic
            <br />
            retinopathy screening for
            <br />
            <span>everyone.</span>
          </h2>

          <p className="login-description">
            Screen retinal images, understand AI predictions and identify
            high-risk patients for timely ophthalmologist referral.
          </p>

          {/* Feature Cards */}
          <div className="login-features">

            <FeatureCard
              icon={<Eye size={22} />}
              value="5"
              title="DR Classes"
              description="No DR, Mild, Moderate, Severe, Proliferative DR"
            />

            <FeatureCard
              icon={<Brain size={22} />}
              value="AI"
              title="Explainable"
              description="Interpretable AI predictions you can trust"
            />

            <FeatureCard
              icon={<Clock3 size={22} />}
              value="24/7"
              title="Screening"
              description="Always-on screening for better outcomes"
            />

          </div>

          {/* Security */}
          <div className="login-security">
            <ShieldCheck size={19} />
            <span>
              Secure • Reliable • Accessible • Explainable AI
            </span>
          </div>

        </div>
      </section>

      {/* ================= RIGHT PANEL ================= */}
      <section className="login-right">

        <div className="login-card">

          {/* Logo */}
          <div className="login-card-logo">
            <Brain size={25} />
          </div>

          {/* Heading */}
          <div className="login-heading">
            <h2>Welcome back</h2>

            <p>
              Sign in to access the NETRA-AI screening dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="login-field">

              <label>Email Address</label>

              <div className="login-input-wrapper">

                <Mail
                  className="login-input-icon"
                  size={18}
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email"
                  required
                />

                {email.includes("@") && (
                  <CheckCircle2
                    className="login-success-icon"
                    size={18}
                  />
                )}

              </div>
            </div>

            {/* Password */}
            <div className="login-field">

              <div className="login-label-row">

                <label>Password</label>

                <button
                  type="button"
                  className="forgot-btn"
                >
                  Forgot password?
                </button>

              </div>

              <div className="login-input-wrapper">

                <Lock
                  className="login-input-icon"
                  size={18}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>
            </div>

            {/* Remember Me */}
            <label className="remember-row">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>Remember me</span>

            </label>

            {/* Error */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* Sign In */}
            <button
              type="submit"
              className="signin-btn"
            >
              Sign In
            </button>

          </form>

          {/* Divider */}
          <div className="login-divider">
            <span />
            <p>Demo Credentials</p>
            <span />
          </div>

          {/* Demo Credentials */}
          <div className="demo-box">

            <div>
              <p>
                <strong>Email:</strong>{" "}
                doctor@netra-ai.org
              </p>

              <p>
                <strong>Password:</strong>{" "}
                123456
              </p>
            </div>

            <ShieldCheck size={27} />

          </div>

        </div>

        {/* Footer */}
        <p className="login-footer">
          NETRA-AI • Secure Retinal Screening Platform
        </p>

      </section>
    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({
  icon,
  value,
  title,
  description,
}) {
  return (
    <div className="login-feature-card">

      <div className="feature-top">

        <div className="feature-icon">
          {icon}
        </div>

        <div>
          <strong>{value}</strong>

          <span>{title}</span>
        </div>

      </div>

      <p>{description}</p>

    </div>
  );
}

export default Login;
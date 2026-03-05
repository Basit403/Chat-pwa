import { useState } from "react";
import axios from "axios"; 

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let response;
      if (isLogin) {
        response = await axios.post("http://localhost:4000/auth/login", {
          email: formData.email,
          password: formData.password,
        });
      } else {
        response = await axios.post("http://localhost:4000/auth/register", {
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
          password: formData.password,
        });
      }
      // Store user data (adjust as needed)
      localStorage.setItem("user", JSON.stringify(response.data.user));
      onLogin(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:4000/auth/google"; // Redirect to Google OAuth
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <h1>XORA</h1>
        </div>

        <h2>{isLogin ? "Welcome Back" : "Join us"}</h2>
        <p className="auth-subtitle">
          {isLogin ? "Sign in to continue " : "Create your account"}
        </p>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="btn-primary">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="divider">OR CONTINUE WITH</p>

        <button className="btn-google" onClick={handleGoogleAuth}>
          <i className="fab fa-google"></i>
          Continue with Google
        </button>

        <p className="toggle-text">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
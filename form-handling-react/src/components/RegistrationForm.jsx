import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", { username, email, password });
      alert("Registration successful!");
      // Clear the form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username} // Direct binding to username state
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email} // Direct binding to email state
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password} // Direct binding to password state
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

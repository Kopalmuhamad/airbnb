"use client";
import axios from "axios";
import React, { useState, FormEvent } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://auf.my.id/login", loginData);
      console.log("Response:", response.data);
      // Handle response accordingly, e.g., store token in local storage, redirect to another page, etc.
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to login. Please check your email and password.");
      // Handle error accordingly, e.g., show error message to user
    }
  };

  return (
    <div className="mt-80">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

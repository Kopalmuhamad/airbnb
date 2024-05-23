"use client";
import axios from "axios";
import React, { useState, FormEvent } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://auf.my.id/users", userData);
      console.log("Response:", response.data);
      // Handle response accordingly, e.g., show success message, redirect to another page, etc.
    } catch (error) {
      console.error("Error:", error);
      // Handle error accordingly, e.g., show error message to user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-80">
      <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
      <input type="text" name="phone_number" placeholder="Phone" value={userData.phone_number} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

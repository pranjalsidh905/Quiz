// LoginForm.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import ".././styles/LoginForm.css";

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // You can add authentication logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Username:
        <input className="input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label">
        Password:
        <input className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" className="button">Login</button>
    </form>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LogIn } from "../store/AuthSlice/AuthSlice";
const Auth = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn());
    console.log("Logging in with:", { username, password });
  };

  const formStyle = {
    width: "300px",
    margin: "100px auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "purple",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        style={inputStyle}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={inputStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
};

export default Auth;

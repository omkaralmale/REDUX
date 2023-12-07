import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.LogOut());
  };
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navStyle = {
    backgroundColor: "purple",
    color: "#fff",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    color: "#fff",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 1rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={logoStyle}>
        Counter
      </a>
      <div>
        {isAuth && (
          <a href="/products" style={linkStyle}>
            Products
          </a>
        )}
        {isAuth && (
          <a href="/about" style={linkStyle}>
            About Us
          </a>
        )}
        {isAuth && (
          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        )}
        {isAuth && (
          <button href="/logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;

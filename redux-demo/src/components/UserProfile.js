import React from "react";

const UserProfile = () => {
  const profileContainerStyle = {
    backgroundColor: "#6a0dad",
    color: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    margin: "10px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const avatarStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid #fff",
    margin: "0 auto 20px",
    objectFit: "cover",
  };

  const userInfoStyle = {
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const valueStyle = {
    fontSize: "18px",
    marginBottom: "15px",
  };

  return (
    <div style={profileContainerStyle}>
      <img
        src="https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2023/07/hockerty_daniel_craig_james_bond_wearing_a_tuxedo_ff45a31e_7c25_41cc_999a_d3344aeaee88.jpg"
        alt="User Avatar"
        style={avatarStyle}
      />
      <div style={userInfoStyle}>
        <h2 style={headingStyle}>John Doe</h2>
        <div>
          <p style={labelStyle}>Username:</p>
          <p style={valueStyle}>johndoe123</p>
        </div>
        <div>
          <p style={labelStyle}>Email:</p>
          <p style={valueStyle}>johndoe@example.com</p>
        </div>
        <div>
          <p style={labelStyle}>Location:</p>
          <p style={valueStyle}>City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

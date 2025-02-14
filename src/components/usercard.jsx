import React from "react";
import reactsvg from "../assets/react.svg";

const Usercard = () => {
  // Static user details
  const profilePhoto = reactsvg;
  const name = "Shubh Nawani";
  const email = "shubh.nawani.s65@kalvium.community";
  const phone = "+91 9058756575";
  const address = "Dehradun, Uttarakhand";

  return (
    <div style={{
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      border: "1px solid #ddd"
    }}>
      <img
        src={profilePhoto}
        alt="Profile"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          border: "2px solid #ccc"
        }}
      />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>{name}</h2>
      <p style={{ color: "gray", fontSize: "14px" }}>{email}</p>
      <p style={{ color: "gray", fontSize: "14px" }}>{phone}</p>
      <p style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}>{address}</p>
    </div>
  );
};

export default Usercard;
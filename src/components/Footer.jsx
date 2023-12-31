import React from "react";

function Footer() {
  return (
    <h1
      style={{
        color: "white",
        textAlign: "center",
        fontStyle: "italic",
      }}
    >
      &copy; {new Date().getFullYear()} Rony Martins
    </h1>
  );
}

export default Footer;

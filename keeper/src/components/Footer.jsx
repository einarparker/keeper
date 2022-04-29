import React from "react";

function Footer() {
  const date = new Date();
  let year = date.getFullYear();
  return <footer className="footer">Copyright © {year}</footer>;
}

export default Footer;

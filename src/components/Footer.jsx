import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright {year} &#9426; HK</p>
    </footer>
  );
}

export default Footer;

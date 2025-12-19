import React from "react";

function Header() {
  return (
    <div className="Header-overlay">
      <video muted autoPlay loop>
        <source src={process.env.PUBLIC_URL + "/video/main.mp4"} />
      </video>
    </div>
  );
}

export default Header;

import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ key, imageUrl, title, size }) => {
  return (
    <div
      className="menu-item"
      key={key}
      style={{
        background: `url(${imageUrl})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;

import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router";

const MenuItem = ({ key, imageUrl, title, size, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      key={key}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

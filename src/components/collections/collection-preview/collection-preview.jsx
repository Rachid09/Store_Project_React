import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...itemProperties }) => {
          return <CollectionItem key={id} {...itemProperties} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;

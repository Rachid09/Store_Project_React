import React, { Component } from "react";
import CollectionPreview from "../../components/collections/collection-preview/collection-preview";
import SHOP_DATA from "./shop-data";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <div className="collection-container">
          {collections.map(({ id, ...collectionProperties }) => {
            return <CollectionPreview key={id} {...collectionProperties} />;
          })}
        </div>
      </div>
    );
  }
}

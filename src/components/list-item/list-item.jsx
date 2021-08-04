import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item";
import "./list-item.styles.scss";
import ITEMS_DATA from "./list-itemData";

export default class ListItems extends Component {
  constructor() {
    super();
    this.state = {
      categories: ITEMS_DATA,
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="directory-menu">
        {categories.map(({ id, ...cat }) => (
          <MenuItem key={id} {...cat} />
        ))}
      </div>
    );
  }
}

import React, { PropsWithChildren } from "react";
import { categoryType } from "../../../utils/dataType";
import "./CategoryItems.scss";
import { Link } from "react-router-dom";

interface CategoryItemProps {
  item: categoryType;
}

const CategoryItems = ({ item }: PropsWithChildren<CategoryItemProps>) => {
  return (
    <div className="item-container">
      <Link to={`/products/${item.category}`}>
        <div className="image">
          <img src={item.img} alt="category" />
        </div>
        <div className="info">
          <h1 className="title">{item.title}</h1>
          <button className="button">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItems;

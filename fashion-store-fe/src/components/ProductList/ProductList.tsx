import React from "react";
import "./ProductList.scss";
import { filterType } from "../../utils/dataType";

interface Props {
  setFilters: React.Dispatch<React.SetStateAction<filterType>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

const ProductList = (props: Props) => {
  const handleFilter = (e: any) => {
    props.setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="list-container">
      <h1 className="title">{props.category.toUpperCase()}</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products</span>
          <select name="color" id="color" onChange={handleFilter}>
            <option value="">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>
          <select name="size" id="size" onChange={handleFilter}>
            <option value="">Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products</span>
          <select onChange={(e) => props.setSort(e.target.value)}>
            <option value="newest" selected>
              Newest
            </option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

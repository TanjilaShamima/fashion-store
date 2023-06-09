import React, { PropsWithChildren } from "react";
import { productType } from "../../utils/dataType";
import "./SingleProduct.scss";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

interface SingleProductProps {
  item: productType;
}

const SingleProduct = ({ item }: PropsWithChildren<SingleProductProps>) => {
  return (
    <div className="product-container">
      <div className="circle"></div>
      <div className="image">
        <img src="/images/popular_products/3.jpg" alt="" />
      </div>
      <div className="info-container">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className="icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

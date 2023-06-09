import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.scss";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector(state => state);
  console.log("cart", cart)
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <input />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">FASHION STORE</h1>
        </div>
        <div className="right">
          <div className="menu-item">
            <Link to="/register">REGISTER</Link>
          </div>
          <div className="menu-item">
            <Link to="/login">SIGN IN</Link>
          </div>
          <div className="menu-item">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

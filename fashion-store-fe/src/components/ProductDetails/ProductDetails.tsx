import React from "react";
import "./ProductDetails.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { productType } from "../../utils/dataType";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";

const ProductDetails = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = React.useState<productType>({} as productType);
  const [quantity, setQuantity] = React.useState<number>(1);
  const [color, setColor] = React.useState<string>("");
  const [size, setSize] = React.useState<string>("");

  const handleClick = (type: string) => {
    if (type === "inc") {
      setQuantity(quantity + 1);
    }
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };

  const handleCartAdd = () => {
    addProduct({product, quantity: quantity, color: color, size: size, })
  }

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/product/find/${productId}`
        );
        setProduct(response.data);
      } catch {
        console.log(`Error getting product`);
      }
    };
    getProduct();
  }, [productId]);

  console.log("product", product);
  console.log("color", color);
  console.log("size", size);

  return (
    <div className="details-container">
      <div className="wrapper">
        <div className="img-container">
          <img src="/images/category/1.jpg" alt="" />
        </div>
        <div className="info-container">
          <h1 className="title">{product.title}</h1>
          <div className="description">{product.description}</div>
          <div className="price">$ {product.price}</div>
          <div className="filter-container">
            <div className="filter">
              <div className="filter-title">Color</div>
              {product.color?.map((item) => {
                return (
                  <div key={item}>
                    <div
                      className="filter-color"
                      style={{ backgroundColor: item }}
                      onClick={(e) => setColor(item)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="filter">
              <span className="filter-title">Size</span>
              <select
                name="size"
                id="size"
                onClick={(e: any) => setSize(e.target.value)}
              >
                <option value="">Size</option>
                {product.size?.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <RemoveIcon onClick={() => handleClick("dec")} />
              <div className="amount">{quantity}</div>
              <AddIcon onClick={() => handleClick("inc")} />
            </div>
            <button onClick={handleCartAdd}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

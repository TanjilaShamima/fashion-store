import React from "react";
import "./Products.scss";
import SingleProduct from "../SingleProduct";
import { filterType, productType } from "../../utils/dataType";
import axios from "axios";

interface Props {
  category?: string;
  filters?: filterType;
  sort?: string;
}

const Products = (props: Props) => {
  const [products, setProducts] = React.useState<productType[]>([]);
  const [filterProducts, setFilterProducts] =
    React.useState<productType[]>(products);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        props.category
          ? `http://localhost:5000/api/product/find?category=${props.category}`
          : "http://localhost:5000/api/product/find"
      );
      setProducts(response.data);
      setFilterProducts(response.data);
    };
    getProducts();
  }, [props.category]);

  // React.useEffect(() => {
  //   products.filter(item => Object.keys(props.filters).every(([key, value]) => item[key].includes(value) ))
  //   if (props.category) {
  //     if (props.filters?.color && props.filters?.size) {
  //       console.log("here----------1");
  //       setFilterProducts(
  //         products.filter(
  //           (item) =>
  //             props.filters?.color === item.color &&
  //             props.filters?.size === item.size
  //         )
  //       );
  //     } else if (props.filters?.color) {
  //       console.log("here----------2");
  //       setFilterProducts(
  //         products.filter((item) => props.filters?.color === item.color)
  //       );
  //     } else if (props.filters?.size) {
  //       console.log("here----------3");
  //       setFilterProducts(
  //         products.filter((item) => props.filters?.size === item.size)
  //       );
  //     } else {
  //       setFilterProducts(products);
  //     }
  //   }

  //   // eslint-disable-next-line
  // }, [props.category, props.filters]);

  React.useEffect(() => {
    if (props.sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort(
          (a, b) =>
            new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        )
      );
    } else if (props.sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [props.sort]);


  return (
    <div className="products-container">
      {props.category
        ? filterProducts.map((item) => (
            <SingleProduct item={item} key={item._id} />
          ))
        : filterProducts
            .slice(0, 10)
            .map((item) => <SingleProduct item={item} key={item._id} />)}
    </div>
  );
};

export default Products;

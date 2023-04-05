import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/ProductList/ProductList";
import Products from "../components/Products/Products";
import { useLocation } from "react-router-dom";
import { filterType } from "../utils/dataType";

const ProductListPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = React.useState<filterType>({} as filterType)
  const [sort, setSort] = React.useState<string>('newest')

  console.log("location", location)
  console.log("filters", filters)
  console.log("sort", sort)
  return (
    <div className="list-container">
      <Navbar />
      <Announcement />
      <ProductList setFilters={setFilters} setSort={setSort} category={category} />
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductListPage;

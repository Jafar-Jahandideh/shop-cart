import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selector } from "../feature/products/productsSlice";
//components
import Loader from "../components/Loader";
import Cards from "../components/Cards";
import SearchBox from "../components/SearchBox";
//styles
import styles from "./ProductsPage.module.css";
//helpers
import {
  categoryProducts,
  createQuery,
  searchProducts,
} from "../helpers/helpers";
import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  const [productsCart, setProductsCart] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const productsState = useSelector(selector);
  const { loading, products, error } = productsState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setProductsCart(products);
    setQuery(createQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearch(query.search || "");
    let filterProducts = searchProducts(products, query.search);
    filterProducts = categoryProducts(filterProducts, query.category);
    setProductsCart(filterProducts);
    setSearchParams(query);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      {loading && <Loader />}
      {error && <h2>{error}</h2>}
      <div className={styles.container}>
        <div className={styles.products}>
          {productsCart.map((product) => (
            <Cards key={product.id} data={product} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} />
      </div>
    </>
  );
};

export default ProductsPage;

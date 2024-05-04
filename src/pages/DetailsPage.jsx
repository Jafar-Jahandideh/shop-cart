import { useParams, Link } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { selector, fetchProducts } from "../feature/products/productsSlice";
//helpers
import { productsDetails } from "../helpers/helpers";
//components
import Loader from "../components/Loader";
//styles
import styles from "./DetailsPage.module.css";
import { useEffect } from "react";

const DetailsPage = () => {
  const { id } = useParams();
  const productsInfo = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { products } = productsInfo;
  const product = productsDetails(products, +id);
  if (!product) return <Loader />;
  const { image, description, category, title, price } = product;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selector } from "../feature/cart/cartSlice";
//styles
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const counter = useSelector(selector);
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop</Link>
        <div>
          <Link to="/checkout">
            <PiShoppingCartSimpleBold />
          </Link>
          <span>{counter.itemsCounter}</span>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Jafar with Love</p>
      </footer>
    </>
  );
};

export default Layout;

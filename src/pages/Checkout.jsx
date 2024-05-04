import { useSelector } from "react-redux";
import { selector } from "../feature/cart/cartSlice";
//components
import BasketCart from "../components/BasketCart";
import BasketSidebar from "../components/BasketSidebar";
//styles
import styles from "./Checkout.module.css";

const Checkout = () => {
  const products = useSelector(selector);
  const { selectedItems, itemsCounter } = products;
  return (
    <div className={styles.container}>
      {!!itemsCounter && <BasketSidebar data={products} />}
      <div className={styles.products}>
        {selectedItems.map((items) => (
          <BasketCart key={items.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;

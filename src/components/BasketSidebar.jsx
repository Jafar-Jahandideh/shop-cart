import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { checkout } from "../feature/cart/cartSlice";
//styles
import styles from "./BasketSidebar.module.css";

const BasketSidebar = ({ data }) => {
  const { itemsCounter, total } = data;
  const dispatch = useDispatch();
  console.log(data.checkout);
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total: </p>
        <span>{total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity: </p>
        <span>{itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Checkout: </p>
        <span>{!data.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
};

export default BasketSidebar;

import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../feature/cart/cartSlice";
//helpers
import { shorten } from "../helpers/helpers";
//styles
import styles from "./BasketCart.module.css";

const BasketCart = ({ data }) => {
  const { image, price, title, quantity } = data;
  const dispatch = useDispatch();
  return (
    <div className={styles.cart}>
      <img src={image} alt={title} />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
};

export default BasketCart;

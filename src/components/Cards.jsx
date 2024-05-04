import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItems,
  removeItem,
  increase,
  decrease,
  selector,
} from "../feature/cart/cartSlice";
//helpers
import { shorten, quantityCount } from "../helpers/helpers";
//styles
import styles from "./Cards.module.css";

const Cards = ({ data }) => {
  const { image, price, id, title } = data;

  const cart = useSelector(selector);
  const dispatch = useDispatch();
  const quantity = quantityCount(cart, id);

  return (
    <div className={styles.cards}>
      <img src={image} alt={title} />
      <h3>{shorten(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/details/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity && <span>{quantity}</span>}

          {!quantity && (
            <button onClick={() => dispatch(addItems(data))}>
              <TbShoppingBagCheck />
            </button>
          )}
          {quantity >= 1 && (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;

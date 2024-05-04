import { FaListUl } from "react-icons/fa";
//styles
import styles from "./Sidebar.module.css";
//helpers
import { createQueryObject } from "../helpers/helpers";
const Sidebar = ({ setQuery }) => {
  const categories = [
    { id: 1, category: "All" },
    { id: 2, category: "Jewelery" },
    { id: 3, category: "Electronics" },
    { id: 4, category: "Men's Clothing" },
    { id: 5, category: "Women's Clothing" },
  ];

  const clickHandler = (e) => {
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul>
        {categories.map((items) => (
          <li key={items.id} onClick={clickHandler}>
            {items.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

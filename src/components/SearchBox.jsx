import { ImSearch } from "react-icons/im";
//helpers
import { createQueryObject } from "../helpers/helpers";
//styles
import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const clickHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={clickHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;

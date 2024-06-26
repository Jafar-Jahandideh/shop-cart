import { RotatingLines } from "react-loader-spinner";
//styles
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        strokeColor="#fe5d42"
        strokeWidth="3"
        width="150px"
        height="150px"
      />
    </div>
  );
};

export default Loader;

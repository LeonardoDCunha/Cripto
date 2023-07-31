import { ClipLoader } from "react-spinners";
import styles from "./loading.module.css";

function Loading() {
  return (
    <div
      id="loading"
      className={`${styles.loadingOverlay} ${styles.centralize}`}
    >
      <ClipLoader color="#38b6ff" size={35} />
    </div>
  );
}
export default Loading;

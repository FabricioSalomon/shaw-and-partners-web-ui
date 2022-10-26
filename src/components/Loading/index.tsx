import { RotatingLines } from "react-loader-spinner";
import styles from "./styles.module.scss";

export function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <RotatingLines width="50" strokeColor="white" animationDuration="1" />
    </div>
  );
}

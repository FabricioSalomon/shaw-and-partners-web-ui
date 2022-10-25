import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Project</a>
        </nav>
      </div>
    </header>
  );
}

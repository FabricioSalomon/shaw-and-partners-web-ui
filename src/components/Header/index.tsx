import { useState } from "react";
import styles from "./styles.module.scss";

type HeaderProps = {
  onHeaderMenuChange: (menuOption: string) => void;
  menuOption: string;
};

export function Header({ onHeaderMenuChange, menuOption }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <nav>
          <a
            onClick={() => onHeaderMenuChange("home")}
            className={menuOption === "home" ? styles.active : ""}
          >
            Home
          </a>
          <a
            onClick={() => onHeaderMenuChange("Candidate")}
            className={menuOption === "Candidate" ? styles.active : ""}
          >
            Candidate
          </a>
        </nav>
      </div>
    </header>
  );
}

import { User } from "../../model/Users";
import styles from "./styles.module.scss";

type FooterProps = {
  users: User[];
  page: number;
  onPageChange: (page: number) => void;
};

export function Footer({ users, page, onPageChange }: FooterProps) {
  return (
    <div className={styles.footerContent}>
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={users.some((user) => user.id === 1)}
      >
        {"<"} Previous
      </button>
      <button type="button" onClick={() => onPageChange(page + 1)}>
        Next {">"}
      </button>
    </div>
  );
}

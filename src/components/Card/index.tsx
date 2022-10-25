import React from "react";
import { User } from "../../model/Users";
import styles from "./styles.module.scss";

type CardProps = {
  user: User;
  handleUserDetailsModal: (user: User) => void;
};

export function Card({ user, handleUserDetailsModal }: CardProps) {
  return (
    <div
      onClick={() => handleUserDetailsModal(user)}
      className={styles.cardContent}
    >
      <span className={styles.cardTitle}>ID: {user.id}</span>
      <div className={styles.avatarContainer}>
        <img src={user.avatar_url} alt="User avatar" height="70px" />
      </div>
      <div className={styles.usernameContainer}>
        <span>User:</span> <span className={styles.username}>{user.login}</span>
      </div>
    </div>
  );
}

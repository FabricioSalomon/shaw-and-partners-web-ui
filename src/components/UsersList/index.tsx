import { useEffect, useState } from "react";
import { User } from "../../model/Users";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Loading } from "../Loading";
import { PageHead } from "../PageHead";
import styles from "./styles.module.scss";

type UsersListProps = {
  handleUserDetailsModal: (user: User) => void;
};

export function UsersList({ handleUserDetailsModal }: UsersListProps) {
  const [page, setPage] = useState(0);
  const [id, setId] = useState(0);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (page >= 0) {
      api
        .get<{ data: User[] }>(`/users?since=${id}`)
        .then(({ data }) => {
          setUsers(data.data);
          setIsLoading(false);
        })
        .catch(() => {
          alert("Something went wrong getting users");
        });
    }
  }, [page]);

  function handlePageChange(page: number) {
    if (page >= 0) {
      setId(page * 30);
      setPage(page);
    }
  }

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <PageHead title="Home | Shaw and Partners - FS" />
      <main className={styles.homeContainer}>
        <h1 className={styles.title}>Github Users List</h1>
        <div className={styles.cardContainer}>
          {users.map((user: User) => {
            return (
              <Card
                key={user.id}
                user={user}
                handleUserDetailsModal={() => handleUserDetailsModal(user)}
              />
            );
          })}
        </div>
        <footer className={styles.footerContainer}>
          <Footer users={users} page={page} onPageChange={handlePageChange} />
        </footer>
      </main>
    </>
  );
}

import { GetStaticProps } from "next";
import { Card } from "../components/Card";
import { PageHead } from "../components/PageHead";
import { User } from "../model/Users";
import { api } from "../services/api";
import styles from "./home.module.scss";

type HomeProps = {
  users: any;
};

export default function Home({ users }: HomeProps) {
  return (
    <>
      <PageHead title="Home | Shaw and Partners - FS" />
      <main className={styles.homeContainer}>
        <h1 className={styles.title}>Github Users List</h1>
        <div className={styles.cardContainer}>
          {users.map((user: User) => {
            return <Card key={user.id} user={user} />;
          })}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/users");

  return {
    props: {
      users: data.data,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

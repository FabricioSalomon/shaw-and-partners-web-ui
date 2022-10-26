import { useEffect, useState } from "react";
import { UserDetail } from "../../model/Users";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import styles from "./styles.module.scss";

export function ProjectInformation() {
  const [userDetail, setUserDetail] = useState<UserDetail>({} as UserDetail);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .get<{ data: UserDetail }>(`/users/FabricioSalomon/details`)
      .then(({ data }) => {
        setUserDetail(data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Something went wrong getting users");
      });
  }, []);

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>Candidate Details</div>
        <div className={styles.avatarContainer}>
          <img src={userDetail.avatar_url} alt="User avatar" />
        </div>
        <div className={styles.userDetailContainer}>
          <div>
            <span className={styles.detailTitle}>Name:</span>
            <span className={styles.username}>{userDetail.login}</span>
          </div>
          <div>
            <span className={styles.detailTitle}>Email:</span>
            <span className={styles.username}>fabriciosalomon14@gmail.com</span>
          </div>
          <div>
            <span className={styles.detailTitle}>Linkedin:</span>
            <a
              href="https://www.linkedin.com/in/fabr%C3%ADcio-salomon-332903142"
              target="_blank"
              className={styles.username}
              rel="noreferrer"
            >
              Fabricio Salomon LinkedIn
            </a>
          </div>
          <div>
            <span className={styles.detailTitle}>GitHub:</span>
            <a
              href="https://github.com/FabricioSalomon"
              target="_blank"
              className={styles.username}
              rel="noreferrer"
            >
              Fabricio Salomon GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

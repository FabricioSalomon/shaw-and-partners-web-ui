import { UserRepository } from "../../../../model/UserRepositories";
import styles from "./styles.module.scss";

type RepositoriesProps = {
  currentRepositories: UserRepository[];
};

export function Repositories({ currentRepositories }: RepositoriesProps) {
  return (
    <div>
      {currentRepositories &&
        currentRepositories.map((repo) => (
          <div key={repo.id} className={styles.userRepoTableBody}>
            <span title={`${repo.id}`}>{repo.id}</span>
            <span title={repo.name}>{repo.name}</span>
            <a title={repo.html_url} href={repo.html_url} rel="noreferrer" target="_blank">
              {repo.html_url}
            </a>
          </div>
        ))}
    </div>
  );
}

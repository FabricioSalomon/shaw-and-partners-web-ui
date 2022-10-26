import { useEffect, useState } from "react";
import { MdArrowBack, MdClose } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { UserRepository } from "../../../model/UserRepositories";
import { User, UserDetail } from "../../../model/Users";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";
import { Repositories } from "./Respositories";
import styles from "./styles.module.scss";

type Event = {
  selected: number;
};

type UserRepositoriesTableProps = {
  user: User;
  userDetails: UserDetail;
  handleModal: (user: User) => void;
  handleShowUserDetails: (showUserDetails: boolean) => void;
};

export function UserRepositoriesTable({
  handleModal,
  handleShowUserDetails,
  user,
  userDetails,
}: UserRepositoriesTableProps) {
  const [userRepositories, setUserRepositories] = useState<UserRepository[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [currentRepositories, setCurrentRepositories] = useState<
    UserRepository[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  function handlePageClick(event: Event) {
    const newOffset = (event.selected * 5) % userRepositories.length;

    setItemOffset(newOffset);
  }

  useEffect(() => {
    api
      .get<{ data: UserRepository[] }>(`/users/${user.login}/repos`)
      .then(({ data }) => {
        setUserRepositories(data.data);
      })
      .catch(() => {
        alert("Something went wrong getting user repositories");
      });
  }, [user, itemOffset]);

  useEffect(() => {
    const endOffset = itemOffset + 5;
    setCurrentRepositories(userRepositories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userRepositories.length / 5));
    setIsLoading(false);
  }, [userRepositories]);

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <>
      <header className={styles.headerContainer}>
        <button type="button" onClick={() => handleShowUserDetails(true)}>
          <MdArrowBack color="white" size={28} />
        </button>
        <h2>User Repositories - {userDetails.name || userDetails.login}</h2>
        <button type="button" onClick={() => handleModal(user)}>
          <MdClose color="white" size={28} />
        </button>
      </header>
      <div className={styles.userRepoContainer}>
        <div className={styles.userRepoTableHeader}>
          <span>Repository ID</span>
          <span>Repository Name</span>
          <span>Repository URL</span>
        </div>
      </div>
      <div className={styles.tableBody}>
        <Repositories currentRepositories={currentRepositories} />
        <ReactPaginate
          className={styles.pagination}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
        />
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import Modal from "react-modal";
import { User, UserDetail } from "../../model/Users";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";

Modal.setAppElement("#root");

type UserDetailsModalProps = {
  isOpen: boolean;
  handleModal: (user: User) => void;
  user: User;
};

export function UserDetailsModal({
  isOpen,
  handleModal,
  user,
}: UserDetailsModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetail>({} as UserDetail);

  useEffect(() => {
    setIsLoading(true);
    api
      .get<{ data: UserDetail }>(`/users/${user.login}/details`)
      .then(({ data }) => {
        setUserDetails(data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Something went wrong getting user details");
      });
  }, [user]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => handleModal(user)}
      contentLabel="Add transaction"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      ) : (
        <>
          <header className={styles.headerContainer}>
            <h2>User Details - {userDetails.name || userDetails.login}</h2>
            <div onClick={() => handleModal(user)}>
              <MdClose color="white" size={28} />
            </div>
          </header>
          <div className={styles.userDetailsContainer}>
            <div className={styles.avatarContainer}>
              <img src={user.avatar_url} alt="User avatar" height="200px" />
            </div>
            <div className={styles.userDetailsContent}>
              <div>
                <span className={styles.detailTitle}>ID</span>
                <span>{userDetails.id}</span>
              </div>
              <div>
                <span className={styles.detailTitle}>User</span>
                <span>{userDetails.login}</span>
              </div>
              <div>
                <span className={styles.detailTitle}>Github Profile</span>
                <a href={userDetails.html_url} target="_blank">
                  {userDetails.html_url}
                </a>
              </div>
              <div>
                <span className={styles.detailTitle}>Creation Date: </span>
                {new Intl.DateTimeFormat("en-GB").format(
                  new Date(userDetails.created_at)
                )}
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button type="button">
                <span>Public repos: {userDetails.public_repos}</span>
                <span className={styles.click}>Click to see details</span>
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}

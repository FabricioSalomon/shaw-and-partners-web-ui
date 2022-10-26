import { MdClose } from "react-icons/md";
import { User, UserDetail } from "../../../model/Users";
import styles from "./styles.module.scss";

type UserDetailsProps = {
  user: User;
  userDetails: UserDetail;
  handleModal: (user: User) => void;
  handleShowUserDetails: (showUserDetails: boolean) => void;
};

export function UserDetails({
  user,
  userDetails,
  handleModal,
  handleShowUserDetails,
}: UserDetailsProps) {

  return (
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
          <button type="button" onClick={() => handleShowUserDetails(false)}>
            <span>Public repos: {userDetails.public_repos}</span>
            <span className={styles.click}>Click to see details</span>
          </button>
        </div>
      </div>
    </>
  );
}

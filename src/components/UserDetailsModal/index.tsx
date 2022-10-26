import { useEffect, useState } from "react";
import Modal from "react-modal";
import { User, UserDetail } from "../../model/Users";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import styles from "./styles.module.scss";
import { UserDetails } from "./UserDetail";
import { UserRepositoriesTable } from "./UserRepositoriesTable";

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
  const [showUserDetails, setShowUserDetails] = useState(true);
  const [userDetails, setUserDetails] = useState<UserDetail>({} as UserDetail);

  useEffect(() => {
    api
      .get<{ data: UserDetail }>(`/users/${user.login}/details`)
      .then(({ data }) => {
        setUserDetails(data.data);
        handleIsLoading(false);
      })
      .catch(() => {
        alert("Something went wrong getting user details");
      });
  }, [user]);

  function handleIsLoading(isModalLoading: boolean) {
    setIsLoading(isModalLoading);
  }

  function handleShowUserDetails(showUserDetails: boolean) {
    setShowUserDetails(showUserDetails);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => handleModal(user)}
      contentLabel="Add transaction"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          {showUserDetails ? (
            <UserDetails
              user={user}
              userDetails={userDetails}
              handleModal={handleModal}
              handleShowUserDetails={handleShowUserDetails}
            />
          ) : (
            <UserRepositoriesTable
              user={user}
              userDetails={userDetails}
              handleModal={handleModal}
              handleShowUserDetails={handleShowUserDetails}
            />
          )}
        </>
      )}
    </Modal>
  );
}

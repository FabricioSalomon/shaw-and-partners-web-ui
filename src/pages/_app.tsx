import type { AppProps } from "next/app";
import { useState } from "react";
import { Header } from "../components/Header";
import { UserDetailsModal } from "../components/UserDetailsModal";
import { User } from "../model/Users";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [isUserDetailsModalOpen, setUserDetailsModalOpen] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  function handleUserDetailsModal(user: User) {
    setUserDetailsModalOpen(!isUserDetailsModalOpen);
    setUser(user);
  }
  return (
    <>
      <Header />
      <Component
        {...pageProps}
        handleUserDetailsModal={handleUserDetailsModal}
      />
      {isUserDetailsModalOpen && (
        <UserDetailsModal
          isOpen={isUserDetailsModalOpen}
          handleModal={handleUserDetailsModal}
          user={user}
        />
      )}
    </>
  );
}

export default MyApp;

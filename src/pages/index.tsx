import { ProjectInformation } from "../components/ProjectInformation";
import { UsersList } from "../components/UsersList";
import { User } from "../model/Users";

type HomeProps = {
  handleUserDetailsModal: (user: User) => void;
  menuOption: string;
};

export default function Home({
  handleUserDetailsModal,
  menuOption,
}: HomeProps) {
  return (
    <>
      {menuOption === "home" ? (
        <UsersList handleUserDetailsModal={handleUserDetailsModal} />
      ) : (
        <ProjectInformation />
      )}
    </>
  );
}

import { PageHead } from "../components/PageHead";

type HomeProps = {
  users: any;
};

export default function Home({ users }: HomeProps) {
  return (
    <>
      <PageHead title="Home | Shaw and Partners - FS" />
    </>
  );
}

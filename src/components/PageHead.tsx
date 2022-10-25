import Head from "next/head";

type PageHeadProps = {
  title: string;
};

export function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

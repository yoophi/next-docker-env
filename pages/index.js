import getConfig from "next/config";

export default function Home(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export const getServerSideProps = async () => {
  const { serverRuntimeConfig } = getConfig();

  return {
    props: {
      projectDir: serverRuntimeConfig.projectDir,
    },
  };
};
